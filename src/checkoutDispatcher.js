'use strict';

import {Dispatcher} from 'reshow';

const instance = new Dispatcher();
export default instance;

export const checkoutDispatch = instance.dispatch.bind(instance);
