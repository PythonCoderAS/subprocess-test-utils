import { execFile } from "child_process";
import { promisify } from "util";

/**
 * Returns a boolean indicating whether the given script ran successfully or not.
 * @param scriptPath The path to the script to run.
 * @param args The command-line arguments to pass to the script.
 */
export async function runScript(
  scriptPath: string,
  args: string[] = []
): Promise<boolean> {
  const childProcPromise = promisify(execFile)(scriptPath, args);
  try {
    await childProcPromise;
  } catch {
    return false;
  }

  return true;
}

/**
 * Returns the stdout and stderr of the given script.
 * @param scriptPath The path to the script to run.
 * @param args The command-line arguments to pass to the script.
 * @returns An object with `stdout` and `stderr` properties.
 */
export async function runScriptOutput(
  scriptPath: string,
  args: string[] = []
): Promise<{ stdout: string; stderr: string }> {
  const childProcPromise = promisify(execFile)(scriptPath, args);
  try {
    return await childProcPromise;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    // Error object has stdout/stderr
    return e;
  }
}
