import {expect, use} from "chai";
import * as chaiAsPromised from "chai-as-promised";
import {runScript, runScriptOutput} from "../src";
import {join, normalize} from 'path';

use(chaiAsPromised);

const scriptDir = normalize(join(__dirname, "scripts"));

describe("runScript tests", () => {
  const runScriptBase = join(scriptDir, "runScript");
  it("should return true when script runs successfully", async () => {
    expect(runScript(join(runScriptBase, "success.sh"))).to.eventually.equal(true);
  });
  it("should return false when script errors", async () => {
    expect(runScript(join(runScriptBase, "fail.sh"))).to.eventually.equal(false);
  });
})

describe("runScriptOutput stdout tests", () => {
  const runScriptOutputBase = join(scriptDir, "runScriptOutput", "stdout");
  it("should return stdout when script is successful", async () => {
    expect(runScriptOutput(join(runScriptOutputBase, "success.sh"))).to.eventually.have.property("stdout").which.contain("This is a test script.");
  });
  it("should return stdout when script errors", async () => {
    expect(runScriptOutput(join(runScriptOutputBase, "fail.sh"))).to.eventually.have.property("stdout").which.contain("This is a test script.");
  });
})

describe("runScriptOutput stderr tests", () => {
  const runScriptOutputBase = join(scriptDir, "runScriptOutput", "stderr");
  it("should return stderr when script is successful", async () => {
    expect(runScriptOutput(join(runScriptOutputBase, "success.sh"))).to.eventually.have.property("stderr").which.contain("This is a test script.");
  });
  it("should return stderr when script errors", async () => {
    expect(runScriptOutput(join(runScriptOutputBase, "fail.sh"))).to.eventually.have.property("stderr").which.contain("This is a test script.");
  });
})
