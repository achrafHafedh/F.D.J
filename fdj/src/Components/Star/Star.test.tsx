import { render } from "@testing-library/react";

import Star from "./Star";

describe("<Star/>", () => {
  it("should render Star with value", () => {
    const props = {
      index: 1,
      value: 1,
      dispatch: () => "",
      className: "big",
    };
    const { container } = render(<Star {...props} />);
    expect(container).toMatchSnapshot();
  });
});
