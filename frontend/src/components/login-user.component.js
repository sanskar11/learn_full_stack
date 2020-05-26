import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import UsersList from './users-list.component';
// import Vendor from "../Vendor.js"
// import Customer from "../Customer.js"

export default class LoginUser extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            users: []
        }

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    componentDidMount() {
        axios.get('http://localhost:4000/')
             .then(response => {
                 this.setState({users: response.data});
             })
             .catch(function(error) {
                 console.log(error);
             })
    }
    onChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    onChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const loginUser = {
            email: this.state.email,
            password: this.state.password
        }

        this.state.users.map((ele,i) => {
            // console.log(ele.email)
            if ( loginUser.email === ele.email && loginUser.password === ele.password)
            {
                console.log("LOGIN SUCCESSFUL");
                if(ele.job === "vendor")
                {
                    // ReactDOM.render(<Vendor />, document.getElementById('root'));
                    // <Route path="/vendor" component={Vendor}/>
                }
                else if(ele.job === "customer")
                {
                    // ReactDOM.render(<Customer />, document.getElementById('root'));
                    // <Route path="/customer" component={Customer}/>
                }
            }
        })
        // console.log(user);

        // for (var i in user) {
        //     console.log(i)
        //     if (i === loginUser.email)
        //     {
        //         if (i.password === loginUser.password)
        //         {
        //             console.log("LOGIN SUCCESFUL");
        //         }
        //     }
        // }
        // user.map(user => {        const {username,email,password,job} = user;
        //     console.log(email)})

        // })
        // .catch(function(error) {
        //     console.log(error);
        // })

        this.setState({
            email: '',
            password: ''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                        <label>Email: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.email}
                               onChange={this.onChangeEmail}
                               />  
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" 
                               className="form-control" 
                               value={this.state.password}
                               onChange={this.onChangePassword}
                               />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Login User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}