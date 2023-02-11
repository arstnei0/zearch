import { WordPosition } from "../server"

export interface Fetcher {
	word: (word: string) => WordPosition
}

export const createApiFetcher = (apiUrl: string) => {}

export const createMemeoryFetcher = () => {}

export const createSearch = (fetcher: Fetcher) => {
	return
}
