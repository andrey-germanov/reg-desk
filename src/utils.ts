import { Layout } from "react-grid-layout";

export const getDinamicWidthChart = (layout: Layout[], nameChart: string) => {
  let width = 400;
  for (const item of layout) {
    if (item.i === nameChart) {
        return width = item.w * 100;
    };
  }
  return width;
};
