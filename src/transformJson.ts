import fs from 'fs'
import path from 'path'

interface Instagram {
    id: string
    name: string
    followers: number
    posts: number
    businessFollowers: number
}

interface Category {
    id: string
    name: string
}

interface Business {
    id: string
    name: string
    socialMedia: {
        instagram: Instagram
    }
    category: Category
    createdAt: string
    updatedAt: string
    serviceLocations: any[]
    tags: any[]
}

// Function to read JSON files from a directory
const readJsonFilesFromDir = (dir: string): any[] => {
    const files = fs.readdirSync(dir)
    let jsonData: any[] = []

    files.forEach((file) => {
        const filePath = path.join(dir, file)
        if (fs.statSync(filePath).isDirectory()) {
            jsonData = [...jsonData, ...readJsonFilesFromDir(filePath)] // Recurse into subdirectories
        } else if (file.endsWith('.json')) {
            const fileContents = fs.readFileSync(filePath, 'utf-8')
            const data = JSON.parse(fileContents)
            jsonData.push(...data)
        }
    })

    return jsonData
}

// Explicit type annotation for the transformDataToBusiness function
const transformDataToBusiness = (
    data: { id: string; title: string; followers: string; post: string }[],
    category: Category
): Business[] => {
    return data.map((item) => ({
        id: item.id,
        name: item.title,
        socialMedia: {
            instagram: {
                id: item.id,
                name: item.title,
                followers: parseInt(item.followers.replace(',', '')) || 0, // Removing commas for number parsing
                posts: parseInt(item.post) || 0, // Assuming you can extract posts, else set to 0
                businessFollowers: 0, // You can set this field as needed
            },
        },
        category: category,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        serviceLocations: [],
        tags: [],
    }))
}

// Specify the directory and category for the transformation
const category: Category = {
    id: 'accounting-insurance',
    name: 'Accounting & Insurance',
}

const dirPath = path.resolve(
    __dirname,
    'src',
    'app',
    'categories',
    'data',
    'accounting-insurance'
) // Adjust the path to your project structure

// Read JSON data from the directory
const rawData = readJsonFilesFromDir(dirPath)

// Transform the data into the Business[] structure
const businesses = transformDataToBusiness(rawData, category)

// Save the transformed JSON to a new file
fs.writeFileSync(
    path.resolve(__dirname, 'data', 'transformedBusinesses.json'),
    JSON.stringify(businesses, null, 2)
)

console.log('Transformation complete! Data saved to transformedBusinesses.json')
