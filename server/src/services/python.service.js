const { execFile } = require("child_process");
const path = require("path");

const runPythonRecon = (domain) => {
    return new Promise((resolve, reject) => {
        const pythonPath = "python3";
        const scriptPath = path.join(__dirname, "../../../python/main.py");

        console.log("[*] Starting Python process...");

        execFile(
            pythonPath,
            [scriptPath, domain],
            { timeout: 10 * 60 * 1000 },
            (error, stdout, stderr) => {

                if (stderr) {
                    console.log("[PY STDERR]", stderr.trim());
                }

                if (!stdout) {
                    return reject("No output from Python");
                }

                try {
                    const parsed = JSON.parse(stdout);
                    resolve(parsed);
                } catch {
                    reject("Invalid JSON from Python");
                }
            }
        );
    });
};

module.exports = { runPythonRecon };
