import React, { Component } from 'react'
import { register } from './UserFunctions'
import Footer from './footer'
import{Container,Row,Col,Button,Form,FormGroup} from 'react-bootstrap'
import { Label,Input} from 'reactstrap';

class Register extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const newUser = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }

        register(newUser).then(res => {
            this.props.history.push('/login')
        })
    }

    render () {
        return (
            <Container>
                <Row>
                    <Col xs={8} md={6} className="mt-5 mx-auto">
                        <Form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h2 mb-3 font-weight-bolder text-center"> Register Now </h1>
                            <FormGroup>
                                <Label htmlFor="first_name">First Name</Label>
                                <Input type="text"
                                    className="form-control form-control-lg"
                                    name="first_name"
                                    placeholder="Enter First Name"
                                    value={this.state.first_name}
                                    onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="last_name">Last Name</Label>
                                <Input type="text"
                                    className="form-control form-control-lg"
                                    name="last_name"
                                    placeholder="Enter Last Name"
                                    value={this.state.last_name}
                                    onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email">E-Mail Address</Label>
                                <Input type="email"
                                    className="form-control form-control-lg"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password </Label>
                                <Input type="password"
                                    className="form-control form-control-lg"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </FormGroup>

                            <Button type="submit" className="btn btn-lg btn-info btn-block rounded-pill">
                                Register
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Footer />           

            </Container>
        )
    }
}

export default Register