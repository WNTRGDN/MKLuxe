import React, { FC } from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import { IWebsite } from 'MKL/interfaces'
import { Container, Row, Col, Ratio, Navbar, Nav, Offcanvas } from 'react-bootstrap';

const Header: FC<IWebsite> = (website) => {
    const router = useRouter()
    let menu = website.menus.filter(m => m.title === "Main Menu")[0]
    
    menu.exists = menu !== undefined;

    return (
        <header className="header">
            <div className="header__info">
                <Container>
                    <Row className="py-1">
                        <Col xs={6} lg={4} className="text-start">
                            <a href={`tel:${website.settings.phone}`}>{website.settings.phone}</a>
                        </Col>
                        <Col lg={4} className="text-center d-none d-lg-block">
                            <span>{website.settings.address}</span>
                        </Col>
                        <Col xs={6} lg={4} className="text-end">
                            <a href={`mailto:${website.settings.email}`}>{website.settings.email}</a>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row className="justify-content-lg-center">
                    <Col xs={4}>
                        <Ratio aspectRatio="1x1" className="mx-auto">
                            <embed type="image/svg+xml" src={website.settings.logo} />
                        </Ratio>
                    </Col>
                    { menu.exists ?
                        <Col xs={8} lg={12}>
                            <Navbar expand="lg" className="justify-content-end">
                                <Navbar.Toggle aria-controls="menu__main" className="mt-2" />
                                <Navbar.Offcanvas id="menu__main" aria-labelledby="menu__main-heading" placement="end">
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title id="menu__main-heading"></Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <Nav className="header__navigation w-100" defaultActiveKey="/">
                                            {menu.includeHome ?
                                                <Nav.Item key={100} className="flex-grow-1 text-center">
                                                    <Nav.Link as={Link} eventKey={100} href="/" scroll={false}>Home</Nav.Link>
                                                </Nav.Item>
                                            : null }
                                            {menu.links.map((link, index) =>
                                                <Nav.Item key={index} className="flex-grow-1 text-center">
                                                    <Nav.Link as={Link} scroll={false} eventKey={index} href={link.url} className={router.asPath == link.url ? "active" : ""}>{link.title}</Nav.Link>
                                                </Nav.Item>
                                            ) }
                                            <Nav.Item key={100} className="flex-grow-1 text-center">
                                                <Nav.Link eventKey={900} href="https://bookings.gettimely.com/mkluxeaesthetics/bb/book">Book</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Offcanvas.Body>
                                </Navbar.Offcanvas>
                            </Navbar>
                        </Col>
                    : null}
                </Row>
            </Container>
        </header>
    )
}

export default Header