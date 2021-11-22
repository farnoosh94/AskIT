import React, { Component } from 'react'
import { login } from './UserFunctions'
import Footer from './footer'
import{Jumbotron,Container,Row,Col,Image,Button,Form, FormGroup} from 'react-bootstrap'
import { Label,Input} from 'reactstrap';

class Login extends Component {
    constructor() {
        super()
        this.state = {
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

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if (!res.error) {
                this.props.history.push(`/profile`)
            }
        })
    }

    render () {
        return (
            <Container>
                <Row>
                    <Col xs={8} md={6}className=" mt-5 mx-auto">
                        <Form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h2 mb-3 font-weight-bolder text-center">Log In</h1>
                            <FormGroup>
                                <Label htmlFor="email">E-Mail</Label>
                                <Input type="email"
                                    className="form-control form-control-lg"
                                    name="email"
                                    placeholder="email@ex.com"
                                    value={this.state.email}
                                    onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password </Label>
                                <Input type="password"
                                    className="form-control form-control-lg"
                                    name="password"
                                    placeholder="Enter your password"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </FormGroup>

                            <Button type="submit" className="btn btn-lg btn-info btn-block rounded-pill">
                                Log In
                            </Button>
                        </Form>
                    </Col>
                    
                </Row>
                <Footer />           

            </Container>

        )
    }
}

export default Login