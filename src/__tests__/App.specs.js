import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";

global.scrollTo = jest.fn();

describe("testing scroll", () => {
  it("testing scroll to element", async () => {
    const scrollIntoViewMock = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

    render(<App />);
    const btnToElem = await screen.findByTestId("btn-to-elem");
    userEvent.click(btnToElem);
    expect(scrollIntoViewMock).toBeCalled();
  });

  it("testing scroll to top", async () => {
    render(<App />);
    const btnToTop = await screen.findByTestId("btn-to-top");
    userEvent.click(btnToTop);
    expect(global.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
