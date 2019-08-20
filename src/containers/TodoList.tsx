import { connect } from "react-redux";

import TodoList from "../components/TodoList";

import { remove, filter } from "../actions";

const mapStateToProps = state => {
  return {
    todos: state.plans
  };
};

const mapDispatchToProps = dispatch => {
  return {
    remove: id => {
      dispatch(remove(id));
    },
    filter: () => {
      dispatch(filter);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
