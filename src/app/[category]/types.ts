interface Category {
    id: string
    name: string
    description: string
    image: string
}

interface SubCategory {
    id: string
    categoryId: string
    name: string
    description: string
    image: string
}

interface Item {
    id: string
    categoryId: string
    title: string
    followers: number
    posts: number
    instagramId: string
    subcategoryId?: string | undefined
    locationId?: string | undefined
}

interface Location {
    id: string
    name: string
    description: string
    lat: number
    long: number
    image: string
}
