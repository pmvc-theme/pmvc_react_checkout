'use strict';

import {Map} from 'immutable';
import {ReduceStore} from 'reshow';
import get from 'get-object-value';
import {ajaxDispatch, formSerialize} from 'organism-react-ajax';
import {
    AlertsNotifier,
    popupDispatch
} from 'organism-react-popup';

import dispatcher from '../checkoutDispatcher';

class checkoutStore extends ReduceStore
{

  getInitialState()
  {
      return Map();
  }

  addToCart(state, action)
  {
        const form = get(action, ['params', 'form']);
        if (!form) {
            console.error('Need assign form');
        }
        let formParams = formSerialize(form);
        ajaxDispatch({
            type: 'ajaxPost',
            params: {
                url: form.action,
                query: formParams,
                callback: (json)=>{
                    const error = get(json, ['data', 'lastError']);
                    popupDispatch();
                },
            }
        });
        console.log('run addtocart');
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
