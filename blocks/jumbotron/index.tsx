import React, { FC } from 'react'
import IJumbotron from './IJumbotron';
import { Container, Row, Col } from 'react-bootstrap';

const Jumbotron: FC<IJumbotron> = (jumbotron) => {
    return (
        <article className={jumbotron.alias} style={jumbotron.image.length ? { backgroundImage:`url(${jumbotron.image})` } : {}}>
            <Container className={`${jumbotron.alias}__container`}>
                <Row className={`${jumbotron.alias}__row`}>
                    <Col className={`${jumbotron.alias}__col`} dangerouslySetInnerHTML={{ __html: jumbotron.richtext }}></Col>
                </Row>
            </Container>
        </article>
    )
}

export default Jumbotron