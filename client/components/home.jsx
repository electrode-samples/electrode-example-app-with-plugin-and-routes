import React from "react";
import { Link } from "react-router";

export class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ourFriends: [],
      invitees: []
    };
    this.toggleGuest = this.toggleGuest.bind(this);
  }

  componentDidMount() {
    fetch("/friends", {method: "GET"})
    .then((res) => res.json())
    .then((json) => {
      const ourFriends = json.friends;
      const invitees = ourFriends.map(({name}) => {
        return { name, invited: false};
      });
      this.setState({ourFriends, invitees});
    })
  }

  componentView({ location: { pathname } }) {
    return {
      intro: pathname === "/",
      invite: pathname === "/invite"
    };
  }

  toggleGuest({name, invited}) {
    const invitees = this.state.invitees.map((invitee) => {
      if (invitee.name === name) {
        invitee.invited = !invited;
      }
      return invitee;
    });
    this.setState({invitees});
  }

  introMessage(className) {
    return (
      <div className={className}>
        <p>Let"s have a house party and invite all of our friends!</p>
        <Link to="/invite">Click Here to Make it a Party!</Link>
      </div>
    )
  }

  render() {
    const { ourFriends, invitees } = this.state;
    const toggleGuest = this.toggleGuest;
    const view = this.componentView(this.props);
    const message = this.introMessage;

    return (
      <div>
        {React.cloneElement(this.props.children, { ourFriends, invitees, toggleGuest, view, message })}
      </div>
    );
  }
}
