import React, { FC } from 'react'
import { Block } from 'MKL/structures'
import { IPage } from 'MKL/interfaces'

const Main: FC<IPage> = (page) => {
    return (
        <>
            {page.blocks.length ? page.blocks.map((block, index) => <Block key={index} {...block} />) : null}
        </>
    )
}

export default Main