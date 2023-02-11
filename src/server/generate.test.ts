import { test, expect, assert } from "vitest"
import { WordPosition, generate } from "."

test("generate works", () => {
	const id = "hello-world"
	const result = generate([{ id, content: "Hello world!" }])
	const exp = new Map<string, WordPosition[]>()
	exp.set("hello", [{ id, start: 0, end: 4 }])
	exp.set("world", [{ id, start: 6, end: 10 }])
	expect(result).toEqual(exp)
})
