'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface Item {
    url: string
    id: string
    // post: string
    // followers: string
    // following: string
    // image: string

    // Add more fields as necessary
}

interface StoreContextType {
    savedItems: Item[]
    addItem: (item: Item) => void
    removeItem: (id: string) => void
}

const StoreContext = createContext<StoreContextType | undefined>(undefined)

export const StoreProvider = ({ children }: { children: ReactNode }) => {
    const [savedItems, setSavedItems] = useState<Item[]>(() => {
        // Retrieve saved items from local storage
        if (typeof window !== 'undefined') {
            const storedItems = localStorage.getItem('savedItems')
            return storedItems ? JSON.parse(storedItems) : []
        }
        return []
    })

    const addItem = (item: Item) => {
        setSavedItems((prevItems) => {
            // Check if item already exists
            const itemExists = prevItems.some(
                (savedItem) => savedItem.id === item.id
            )
            if (itemExists) {
                return prevItems
            }
            const updatedItems = [...prevItems, item]
            localStorage.setItem('savedItems', JSON.stringify(updatedItems))
            return updatedItems
        })
    }
    const removeItem = (id: string) => {
        setSavedItems((prevItems) => {
            const updatedItems = prevItems.filter((item) => item.id !== id)
            localStorage.setItem('savedItems', JSON.stringify(updatedItems))
            return updatedItems
        })
    }

    return (
        <StoreContext.Provider value={{ savedItems, addItem, removeItem }}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStore = () => {
    const context = useContext(StoreContext)
    if (!context) {
        throw new Error('useStore must be used within a StoreProvider')
    }
    return context
}
