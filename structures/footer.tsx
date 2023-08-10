import React, { FC } from 'react'
import moment from 'moment'
import {useRouter} from 'next/router'
import Link from 'next/link'
import { IFooter } from 'MKL/interfaces'
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap'

const Header: FC<IFooter> = (footer) => {
  let menu = footer.menus.filter(m => m.title === "Footer")[0]
  menu.exists = menu !== undefined;

  return (
    <footer className="footer">
        <div className="footer__main">
          <Container>
              <Row className="pt-5 text-white">
                  <Col xs={12} md={6} lg={3} className="mb-4">
                    <h4 className="fw-lighter text-uppercase mb-2 mb-lg-4">Contact us</h4>
                    <dl>
                      { footer.settings.phone ?
                        <>
                          <dt>Phone</dt>
                          <dd><a href={`tel:${footer.settings.phone}`}>{footer.settings.phone}</a></dd>
                        </>
                      : null }
                      { footer.settings.email ?
                        <>
                          <dt>Email</dt>
                          <dd><a href={`mailto:${footer.settings.email}`}>{footer.settings.email}</a></dd>
                        </>
                      : null }
                      { footer.settings.openingHours.length ?
                        <>
                          <dt>Opening Hours</dt>
                          <dd>
                            <div className="d-flex flex-column">
                              {footer.settings.openingHours.map((hour, index) => <div key={index}>{hour.day}: {hour.opening.toString()} - {hour.closing.toString()}</div>)}
                            </div>
                          </dd>
                        </>
                      : null }
                    </dl>
                  </Col>
                  <Col xs={12} md={6} lg={3} className="mb-4">
                    <h4 className="fw-lighter text-uppercase mb-2 mb-lg-4">Check out more</h4>
                    { menu.exists ?
                      <div className="d-flex flex-column">
                        {menu.links.map((link, index) =>
                          <Link key={index} href={link.url}>{link.title}</Link>
                        )}
                      </div>
                    : null }
                  </Col>
                  <Col xs={12} lg={6} className="mb-4">
                    <h4 className="fw-lighter text-uppercase mb-2 mb-lg-4">Keeping up</h4>
                    <Form>
                      <Form.Group className="mb-3" controlId="signupForm.Email">
                        <Form.Label>Sign up to stay informed on promotions and whats new!</Form.Label>
                        <Form.Control type="email" />
                      </Form.Group>
                    </Form>
                  </Col>
              </Row>
          </Container>
        </div>
    </footer>
  )
}

export default Header