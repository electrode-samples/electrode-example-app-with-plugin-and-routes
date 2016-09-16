'use strict';

exports.register = (server, options, next) => {

    const friendsArr = JSON.stringify({friends: [
      {name: "electrode", img: "//goo.gl/CZ4wAF", size: 12},
      {name: "hapi", img: "//goo.gl/q9uIFW", size: 12},
      {name: "React", img: "//goo.gl/dL5MXT", size: 12},
      {name: "Redux", img: "//goo.gl/L0mLmT", size: 12},
      {name: "Webpack", img: "//goo.gl/2AV3Dn", size: 12},
      {name: "wizard", img: "//goo.gl/UdhbKO", size: 12}
    ]});

    server.route({
        method: 'GET',
        path: '/friends',
        handler: function (request, reply) {
            reply(friendsArr);
        }
    });

    next();
};

exports.register.attributes = {
  name: 'getFriends',
  version: '1.0.0'
};
