import React, {Component} from 'react'; 
import { Button, SemanticUI } from 'react-atomic-molecule'; 
import get from 'get-object-value';

import {checkoutDispatch} from '../../src/checkoutDispatcher';

class AddToCart extends Component
{
    handleClick = (e) =>
    {
        const {onClick} = this.props;
        if (onClick) {
            onClick(e); 
        }
        checkoutDispatch({
            type: 'addToCart',
            params: { 
                form: e.currentTarget.form 
            }
        });
    }

    componentDidMount()
    {
        this.setState({type: 'button'});
    }

    render()
    {
        const type = get(this, ['state', 'type'], 'submit');
        return (
            <Button
                type={type}
                onClick={this.handleClick}
            >
                Add to cart
            </Button>
        );
    }
}

export default AddToCart;
