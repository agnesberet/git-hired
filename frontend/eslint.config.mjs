import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    rules: {
      // ─── Code quality ───────────────────────────────
      "no-console": "warn",                        // remind you to clean up logs
      "no-unused-vars": "off",                     // handled by TypeScript
      "@typescript-eslint/no-unused-vars": ["warn", {
        argsIgnorePattern: "^_",                   // allow _unused convention
        varsIgnorePattern: "^_",
      }],
      "@typescript-eslint/no-explicit-any": "warn", // avoid lazy any types

      // ─── React / Next.js ────────────────────────────
      "react/self-closing-comp": "warn",           // <Component /> not <Component></Component>
      "react/jsx-curly-brace-presence": ["warn", { // no unnecessary {"strings"}
        props: "never",
        children: "never",
      }],

      // ─── Imports ────────────────────────────────────
      "import/no-duplicates": "warn",              // no duplicate imports

      // ─── Best practices ─────────────────────────────
      "prefer-const": "error",                     // always const when possible
      "no-var": "error",                           // no var, ever
      "eqeqeq": ["error", "always"],               // always === not ==
    }
  },

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;