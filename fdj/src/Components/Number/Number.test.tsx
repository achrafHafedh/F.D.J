import React from "react";
import { render } from "@testing-library/react";

import Number from "./Number";

describe("<Number/>", () => {
  const props = {
    index: 1,
    value: 1,
    dispatch: () => "",
    className: "big",
  };
  it("should render Number component", () => {
    const { container } = render(<Number {...props} />);
    expect(container).toMatchSnapshot();
  });
});
