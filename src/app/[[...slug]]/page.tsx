import { Blocks } from "@/components/blocks/Blocks";
import { promises as fs } from "fs";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const file = await fs.readFile(
    `${process.cwd()}/src/data/pages.json`,
    "utf8",
  );

  const data = JSON.parse(file).pages;
  return Object.keys(data).map((slug) => ({ slug: [slug] }));
}

export const revalidate = 60;

export default async function Page({ params, searchParams }: any) {
  const { slug } = params;
  const file = await fs.readFile(
    `${process.cwd()}/src/data/pages.json`,
    "utf8",
  );

  const data = JSON.parse(file);
  const page = data.pages[slug];

  if (!page) {
    return notFound();
  }

  return (
    <div>
      {page.map((block: any, index: number) => {
        const { id, ...args } = block;
        return <Blocks key={index} id={id} args={{ ...args, searchParams }} />;
      })}
    </div>
  );
}
