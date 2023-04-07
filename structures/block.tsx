import React, { FC } from 'react'
import { Row, Col } from 'react-bootstrap';
import { Alert, Carousel } from 'MKL/controls'
import { IBlock } from 'MKL/interfaces';

var controls: { [key: string]: any } = {
    alert: Alert,
    carousel: Carousel
};

const Block: FC<IBlock> = (block) => {
    const ControlComponent = controls[block.type]
    return (
        <Row>
            <Col>
                <ControlComponent {...block} />
            </Col>
        </Row>
    )
}

export default Block