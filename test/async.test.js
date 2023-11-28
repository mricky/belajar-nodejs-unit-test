import {sayHelloAsync} from "../src/async.js";

test("test async function", async () => {
    const result = await sayHelloAsync("Ricky");
    expect(result).toBe("Hello Ricky");
});

test("test async matchers", async () => {
    await expect(sayHelloAsync("Ricky")).resolves.toBe("Hello Ricky");
    await expect(sayHelloAsync()).rejects.toBe("Name is empty");
});