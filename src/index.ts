import * as core from "@actions/core";
import * as github from "@actions/github";
export async function run(): Promise<void> {
  try {
    const nameToGreet = core.getInput("who-to-greet");
    console.log(`Hello ${nameToGreet}`);
    const time = new Date().toString();
    core.setOutput("time", time);
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
