import React, { FC } from 'react'
import axios from "axios"
import { IForm, IFormField, IHTMLFormElement } from './IForm'
import { Container, Row, Col, Button, Form as BootstrapForm } from 'react-bootstrap'

const Form: FC<IForm> = (form) => {

    const handleSubmit = async (event: React.FormEvent<IHTMLFormElement>) => {
        event.preventDefault()

        var model = new FormData();
        //const target = event.currentTarget;

        form.allFields.map(field => model.append(field.alias, event.currentTarget.elements[field.alias].value))

        console.log(model)

        await axios({
            method: "post",
            url: process.env.NEXT_PUBLIC_BASE_URL + "/api/forms/submit",
            data: model,
            headers: {
                "Id": event.currentTarget.id,
                "ApiKey": process.env.NEXT_PUBLIC_API_KEY
            }
        }).then(response => {
            console.log(response)
        })

      };

    return (
        <article className={form.alias}>
            <Container className={`${form.alias}__container`}>
                <Row className={`${form.alias}__row`}>
                    <Col className={`${form.alias}__col`}>
                        <BootstrapForm id={form.id} onSubmit={handleSubmit}>
                            {form.containers?.map(container => 
                                <Container key={container.id}>
                                    {container.caption ? <h2>{container.caption}</h2> : null}
                                    {container.rows?.map(row => 
                                        <Row key={row.id}>
                                            {row.caption ? <Col md={12}><h3>{row.caption}</h3></Col> : null}
                                            {row.cols?.map((col, index) => 
                                                <Col key={index} md={col.width}>
                                                    {col.fields?.map(field => {
                                                        console.log(form.fieldTypes)
                                                        return (
                                                            <FormField key={field.id} {...field} fieldType={form.fieldTypes[field.fieldTypeId]} />
                                                        )
                                                    }
                                                    )}
                                                </Col>
                                            )}
                                        </Row>
                                    )}
                                </Container>
                            )}
                            <Button variant="primary" type="submit">{form.submitLabel}</Button>
                        </BootstrapForm>
                    </Col>
                </Row>
            </Container>
        </article>
    )
}

const FormField: FC<IFormField> = (field) => {
    const Control = controls[field.fieldType]
    return <Control {...field} />
}

const ShortAnswer: FC<IFormField> = (field) => {
    return (
        <BootstrapForm.Group className={field.cssClass} controlId={field.alias}>
            { field.settings.ShowLabel ? <BootstrapForm.Label>{field.caption}</BootstrapForm.Label> : null }
            <BootstrapForm.Control
                name={field.alias}
                type={field.settings.FieldType ? field.settings.FieldType : "text" }
                placeholder={field.settings.Placeholder}
                //pattern={field.regEx}
                required={field.mandatory}
                aria-required={field.mandatory}
            />
            { field.toolTip ? <BootstrapForm.Text className="text-muted">{field.toolTip}</BootstrapForm.Text> : null }
        </BootstrapForm.Group>
    )
}

const LongAnswer: FC<IFormField> = (field) => {
    return (
        <BootstrapForm.Group className={field.cssClass} controlId={field.alias}>
            <BootstrapForm.Label>{field.caption}</BootstrapForm.Label>
            <BootstrapForm.Control
                as="textarea"
                rows={parseInt(field.settings.NumberOfRows)}
                placeholder={field.placeholder}
                required={field.mandatory}
                aria-details={field.regEx}
                aria-required={field.mandatory}
            />
            { field.toolTip ? <BootstrapForm.Text className="text-muted">{field.toolTip}</BootstrapForm.Text> : null }
        </BootstrapForm.Group>
    )
}

var controls: { [key: string]: any } = {
    "shortAnswer": ShortAnswer,
    "longAnswer": LongAnswer
}

export default Form