import oxlint from "eslint-plugin-oxlint";

const config = [...oxlint.buildFromOxlintConfigFile("./oxlint.json")];

export default config;
