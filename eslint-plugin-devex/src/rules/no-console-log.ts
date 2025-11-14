import { Rule } from 'eslint';

const rule: Rule.RuleModule = {
  // meta: Information about the rule
  meta: {
    type: 'problem', // 'problem', 'suggestion', or 'layout'
    docs: {
      description: 'Disallow the use of console.log',
      recommended: true,
      url: 'https://github.com/jgdonas/eslint-plugin-devex/docs/rules/no-console-log.md', // (Optional: TODO)
    },
    schema: [], // No options for this rule
    fixable: 'code',
  },

  // create: The function that does the work
  create: (context): Rule.RuleListener => {
    // `context` is an object with helpers.
    // The most important one is context.report()

    // We return an object here. This object is our "Visitor".
    // We tell ESLint what "nodes" we want to visit as it
    // walks the AST.
    return {
      CallExpression(node) {
        if (node.callee.type !== 'MemberExpression') {
          return; // Not `object.property()`, so we don't care.
        }

        if (node.callee.object.type !== 'Identifier') {
          return; // It's something complex like `getConsole().log()`
        }

        if (node.callee.property.type !== 'Identifier') {
          return; // It's dynamic, like `console['log']()`
        }

        // Now we know we have a structure like `A.B()`
        // Is the object name "console"?
        // AND Is the property name "log"?
        if (node.callee.object.name === 'console' && node.callee.property.name === 'log') {
          context.report({
            node,
            message: 'Using console.log is not allowed.',
            fix(fixer: Rule.RuleFixer) {
              // We want to remove the entire `console.log()` statement.
              // Since it's a standalone statement, we remove its parent node.
              return fixer.remove(node.parent);
            },
          });
        }
      },
    };
  },
};

export default rule;
