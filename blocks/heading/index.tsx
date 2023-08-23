import React, { FC } from 'react'
import IHeading from './IHeading';
import { Container, Row, Col } from 'react-bootstrap';

const Heading: FC<IHeading> = (heading) => {
    return (
        <article className={heading.alias}>
            <Container className={`${heading.alias}__container`}>
                <Row className={`${heading.alias}__row`}>
                    <Col className={`${heading.alias}__col`}>
                        {React.createElement(heading.size.toLowerCase(), { className: `${heading.alias}__heading ${heading.alias}__${heading.size.toLowerCase()}` }, heading.text)}
                    </Col>
                </Row>
            </Container>
        </article>
    )
}

export default Heading