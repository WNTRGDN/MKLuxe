import React, { FC } from 'react'
import IImage from './IImage';
import { Container, Row, Col } from 'react-bootstrap';

const Image: FC<IImage> = (image) => {
    return (
        <article className={image.alias}>
            <Container className={`${image.alias}__container`}>
                <Row className={`${image.alias}__row`}>
                    <Col className={`${image.alias}__col`}>
                        <img className={`${image.alias}__image rounded wntr__shadow`} src={image.src} />
                    </Col>
                </Row>
            </Container>
        </article>
    )
}

export default Image