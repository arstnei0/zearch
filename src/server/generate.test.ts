import { test, expect, assert } from "vitest"
import { generate } from "."

test("generate works", () => {
	const result = generate([
		{ id: "hello-world", content: "Hello world! My name is Zihan." },
	])
	expect(result).toBe([])
})
