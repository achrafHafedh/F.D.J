import getSymbolFromCurrency from "currency-symbol-map";

import { GateReducerState, Multiple } from "./Types";

export const getCost = (multiples: Multiple[], GateState: GateReducerState) => {
  const result: Multiple | undefined = multiples.find((multiple: Multiple) => {
    const patternNumber: number = multiple.pattern[0];
    const patternStar: number = multiple.pattern[1];

    return GateState.numbers.length === patternNumber && GateState.stars.length === patternStar;
  });

  return result ? `${result.cost.value / 100} ${getSymbolFromCurrency(result.cost.currency)}` : 0;
};
