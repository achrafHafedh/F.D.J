import { GateReducerActionType, GateReducerState, GateReducerActions } from "./Types";

export function gateReducer(
  state: GateReducerState,
  { type, payload: { value, checked } }: GateReducerActionType
): GateReducerState {
  switch (type) {
    case GateReducerActions.TOGGLE_NUMBER:
      return {
        ...state,
        numbers: checked ? state.numbers.concat(value) : state.numbers.filter((num: number) => num !== value),
      };
    case GateReducerActions.TOGGLE_STAR:
      return {
        ...state,
        stars: checked ? state.stars.concat(value) : state.stars.filter((num: number) => num !== value),
      };
    default:
      return state;
  }
}
