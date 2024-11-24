const ERROR = 2;
export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-empty": [ERROR, "never"],
    "type-case": [ERROR, "always", "lower-case"],
    "type-enum": [ERROR, "always", ["feat", "fix", "docs", "style", "refactor", "test", "chore"]],
  },
};
