import { Item } from './hooks/recoilState'

const convertToNumber = (str: string) => {
    if (str.includes('K')) {
        return parseFloat(str.replace('K', '')) * 1000
    }
    if (str.includes('M')) {
        return parseFloat(str.replace('M', '')) * 1000000
    }
    return parseFloat(str.replace(',', ''))
}

export const sortAscendingData = (data: Item[]): Item[] => {
    const dataCopy = [...data]
    return dataCopy.sort((a, b) => {
        const followersA = convertToNumber(a.followers)
        const followersB = convertToNumber(b.followers)
        return followersB - followersA // Sort descending
    })
}

export const sortDescendingData = (data: Item[]): Item[] => {
    const dataCopy = [...data]
    return dataCopy.sort((a, b) => {
        const followersA = convertToNumber(a.followers)
        const followersB = convertToNumber(b.followers)
        return followersA - followersB // Sort descending
    })
}
