"use strict";

exports.register = (server, options, next) => {

  const friendsArr = JSON.stringify({friends: [
    {name: "electrode", img: "//goo.gl/CZ4wAF", size: 13},
    {name: "hapi", img: "//goo.gl/q9uIFW", size: 13},
    {name: "React", img: "//goo.gl/dL5MXT", size: 13},
    {name: "Redux", img: "//goo.gl/L0mLmT", size: 13},
    {name: "Webpack", img: "//goo.gl/2AV3Dn", size: 13},
    {name: "wizard", img: "//goo.gl/UdhbKO", size: 13}
  ]});

  server.route({
    method: "GET",
    path: "/friends",
    handler: (request, reply) => {
      reply(friendsArr);
    }
  });

  next();
};

exports.register.attributes = {
  name: "getFriends",
  version: "1.0.0"
};
