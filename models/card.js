'use strict';

import logger from '../utils/logger.js';
import JsonStore from "./json-store.js";
const cardStore = {

    store: new JsonStore('./models/card.json',{employees: [] }),
    collection: 'employees',
    array: 'employees',


    getAppInfo() {
        return this.store.findAll(this.collection);
    },

};
export default cardStore;