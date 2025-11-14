# `no-console-log`

This rule disallows the use of `console.log()` in your code.

## Why This Rule Is Important

`console.log()` statements are often used for debugging purposes during development. However, they can accidentally be left in production code, leading to:

*   **Information Leakage:** Sensitive data might be logged to the console, visible to end-users.
*   **Performance Overhead:** Excessive logging can impact application performance, especially in client-side applications.
*   **Clutter:** Unnecessary `console.log()` statements can clutter the browser's developer console, making it harder to find relevant messages.

By disallowing `console.log()`, this rule encourages developers to use more robust logging solutions (e.g., dedicated logging libraries) or to remove debugging statements before committing code.

## Rule Details

This rule identifies and flags any occurrences of `console.log()` in your JavaScript code.

### Examples

#### ❌ Incorrect

```javascript
console.log('Debugging information');
const data = { name: 'John Doe' };
console.log(data);
```

#### ✅ Correct

```javascript
// Use a dedicated logging library or remove debugging statements
// For example, using a custom logger:
import logger from './utils/logger';

logger.info('Debugging information');
```

```javascript
function greet(name) {
  console.info(`Hello, ${name}!`); // console.info is allowed
}
```

## When Not To Use It

If your project explicitly requires the use of `console.log()` for specific purposes (e.g., in a development-only environment where you want quick debugging output and have mechanisms to strip it for production), you might consider disabling this rule or configuring it to allow `console.log()` in certain contexts (though this rule currently does not offer such configuration options).

For most production-ready applications, it's recommended to keep this rule enabled.
