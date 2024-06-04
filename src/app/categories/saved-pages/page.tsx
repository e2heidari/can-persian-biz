'use client'
import { NextPage } from 'next'
import { useStore } from '../../context/StoreContext'

const SavedPage: NextPage = () => {
    const { savedItems, removeItem } = useStore()

    return (
        <div>
            <h1>Saved Items</h1>
            <ul>
                {savedItems.map((item) => (
                    <li key={item.id}>
                        <a href={item.url}>{item.url}</a>
                        <button onClick={() => removeItem(item.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SavedPage
