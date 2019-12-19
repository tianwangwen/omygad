import React, {Component, PropTypes} from 'react'

import { addTodo } from '../actions'

class AddTodo extends Component {
    constructor(props){
        super(props)

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            inputValue: ''
        }
    }
    onSubmit(e){
        e.preventDefault();

        this.props.addTodo(this.state.inputValue);

        this.setState({
            inputValue: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={ this.onSubmit }>
                    <input value={this.state.inputValue} onChange={(e) => {this.setState({inputValue: e.target.value})}} />
                    <button>保存</button>
                </form>
            </div>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default AddTodo;

