import React, { FC } from 'react'
import ICards from './ICards'
import Link from 'next/link'
import { Container, Row, Col, Image } from 'react-bootstrap'

const Cards: FC<ICards> = (cards) => {
    return (
        <article className={cards.alias}>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h2 className={`${cards.alias}__heading`}>
                            {cards.heading}
                        </h2>
                    </Col>
                    {cards.items.map((item, index) =>
                        <Col xs={6} md={4} xl={3} key={index}>
                            <Link className={`${cards.alias}__card`} href={item.link}>
                                <Image src={item.image} thumbnail />
                            </Link>
                        </Col>
                    )}
                </Row>
            </Container>
        </article>
    )
}

export default Cards