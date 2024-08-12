import Image from 'next/image'
import data from '../data.json'
import Link from 'next/link'
import PageComponent from '../PageComponent'

const Page = ({
    params,
}: {
    params: { category: string; subcategory: string }
}) => {
    const category = data.find((item) => item.id === params.category)
    if (!category) {
        return null
    }
    const subCategory = category.subcategory.find(
        (item) => item.id === params.subcategory
    )

    if (!subCategory) {
        return null
    }
    return (
        <>
            <PageComponent category={category} />
            {subCategory.items.map((item) => (
                <Link href={`https://instagram.com/${item.id}`} key={item.id}>
                    <div>
                        <Image
                            src={`/${item.id}.jpg`}
                            width={45}
                            height={45}
                            alt={item.title}
                        />
                        <span>{item.title}</span>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default Page
