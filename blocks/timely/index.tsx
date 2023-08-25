import React, { FC } from 'react'
import ITimely from './ITimely'
import Iframe from 'react-iframe'
import { Container, Row, Col } from 'react-bootstrap'

const Timely: FC<ITimely> = (timely) => {
    return (
        <article className={timely.alias}>
            <Container className={`${timely.alias}__container`}>
                <Row className={`${timely.alias}__row`}>
                    <Col className={`${timely.alias}__col`}>
                        <Iframe url="https://book.gettimely.com/mkluxeaesthetics/book/embed" className={`${timely.alias}__iframe rounded`} id="timelyWidget"></Iframe>
                    </Col>
                </Row>
            </Container>
        </article>
    )
}

export default Timely