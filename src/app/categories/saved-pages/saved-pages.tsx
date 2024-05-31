// components/SavedPages.tsx
import React from 'react'
import useSavedPages from '../hooks/useSavedPages'

const SavedPages: React.FC = () => {
    const { savedPages } = useSavedPages()

    return (
        <div>
            <h1>Saved Pages</h1>
            <ul>
                {savedPages.map((page, index) => (
                    <li key={index}>
                        <a
                            href={page}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SavedPages
