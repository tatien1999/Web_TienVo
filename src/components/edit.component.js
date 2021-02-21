import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            username: '',
            email:'',
            password:''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/persons/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    username: response.data.username,
                    email: response.data.email,
                    password: response.data.password});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        };
        axios.post('http://localhost:4000/persons/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/index');
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Update Person Info</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Person Name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>User Name: </label>
                        <input type="text" className="form-control" 
                        value={this.state.username}
                               onChange={this.onChangeUsername}/>
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="email" className="form-control" 
                        value={this.state.email}
                               onChange={this.onChangeEmail}/>
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" className="form-control" 
                        value={this.state.password}
                               onChange={this.onChangePassword}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Person" 
                        className="btn btn-primary"/>
                    </div>
                    <div className="form-group">
                        <input type="submit"
                               value="Update Person Info"
                               className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}