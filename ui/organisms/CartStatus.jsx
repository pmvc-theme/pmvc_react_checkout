import React, {Component} from 'react'; 
import { Icon } from 'react-atomic-molecule'; 
import  ShoppingCart from 'ricon/ShoppingCart'; 

class CartStatus extends Component
{
    render()
    {
        const {style} = this.props;
        return (
            <Icon style={{...Styles.container, ...style}}>
                <ShoppingCart />
            </Icon>
        );
    }
}

export default CartStatus;

const Styles = {
    container: {
        width: 24,
        height: 24,
        fill: '#fff'
    }
};
