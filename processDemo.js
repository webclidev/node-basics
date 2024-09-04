console.log("::process.version::", process.version);
console.log("::process.arch::", process.arch);
console.log("::process.argv::", process.argv[2]); // node processDemo.js OmNamahShivay
console.log("::process.pid::", process.pid);
console.log("::process.cwd()::", process.cwd());
console.log("::process.title::", process.title);
console.log("::process.memoryUsage()::", process.memoryUsage());
process.on("exit", (code) => {
  console.log("About to exit with code: " + code);
});
process.exit(0);
console.log("After process.exit(0)");
