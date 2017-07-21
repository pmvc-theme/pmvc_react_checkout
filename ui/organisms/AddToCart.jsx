import React, {Component} from 'react'; 
import { Button, SemanticUI } from 'react-atomic-molecule'; 

import {checkoutDispatch} from '../../src/actions/checkoutDispatcher';

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

    render()
    {
        return (
            <Button
                onClick={this.handleClick}
            >
                Add to cart
            </Button>
        );
    }
}

export default AddToCart;
