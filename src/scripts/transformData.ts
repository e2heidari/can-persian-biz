const fs = require('fs')
const path = require('path')

// Function to read data from a JSON file
const readDataFromFile = (filePath: string) => {
    const rawData = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(rawData)
}

// Reading data from JSON files using absolute paths
const oldData1 = readDataFromFile(
    path.join(
        __dirname,
        '../app/categories/data/accounting-insurance/Accountant.json'
    )
)
const oldData2 = readDataFromFile(
    path.join(
        __dirname,
        '../app/categories/data/accounting-insurance/Financial.json'
    )
)
const oldData3 = readDataFromFile(
    path.join(
        __dirname,
        '../app/categories/data/accounting-insurance/Insurance.json'
    )
)

// Reading the image data JSON file
const imageData = readDataFromFile(
    path.join(__dirname, '../app/categories/data/images.json')
)

// Function to clean category name (replace spaces and "&" with hyphens)
const cleanCategoryName = (categoryName: string) => {
    return categoryName
        .replace(/ /g, '-') // Replace spaces with hyphens
        .replace(/ & /g, '-') // Replace "&" with hyphen
}

// Transform the old data to the new structure using a for loop
const transformData = (oldData: any[], fileName: string) => {
    const categoryId = cleanCategoryName(fileName).toLowerCase() // Get category ID from filename
    const categoryName = fileName // Use the same name for category

    const transformedData = [] // Initialize an empty array for transformed data

    for (const item of oldData) {
        // Find the corresponding image data based on item.id
        const image = imageData.find(
            (img: any) => img.filename === `${item.id}.jpg`
        )

        transformedData.push({
            id: item.id, // Use the "id" from the old data
            name: item.title, // Use the "title" from the old data as name
            socialMedia: {
                instagram: {
                    id: item.id, // Use "id" as Instagram ID
                    name: item.title, // Use "title" as Instagram name
                    followers: (() => {
                        const followersStr = item.followers
                            .replace(',', '')
                            .toUpperCase()
                        if (followersStr.includes('K')) {
                            return (
                                parseFloat(followersStr.replace('K', '')) * 1000
                            )
                        } else if (followersStr.includes('M')) {
                            return (
                                parseFloat(followersStr.replace('M', '')) *
                                1000000
                            )
                        } else {
                            return parseFloat(followersStr)
                        }
                    })(),
                    businessFollowersId: [], // Set businessFollowers to empty for now
                    isVerified: false,
                    imageId: image ? image.id : null, // Add imageId if a matching image is found
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
const transformedData3 = transformData(oldData3, 'Insurance')

// Save the transformed data
saveToFile([...transformedData1, ...transformedData2, ...transformedData3])
