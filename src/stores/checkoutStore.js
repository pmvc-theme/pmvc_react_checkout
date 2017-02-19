'use strict';

import {Map} from 'immutable';
import {ReduceStore} from 'reduce-flux';
import get from 'get-object-value';
import {ajaxDispatch} from 'organism-react-ajax';

import dispatcher from '../actions/checkoutDispatcher';

class checkoutStore extends ReduceStore
{

  getInitialState()
  {
      return Map();
  }

  addToCart(state, action)
  {
        console.log('run addtocart');
        return state;
        const src = state.get('src');
        ajaxDispatch({
            type: 'ajaxPost',
            params: {
               url: src+'action',
               query: {
                   pvid: pvid,
                   url: document.URL,
                   params: action.params
               },
               callback: (json,text) => {
                    const element = state.get('element');
                    const iframe = get(element,['iframe']);
                    if (iframe) {
                        iframe.appendHtml(text);
                    } 
               },
               disableProgress: true 
            }
        });
        return state;
  }

  reduce (state, action)
  {
      switch (action.type)
      {
          case 'addToCart':
              return this.addToCart(state, action); 
          case 'config/set':
              return state.merge(action.params);
          default:
              return state;
      }
  }
}

// Export a singleton instance of the store, could do this some other way if
// you want to avoid singletons.
const instance = new checkoutStore(dispatcher);
export default instance;
