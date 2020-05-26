import React, {Component} from 'react';
import axios from 'axios';

export default class VendorAddItems extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: 0,
            quantity: 0
        }
        this.onChangename = this.onChangename.bind(this);
        this.onChangeprice = this.onChangeprice.bind(this);
        this.onChangequantity = this.onChangequantity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onChangename(event) {
        this.setState({ name: event.target.value });
    }
    onChangeprice(event) {
        this.setState({ price: event.target.value });
    }
    onChangequantity(event) {
        this.setState({ quantity: event.target.value });
    }
    onSubmit(e) {
        e.preventDefault();

        const newItem = {
            name: this.state.name,
            price: this.state.price,
            quantity: this.state.quantity
        }

        axios.post('http://localhost:4000/createitem', newItem)
             .then(res => console.log(res.data));

        this.setState({
            name: '',
            price: 0,
            quantity: 0
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label>name: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.name}
                               onChange={this.onChangename}
                               />
                    </div>
                    <div className="form-group">
                    <label>price: </label>
                        <input type="number" 
                               className="form-control" 
                               value={this.state.price}
                               onChange={this.onChangeprice}
                               />
                    </div>
                    <div className="form-group">
                    <label>quantity: </label>
                        <input type="number" 
                               className="form-control" 
                               value={this.state.quantity}
                               onChange={this.onChangequantity}
                               />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Item" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}