import React from "react";

export interface TextProps {
  text: string;
}

export const Text: React.FC<TextProps> = ({ text }) => (
  <div className="block-text">
    <h3>{text}</h3>
  </div>
);
