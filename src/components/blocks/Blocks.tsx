import React from "react";
import { Text } from "./Text";
import { Product } from "./Product";

const blocks = {
  text: Text,
  product: Product,
};

export interface BlocksProps {
  id: keyof typeof blocks;
  args: any;
}

export const Blocks: React.FC<BlocksProps> = ({ id, args }) => {
  const Block = blocks[id];

  if (!Block) {
    return null;
  }

  return <Block {...args}></Block>;
};
