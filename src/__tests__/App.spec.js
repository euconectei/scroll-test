import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fireEvent } from "@testing-library/react";

import App from "../App";

global.scrollTo = jest.fn();

describe("testing scroll", () => {
  it("should scroll to element by clicking on ", async () => {
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

  it("testing scroll to top visibility", async () => {
    render(<App />);
    const btnToTop = await screen.findByTestId("btn-to-top");
    expect(btnToTop).not.toBeVisible();
    Array.from(Array(100).keys())
      .map((i) => i + 75)
      .forEach((scrollY) => {
        fireEvent.scroll(window, {
          target: {
            scrollY,
          },
        });
        expect(btnToTop).toBeVisible();
      });
  });

  it("testing scroll to top2 write", async () => {
    render(<App />);

    Array.from(Array(100).keys())
      .map((i) => i + 75)
      .forEach((scrollY) => {
        fireEvent.scroll(window, {
          target: {
            scrollY,
          },
        });
      });
    const btnToTop = await screen.findByTestId("btn-to-top2");
    expect(btnToTop).toBeInTheDocument();
  });
});
