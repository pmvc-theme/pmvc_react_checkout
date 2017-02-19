'use strict';

import {Dispatcher} from 'reduce-flux';

const instance = new Dispatcher();
export default instance;

export const checkoutDispatch = instance.dispatch.bind(instance);
