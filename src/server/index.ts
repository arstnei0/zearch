import { seperateWords } from "./words"

export type WordPosition = {
	id: string
	start: number
	end: number
}

export const generate = <E extends { id: string; content: string }>(
	entries: E[]
) => {
	const wmap = new Map<string, WordPosition[]>()
	entries.forEach((entry) => {
		const words = seperateWords(entry.content)
		words.forEach(({ content: word, start, end }) => {
			if (!wmap.has(word)) {
				wmap.set(word, [])
			}
			const existing = wmap.get(word)
			wmap.set(word, [...(existing as any), { id: entry.id, start, end }])
		})
	})
	return wmap
}
