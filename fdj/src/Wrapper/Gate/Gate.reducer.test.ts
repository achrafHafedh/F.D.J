import { gateReducer } from "./Gate.reducer";
import { initState } from "../../Config";
import { GateReducerActions, GateReducerState } from "./Types";

describe("Gate.reducer,", () => {
  describe("TOGGLE_NUMBER,", () => {
    const setToggleNumberPayload = {
      payload: { value: 3, checked: true },
    };
    const resultingState: GateReducerState = gateReducer(initState, {
      type: GateReducerActions.TOGGLE_NUMBER,
      ...setToggleNumberPayload,
    });

    it("Should have updateActions of length 1 with GateReducerActions.TOGGLE_NUMBER", () => {
      expect(resultingState.numbers.length).toBe(1);
      expect(resultingState.numbers[0]).toEqual(3);
    });
  });

  describe("TOGGLE_STAR,", () => {
    const setToggleStarPayload = {
      payload: { value: 2, checked: true },
    };
    const resultingState: GateReducerState = gateReducer(initState, {
      type: GateReducerActions.TOGGLE_STAR,
      ...setToggleStarPayload,
    });

    it("Should have updateActions of length 1 with GateReducerActions.TOGGLE_STAR", () => {
      expect(resultingState.stars.length).toBe(1);
      expect(resultingState.stars[0]).toEqual(2);
    });
  });
});
