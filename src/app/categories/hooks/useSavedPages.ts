// hooks/useSavedPages.ts
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

    return { savedPages, savePage }
}

export default useSavedPages
