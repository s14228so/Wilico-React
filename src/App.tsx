import * as React from "react";
import { useDispatch } from "react-redux";
import { FunctionComponent, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import { hot } from "react-hot-loader";
import Plans from "./containers/Plans";
import IndividualPlan from "./components/IndivisualPlan";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import AddTodo from "./containers/AddTodo";
import PlanCreate from "./components/PlanCreate";
import "./Reset.css";
import { init } from "./actions";
import { connect } from "react-redux";

const App: FunctionComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Route exact path="/" component={Plans} />
        <Route path="/about" component={About} />
        <Route path="/plan" component={IndividualPlan} />
        <Route path="/planCreate" component={PlanCreate} />
        <Route
          path="/todo"
          render={props => (
            <React.Fragment>
              {/* <AddTodo />
              <Home /> */}
            </React.Fragment>
          )}
        />
      </Router>
    </React.Fragment>
  );
};
export default hot(module)(App);
