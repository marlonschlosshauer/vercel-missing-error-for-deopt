import React from "react";
import { promises as fs } from "fs";

export interface ProductProps {
  searchParams: Record<string, string | string[]>;
}

export const Product: React.FC<ProductProps> = async ({ searchParams }) => {
  const { id } = searchParams;

  const file = await fs.readFile(
    `${process.cwd()}/src/data/products.json`,
    "utf8",
  );

  const products = JSON.parse(file).products;

  const selectedProductId = (Array.isArray(id) ? id[0] : id) ?? "1";
  const product = products[selectedProductId];

  return (
    <div className="block-product">
      <div>{JSON.stringify(product)}</div>
    </div>
  );
};
