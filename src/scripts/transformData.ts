import fs from 'fs'
import path from 'path'

// Function to read data from a JSON file
const readDataFromFile = (filePath: string) => {
    const rawData = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(rawData)
}

// Reading data from JSON files using absolute paths
const oldData1 = readDataFromFile(
    path.join(
        __dirname,
        'src/app/categories/data/accounting-insurance/Accountant.json'
    )
)
const oldData2 = readDataFromFile(
    path.join(
        __dirname,
        'src/app/categories/data/accounting-insurance/Financial.json'
    )
)

// Function to clean category name (replace spaces and "&" with hyphens)
const cleanCategoryName = (categoryName: string) => {
    return categoryName
        .replace(/ /g, '-') // Replace spaces with hyphens
        .replace(/ & /g, '-') // Replace "&" with hyphen
}

// Transform the old data to the new structure
const transformData = (oldData: any[], fileName: string) => {
    const categoryId = cleanCategoryName(fileName) // Get category ID from filename
    const categoryName = fileName // Use the same name for category

    const transformedData = []

    for (const item of oldData) {
        transformedData.push({
            id: item.id, // Use the "id" from the old data
            name: item.title, // Use the "title" from the old data as name
            socialMedia: {
                instagram: {
                    id: item.id, // Use "id" as Instagram ID
                    name: item.title, // Use "title" as Instagram name
                    followers: parseInt(item.followers.replace(/,/g, ''), 10), // Remove commas and convert to number
                    posts: parseInt(item.post, 10), // Convert "posts" to number
                    businessFollowers: 0, // Set businessFollowers to 0 for now
                },
            },
            category: {
                id: categoryId, // Use cleaned category ID
                name: categoryName, // Use cleaned category name
            },
            createdAt: new Date(),
            updatedAt: new Date(),
            serviceLocations: [],
            tags: [],
        })
    }

    return transformedData
}

// Save the transformed data to a new JSON file
const saveToFile = (data: any[]) => {
    const outputFilePath = path.join(__dirname, 'newData.json')
    fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 2), 'utf-8')
    console.log('Data has been saved to newData.json')
}

// Call the transformData function for each old data file
const transformedData1 = transformData(oldData1, 'Accountant')
const transformedData2 = transformData(oldData2, 'Financial')

// Save the transformed data
saveToFile([...transformedData1, ...transformedData2])
