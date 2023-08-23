import React, { FC } from 'react'
import IText from './IText';
import { Container, Row, Col } from 'react-bootstrap';

const Text: FC<IText> = (text) => {
    return (
        <article className={text.alias}>
            <Container className={`${text.alias}__container`}>
                <Row className={`${text.alias}__row`}>
                    <Col className={`${text.alias}__col`} dangerouslySetInnerHTML={{ __html: text.richtext }}>
                    </Col>
                </Row>
            </Container>
        </article>
    )
}

export default Text