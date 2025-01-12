import fetch from 'node-fetch'

const CLOUDFLARE_API_TOKEN = 'your_api_token'
const CLOUDFLARE_ACCOUNT_ID = 'your_account_id'

const fetchImages = async () => {
    const url = `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/images/v1`

    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
            'Content-Type': 'application/json',
        },
    })

    const data = await response.json()
    if (data.success) {
        const images = data.result.map((image: any) => ({
            id: image.id,
            name: image.filename,
        }))
        console.log(images)
    } else {
        console.error('Failed to fetch images:', data.errors)
    }
}

fetchImages()
