import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/addCategory";

describe("add Category component test", () => {
  test("should change the value of the textbox ", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "Dragon Ball" } });
    // screen.debug();
    expect(input.value).toBe("Dragon Ball");
  });

  test("must call on new category if input has a value", () => {
    const inputValue = "Dragon Ball";
    // TODO

    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole("form");
    
    fireEvent.input(input, { target: { value: { inputValue } } });
    fireEvent.submit(form);
    screen.debug();
    expect(input.value).toBe("");
});
});
