export type GateProps = {};

export enum GateReducerActions {
  TOGGLE_NUMBER,
  TOGGLE_STAR,
}

export type GateReducerState = {
  numbers: number[];
  stars: number[];
  cost: number;
};

export type GateReducerActionType =
  | { type: GateReducerActions.TOGGLE_NUMBER; payload: { value: number; checked: boolean } }
  | { type: GateReducerActions.TOGGLE_STAR; payload: { value: number; checked: boolean } };

export type Multiple = {
  cost: {
    currency: string;
    value: number;
  };
  pattern: number[];
};
