import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("test button", () => {
  test("button has the correct initial color", () => {
    render(<App />);

    // find a element with a role button and text "change to blue"
    const button = screen.getByRole("button", { name: /Change to blue/i });

    // expect that background color to be red
    expect(button).toHaveStyle({ backgroundColor: "red" });

    // click button
    fireEvent.click(button);

    // expect that background color be blue (after button click)
    expect(button).toHaveStyle({ backgroundColor: "blue" });
  });
});

describe("test checkbox and button", () => {
  test("initial conditions", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: /change to blue/i });
    expect(button).toBeEnabled();

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();
  });

  test("button should be enabled if checkbox is checked", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: /change to blue/i });
    const checkbox = screen.getByRole("checkbox");

    expect(button).toBeEnabled();

    fireEvent.click(checkbox);
    expect(button).toBeDisabled();

    fireEvent.click(checkbox);
    expect(button).toBeEnabled();
  });
});
