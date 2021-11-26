import React from "react";
import { render } from "@testing-library/react";

import Cost from "./Cost";

describe("<Cost/>", () => {
  it("should render Cost with value", () => {
    const { container } = render(<Cost cost={2.5} />);
    expect(container).toMatchSnapshot();
  });
});
