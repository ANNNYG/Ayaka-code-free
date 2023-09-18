module.exports = {
  extends: ["@commitlint/config-conventional"], // extends can be nested
  rules: {
    "type-enum": [2, "always", ["feat", "fix", "doc"]],
  },
};
