const CHARS = `abcdefghijklmnopqrstuvwxyz`
const CHARS_ARR = Array.from(CHARS)

export type SeperatedWord = {
	start: number
	end: number
	content: string
}

export const seperateWords = (str: string): SeperatedWord[] => {
	const arr = Array.from(str)
	const words = [] as SeperatedWord[]
	let currWord = ""
	let currStart = 0
	arr.forEach((charProbablyCap, i) => {
		const char = charProbablyCap.toLowerCase()
		if (CHARS.includes(char)) {
			if (currWord === "") {
				currStart = i
			}
			currWord += char
		} else if (currWord !== "") {
			words.push({ start: currStart, end: i - 1, content: currWord })
			currWord = ""
		}
	})

	return words
}
