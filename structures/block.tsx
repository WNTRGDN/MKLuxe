import React, { FC } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Alert, Carousel, Heading } from 'MKL/blocks'
import { IBlock } from 'MKL/interfaces'

var controls: { [key: string]: any } = {
    Alert: Alert,
    Carousel: Carousel,
    Heading: Heading
}

const Block: FC<IBlock> = (block) => {
    const Block = controls[block.type]

    console.log(block)

    return (
        <main className="wntrBlocks">
            <Block {...block} />
        </main>
    )
}

export default Block