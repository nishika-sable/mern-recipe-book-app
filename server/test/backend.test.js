import test from "node:test";
import assert from "node:assert";
import request from "supertest";
import app from "../index.js";

test("GET / should return 200", async () => {
  const response = await request(app).get("/");

  assert.strictEqual(response.statusCode, 200);
  assert.deepStrictEqual(response.body, {
    message: "Hello World!",
  });
});
