import classnames from "classnames";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({});

const classes = (
  classes: string[] | string,
  conditionalClasses: { [key: string]: boolean } = {},
  className = "",
): string => twMerge(classnames(classes, conditionalClasses, className));

export default classes;
