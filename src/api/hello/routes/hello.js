"use strict";

/**
 * hello router.
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/all-hellos",
      handler: "hello.findAll",
    },
  ],
};
