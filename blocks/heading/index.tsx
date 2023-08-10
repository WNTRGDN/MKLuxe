import React, { FC } from 'react'
import IHeading from './IHeading';
import { Container, Row, Col } from 'react-bootstrap';

const Heading: FC<IHeading> = (heading) => {
    return (
        <Container className={heading.alias}>
            <Row>
                <Col>
                    {React.createElement(heading.size.toLowerCase(), null, heading.text)}
                </Col>
            </Row>
        </Container>
    )
}

export default Heading