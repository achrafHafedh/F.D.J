import { render } from "@testing-library/react";

import Stars from "./Stars";

describe("<Stars/>", () => {
  const props = {
    dispatch: () => "",
  };
  it("should render Stars component", () => {
    const { container } = render(<Stars {...props} />);
    expect(container).toMatchSnapshot();
  });
});
