import * as React from "react";
import { useDispatch } from "react-redux";
import { FunctionComponent, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Plans from "./containers/Plans";
import IndividualPlan from "./components/IndivisualPlan";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import AddTodo from "./containers/AddTodo";
import Plan from "./components/Plan";
import "./Reset.css";
import { init } from "./actions";
import { connect } from "react-redux";

const App: FunctionComponent = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
  });

  return (
    <React.Fragment>
      <Router>
        <Header />
        <Route exact path="/" component={Plans} />
        <Route path="/about" component={About} />
        <Route path="/plan" component={IndividualPlan} />
        <Route
          path="/todo"
          render={props => (
            <React.Fragment>
              <AddTodo />
              <Home />
            </React.Fragment>
          )}
        />
      </Router>
    </React.Fragment>
  );
};

export default connect(
  null,
  { init }
)(App);
