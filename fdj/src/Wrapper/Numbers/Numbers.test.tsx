import { render } from "@testing-library/react";

import Numbers from "./Numbers";

describe("<Numbers/>", () => {
  const props = {
    dispatch: () => "",
  };
  it("should render Numbers component", () => {
    const { container } = render(<Numbers {...props} />);
    expect(container).toMatchSnapshot();
  });
});
