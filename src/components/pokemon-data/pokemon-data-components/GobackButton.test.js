import React from "react";
import { render, screen } from "@testing-library/react";
import GoBackButton from "./GobackButton";
import { configure } from "@testing-library/dom";
import { BrowserRouter } from "react-router-dom";
describe("GoBackButton", () => {
  configure({ testIdAttribute: "data-test-id" });
  it("text should be equal to Go back!", () => {
    render(<GoBackButton />, {
      wrapper: BrowserRouter,
    });
    expect(screen.getByTestId("go back")).toHaveTextContent("Go back!");
  });
});
