
const test = require("node:test");
const assert = require("node:assert/strict");
const http = require("node:http");
const { spawn } = require("node:child_process");

test("web application returns a successful response", async (t) => {
  const port = 4000 + Math.floor(Math.random() * 1000);

  const app = spawn(process.execPath, ["app.js"], {
    env: { ...process.env, PORT: String(port) },
    stdio: "ignore"
  });

  t.after(() => {
    app.kill();
  });

  let response;
  let lastError;

  // Wait for the server to become ready.
  for (let i = 0; i < 50; i++) {
    try {
      response = await new Promise((resolve, reject) => {
        const request = http.get(
          `http://127.0.0.1:${port}`,
          (res) => {
            let body = "";

            res.on("data", chunk => body += chunk);
            res.on("end", () => resolve({
              status: res.statusCode,
              body
            }));
          }
        );

        request.setTimeout(1000, () => {
          request.destroy(new Error("Request timeout"));
        });

        request.on("error", reject);
      });

      break;
    } catch (err) {
      lastError = err;

      if (app.exitCode !== null) {
        throw new Error("Application stopped before starting");
      }

      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  if (!response) {
    throw lastError || new Error("Server did not start");
  }

  assert.equal(response.status, 200);
  assert.match(response.body, /Hello, DevOps!/);
});