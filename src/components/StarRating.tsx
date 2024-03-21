import React from 'react'
import styled from 'styled-components'

interface StarRatingProps {
    rating: number
}

const StarContainer = styled.div`
    font-size: 24px; /* Adjust font size as needed */
`

const Star = styled.span`
    color: gold;
    clip-path: inset(
        0
            ${(props: { fillPercentage: number }) =>
                `${100 - props.fillPercentage}%`}
            0 0
    );
`

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    const filledStars = Math.floor(rating)
    const decimalFill = rating - filledStars

    return (
        <StarContainer>
            {[...Array(5)].map((_, index) => {
                let fillPercentage = 0
                if (index < filledStars) {
                    fillPercentage = 100
                } else if (index === filledStars) {
                    fillPercentage = decimalFill * 100
                }

                return (
                    <Star key={index} fillPercentage={fillPercentage}>
                        ★
                    </Star>
                )
            })}
        </StarContainer>
    )
}

export default StarRating
