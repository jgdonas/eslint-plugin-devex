"use strict";

// src/rules/no-console-log.ts
var rule = {
  // meta: Information about the rule
  meta: {
    type: "problem",
    // 'problem', 'suggestion', or 'layout'
    docs: {
      description: "Disallow the use of console.log",
      recommended: true,
      url: "https://github.com/your-repo/eslint-plugin-devex/docs/rules/no-console-log.md"
      // (Optional: TODO)
    },
    schema: []
    // No options for this rule
  },
  // create: The function that does the work
  create: (context) => {
    return {
      CallExpression(node) {
        if (node.callee.type !== "MemberExpression") {
          return;
        }
        if (node.callee.object.type !== "Identifier") {
          return;
        }
        if (node.callee.property.type !== "Identifier") {
          return;
        }
        if (node.callee.object.name === "console" && node.callee.property.name === "log") {
          context.report({
            node,
            message: "Using console.log is not allowed."
          });
        }
      }
    };
  }
};
var no_console_log_default = rule;

// src/index.ts
var plugin = {
  rules: {
    // We map the rule name 'no-console-log'
    // to the module we just imported.
    "no-console-log": no_console_log_default
  }
};
module.exports = plugin;
