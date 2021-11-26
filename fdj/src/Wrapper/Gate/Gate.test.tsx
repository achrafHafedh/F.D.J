import { render } from "@testing-library/react";

import Gate from "./Gate";

describe("<Gate/>", () => {
  it("should render Gate component", () => {
    const { container } = render(<Gate />);
    expect(container).toMatchSnapshot();
  });
});
