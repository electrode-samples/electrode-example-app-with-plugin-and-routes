"use strict";

const Promise = require("bluebird");
const GitHubApi = require("github");
const github = new GitHubApi();
const AUTH_TOKEN = process.env.token;
github.authenticate({
  type: "oauth",
  token: AUTH_TOKEN
});
const githubGetContributors = Promise.promisify(github.repos.getContributors);

exports.register = (server, options, next) => {

  const friendsArr = [
    {name: "electrode", img: "//goo.gl/I9utJF", size: 9, github: "https://github.com/electrode-io/electrode-boilerplate-universal-react-node"},
    {name: "electrode", img: "//goo.gl/I9utJF", size: 9, github: "https://github.com/electrode-io/electrode-io.github.io"},
    {name: "hapi", img: "//goo.gl/bEBi6G", size: 9, github: "https://github.com/hapijs/hapi"},
    {name: "React", img: "//goo.gl/xwbqlB", size: 9, github: "https://github.com/facebook/react"},
    {name: "Redux", img: "//goo.gl/MGQ3lp", size: 9, github: "https://github.com/reactjs/redux"},
    {name: "Webpack", img: "//goo.gl/zgxe8s", size: 9, github: "https://github.com/webpack/webpack"},
    {name: "node", img: "//goo.gl/hxmCEE", size: 9, github: "https://github.com/nodejs/node"}
  ];

  const getContributorsPromises = friendsArr.map((friend) => {
    let githubUrl = friend.github.split('/');
    const githubInfo = {
      repo: githubUrl.pop(),
      user: githubUrl.pop(),
      anon: true,
      page: 1,
      per_page: 8
    };
    return githubGetContributors(githubInfo)
      .then((response) => {
        friend["friends"] = response.map(({ login, avatar_url, url }) => ({name: login, img: avatar_url, profile: url}));
        return friend;
      })
  });

  const getFriendsAndContributors = (reply) => {
    return Promise.all(getContributorsPromises)
      .then((response) => (reply(null, JSON.stringify({friends: response}))))
      .catch((err) => reply(err))
  };

  server.route({
    method: "GET",
    path: "/friends",
    handler: (request, reply) => getFriendsAndContributors(reply)
  });

  next();
};

exports.register.attributes = {
  name: "getFriends",
  version: "1.0.0"
};
