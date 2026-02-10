'use strict';

import logger from "../utils/logger.js";
import cardStore from "../models/card.js"


const about = {
    createView(request, response) {
        logger.info("About page loading!");

        const viewData = {
            title: "Playlist App About page",
            employee:cardStore.getAppInfo()
        };
logger.info(viewData.employee)
        response.render('about', viewData);
    },
};

export default about;
