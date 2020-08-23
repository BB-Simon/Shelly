import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import Aboute from "./components/about/Aboute";
import Teacher from "./components/teacher/Teacher";
import Contact from "./components/contact/Contact";
import Events from "./components/events/Events";
import Schedules from "./components/schedule/Schedules";
import Singlepost from "./components/blog/Singlepost";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Aboute} />
        <Route path="/our-teachers" component={Teacher} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/events" component={Events} />
        <Route path="/schedules" component={Schedules} />
        <Route path="/signgle-post" component={Singlepost} />
      </Switch>
    </>
  );
}

export default App;
