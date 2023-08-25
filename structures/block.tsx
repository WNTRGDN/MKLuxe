import React, { FC } from 'react'
import { Alert, Carousel, Heading, Split, Text, Image, Jumbotron, Cards, Timely } from 'MKL/blocks'
import { IBlock } from 'MKL/interfaces'

var controls: { [key: string]: any } = {
    Alert: Alert,
    Carousel: Carousel,
    Heading: Heading,
    Split: Split,
    Text: Text,
    Image: Image,
    Jumbotron: Jumbotron,
    Cards: Cards,
    Timely: Timely
}

const Block: FC<IBlock> = (block) => {
    if (controls[block.type] !== undefined){
        const Block = controls[block.type]
        return (
            <Block {...block} />
        )
    }
    return null
}

export default Block