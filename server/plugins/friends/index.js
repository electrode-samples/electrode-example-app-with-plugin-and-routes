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

  const friendsArr = [ /*eslint-disable max-len */
    {name: "Electrode", img: "//goo.gl/I9utJF", size: 8, github: "https://github.com/electrode-io/electrode-boilerplate-universal-react-node"},
    {name: "React", img: "//goo.gl/xwbqlB", size: 8, github: "https://github.com/facebook/react"},
    {name: "Redux", img: "//goo.gl/MGQ3lp", size: 8, github: "https://github.com/reactjs/redux"},
    {name: "node", img: "//goo.gl/hxmCEE", size: 8, github: "https://github.com/nodejs/node"}
  ]; /*eslint-enable max-len */

  const getContributorsPromises = friendsArr.map((friend) => { /*eslint-disable camelcase */
    const githubUrl = friend.github.split("/");
    const githubInfo = {
      repo: githubUrl.pop(),
      user: githubUrl.pop(),
      anon: true,
      page: 1,
      per_page: 10
    };
    return githubGetContributors(githubInfo)
      .then((response) => {
        friend.friends = response.map(({ login, avatar_url, html_url }) => (
          {name: login, img: avatar_url, profile: html_url}
        ));
        return friend;
      });
  }); /*eslint-enable camelcase */

  const getFriendsAndContributors = (reply) => {
    return Promise.all(getContributorsPromises)
      .then((response) => reply(null, JSON.stringify({friends: response})))
      .catch((err) => reply(err));
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
