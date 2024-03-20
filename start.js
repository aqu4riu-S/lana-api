import { spawn } from "child_process";

// Spawn a child process for _db.js
const dbProcess = spawn("node", ["_db.js"], { stdio: "inherit" });

// Listen for the exit event of _db.js
dbProcess.on("exit", (code, signal) => {
  if (code !== null) {
    console.log(`_db.js exited with code ${code}`);
  } else if (signal !== null) {
    console.log(`_db.js was killed with signal ${signal}`);
  }

  // Once _db.js is complete, run index.js
  const indexProcess = spawn("node", ["index.js"], { stdio: "inherit" });
});
