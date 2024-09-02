import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.browser },
    rules: {
      "semi": ["error", "always"], // Exige ponto e vírgula no final das linhas
      "quotes": ["error", "double"], // Exige aspas duplas
      "no-unused-vars": ["warn"], // Emite um aviso para variáveis não utilizadas
      // Adicione mais regras conforme necessário
    }
  },
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];