'use client'
import { atom, selector, DefaultValue } from 'recoil'

export interface Item {
    url: string
    id: string
    title: string
    post: string
    followers: string
    following: string
    image: string
}

export interface JSONLengths {
    [key: string]: number
}

const loadSavedItems = (): Item[] => {
    if (typeof window !== 'undefined') {
        const storedItems = localStorage.getItem('savedItems')
        return storedItems ? JSON.parse(storedItems) : []
    }
    return []
}

export const savedItemsState = atom<Item[]>({
    key: 'savedItemsState',
    default: loadSavedItems(),
    effects: [
        ({ onSet }) => {
            onSet((newItems) => {
                localStorage.setItem('savedItems', JSON.stringify(newItems))
            })
        },
    ],
})

export const savedActiveState = atom({
    key: 'booleanState', // unique key for the atom
    default: false, // initial value of the boolean state
})

export const selectedNameState = atom<string>({
    key: 'selectedNameState',
    default: '',
})

export const instDataState = atom<Item[]>({
    key: 'instDataState',
    default: [],
})

export const selectedCategoryIconState = atom<string>({
    key: 'selectedCategoryIconState',
    default: 'icons8-instagram-96.png',
})

export const iconsVisibleState = atom<boolean>({
    key: 'iconsVisibleState',
    default: false,
})

export const sortAscendingState = atom<boolean>({
    key: 'sortAscendingState',
    default: false,
})

export const sortDescendingState = atom<boolean>({
    key: 'sortDescendingState',
    default: false,
})

export const jsonLengthsState = atom<JSONLengths>({
    key: 'jsonLengthsState',
    default: {},
})

export const activeState = atom<boolean>({
    key: 'activeState',
    default: false,
})

// Selectors
export const addItemSelector = selector<void>({
    key: 'addItemSelector',
    get: ({ get }) => {},
    set: ({ set, get }, newValue) => {
        const currentItems = get(savedItemsState)
        if (!(newValue instanceof DefaultValue)) {
            const item = newValue as unknown as Item
            const itemExists = currentItems.some(
                (savedItem) => savedItem.id === item.id
            )
            if (!itemExists) {
                set(savedItemsState, [...currentItems, item])
            }
        }
    },
})

export const removeItemSelector = selector<void>({
    key: 'removeItemSelector',
    get: ({ get }) => {},
    set: ({ set, get }, newValue) => {
        const currentItems = get(savedItemsState)
        if (!(newValue instanceof DefaultValue)) {
            const itemId = newValue as unknown as string
            const updatedItems = currentItems.filter(
                (item) => item.id !== itemId
            )
            set(savedItemsState, updatedItems)
        }
    },
})

export const sortOrderState = atom<'asc' | 'desc' | null>({
    key: 'sortOrderState',
    default: null,
})
