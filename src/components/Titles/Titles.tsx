import React from 'react'
import { TitleStyles } from './TitlesStyles'

type title = {
    name: string,
    family: string,
    fontStyle: string,
    weight: string,
    size: string,
    lineHeight: string,
    display: string,
    align: string,
    spacing: string,
    transform: string,
}

export const Title = ({ name, family, fontStyle, weight, size, lineHeight, display, align, spacing, transform }: title) => {
    return (
        <div>
            <TitleStyles 
                family={family} 
                fontStyle={fontStyle} 
                weight={weight} 
                size={size} 
                lineHeight={lineHeight} 
                display={display} 
                align={align} 
                spacing={spacing} 
                transform={transform}
            >
                {name}
            </TitleStyles>
        </div>
    )
}
