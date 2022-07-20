'use strict';

/**
 * installation-cabinet service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::installation-cabinet.installation-cabinet');
