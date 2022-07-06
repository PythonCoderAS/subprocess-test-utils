# subprocess-test-utils

Utility functions for testing subprocesses.

## API

### `runScript(scriptPath: string, args: string[] = []): Promise<boolean>`

Returns a boolean indicating whether the given script ran successfully or not.

**Parameters**

- `scriptPath`: The path to the script to run.
- `args`: An array of arguments to pass to the script.

**Returns**: A boolean indicating if the script exited successfully (exit code 0) or failed (exit code 1).

### `runScriptOutput(scriptPath: string, args: string[] = []): Promise<boolean>`

Returns the stdout and stderr of the given script.

**Parameters**

- `scriptPath`: The path to the script to run.
- `args`: An array of arguments to pass to the script.

**Returns**: An object with the `stdout` and `stderr` keys.
