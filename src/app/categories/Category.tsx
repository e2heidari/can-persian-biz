import React from 'react'
import styled from 'styled-components'

const Categories = styled.button`
    text-align: center;
    vertical-align: top;
    display: inline-block;
    width: 62px;
    font-weight: 300;
    color: #fff;
    margin: 5px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CategoryIcon = styled.img`
    width: 60px; /* Adjust the size of the icon as needed */
    height: 60px; /* Adjust the size of the icon as needed */
    border-radius: 50%;
`

const CategoryText = styled.div`
    color: black;
    width: 160%;
    line-height: 1.2em;
    text-overflow: ellipsis;
    text-align: center;
    right: 0;
    font-size: 13px;
    font-weight: bold;
    margin: 0.2em 0 0;
`

interface CategoryProps {
    index: number
    icon: string // Icon file name
    text: string // Text for the category
}

const Category: React.FC<CategoryProps> = ({ index, icon, text }) => {
    return (
        <Categories>
            <CategoryIcon src={`/${icon}`} alt={`Icon ${index + 1}`} />
            <CategoryText>{text}</CategoryText>
        </Categories>
    )
}

export default Category
