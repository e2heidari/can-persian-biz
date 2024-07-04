'use client'
import { atom, selector, DefaultValue, useSetRecoilState } from 'recoil'

export interface Item {
    url: string
    id: string
    title: string
    post: string
    followers: string
    following: string
    image: string
}

// Utility function to load items from local storage
const loadSavedItems = (): Item[] => {
    if (typeof window !== 'undefined') {
        const storedItems = localStorage.getItem('savedItems')
        return storedItems ? JSON.parse(storedItems) : []
    }
    return []
}
export const savedActiveState = atom({
    key: 'booleanState', // unique key for the atom
    default: false, // initial value of the boolean state
})

// Atom to hold the saved items state
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

// Selector to add an item to the saved items state
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

// Selector to remove an item from the saved items state
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

// Custom hooks to use the selectors and state
export const useAddItem = () => useSetRecoilState(addItemSelector)
export const useRemoveItem = () => useSetRecoilState(removeItemSelector)
