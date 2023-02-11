export const generate = <E extends { id: string; content: string }>(
	entries: E[]
) => {
	const wmap = new Map<string, string[]>()
	entries.forEach((entry) => {
		const words = entry.content.split(/[\n \t\r]/gi)
		words.forEach((word) => {
			if (!wmap.has(word)) {
				wmap.set(word, [])
			}
			const existing = wmap.get(word) as string[]
			wmap.set(word, [...existing, entry.id])
		})
	})
	return wmap
}
