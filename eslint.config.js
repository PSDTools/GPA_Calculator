import sheriff from "eslint-config-sheriff";
import { defineFlatConfig } from "eslint-define-config";

const sheriffOptions = {
  react: false,
  lodash: false,
  next: false,
  playwright: false,
  jest: false,
  vitest: true,
};

export default defineFlatConfig([
  ...sheriff(sheriffOptions),
  {
    rules: {
      "storybook/default-exports": "off",
      "storybook/prefer-pascal-case": "off",
      "padding-line-between-statements": "off",
      "@typescript-eslint/naming-convention": "off",
      "prefer-destructuring": "off",
      "unicorn/prefer-query-selector": "off",
      "func-style": ["error", "declaration", { allowArrowFunctions: true }],
      "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
      "operator-assignment": ["off", "always"],
      "fp/no-class": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "no-console": "warn",
    },
  },
  {
    ignores: ["src/sw.ts"],
  },
]);