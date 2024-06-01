'use client'

import { useState, useEffect } from 'react'

const useSavedPages = () => {
    const [savedPages, setSavedPages] = useState<string[]>([])

    useEffect(() => {
        const storedPages = localStorage.getItem('savedPages')
        if (storedPages) {
            setSavedPages(JSON.parse(storedPages))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('savedPages', JSON.stringify(savedPages))
    }, [savedPages])

    const savePage = (url: string) => {
        if (!savedPages.includes(url)) {
            setSavedPages([...savedPages, url])
        }
    }

    const removePage = (url: string) => {
        setSavedPages(savedPages.filter((page) => page !== url))
    }

    return { savedPages, savePage, removePage }
}

export default useSavedPages
