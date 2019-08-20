import Plan from "../types/plan";
import Action from "../types/action";
const plans = (state: Plan[] = [], action: Action) => {
  switch (action.type) {
    case "INIT":
      return action.payload;
    default:
      return state;
  }
};

export default plans;
