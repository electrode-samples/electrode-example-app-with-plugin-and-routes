"use strict";

exports.register = (server, options, next) => {

  const friendsArr = JSON.stringify({friends: [
    {name: "electrode", img: "//goo.gl/I9utJF", size: 13},
    {name: "hapi", img: "//goo.gl/bEBi6G", size: 13},
    {name: "React", img: "//goo.gl/xwbqlB", size: 13},
    {name: "Redux", img: "//goo.gl/MGQ3lp", size: 13},
    {name: "Webpack", img: "//goo.gl/zgxe8s", size: 13},
    {name: "node", img: "//goo.gl/hxmCEE", size: 13}
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
