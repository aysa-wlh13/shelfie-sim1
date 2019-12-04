import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            price: 0,
            image_url: ''
        }
        this.nameInput = this.nameInput.bind(this)
    }

    //name
    nameInput(text) {
        if (text.length <= 20) {
          this.setState({ name: text })
        }
      }

    //clear
    clearInputs() {
        this.setState({
          name: '',
          price: 0,
          image_url: ''
        })
      }

    render(){
        return(
            <div className='green'>
                <section className='white'></section>

                <p>Image URL:</p>
               <input 
                 type='text'
                 value={this.state.image_url}
                 />

                <p>Product Name:</p>
               <input 
                 type='text'
                 value={this.state.name}
                 onChange={e => this.nameInput(e.target.value)}/>

                <p>Price:</p>
               <input 
                type='text'
                value={this.state.price}
               />

               <button onClick={() => this.clearInputs()}>Cancel</button>

               <button>Add to Inventory</button>
            </div>
        )
    }
}

export default Form;