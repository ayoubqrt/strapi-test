"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::hello.hello", ({ strapi }) => ({
  async findAll(ctx) {
    const entries = await strapi.db.query("api::hello.hello").findMany();

    ctx.body = entries;
  },
}));
