import { render } from "@testing-library/react";

import Title from "./Title";

describe("<Title/>", () => {
  const props = {
    text: "Title",
  };
  it("should render Title component", () => {
    const { container } = render(<Title {...props} />);
    expect(container).toMatchSnapshot();
  });
});
