import React, { FC } from 'react'
import { Block } from 'MKL/structures'
import { IMain } from 'MKL/interfaces'
import { Navigation } from 'MKL/components'
import { Container } from 'react-bootstrap'

const Main: FC<IMain> = (main) => {
    return (
        <Container>
            <Navigation {...main} />
            {main.blocks.map((block, index) => <Block key={index} {...block} />)}
        </Container>
    )
}

export default Main