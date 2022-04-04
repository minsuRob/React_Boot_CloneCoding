//import { render, screen } from "../../../test-utils";
//import { render, screen } from "@testing-library/react"
import { render, screen, waitFor } from "@testing-library/react";
import MissionPage from "../MissionPage";

test("checkbox and button", () => {
  render(<MissionPage />);
  const checkbox = screen.getByRole("checkbox", {
    name: "주문하려는 것을 확인하셨나요?",
  });
  expect(checkbox.checked).toEqual(false);

  const confirmButton = screen.getByRole("button", { name: "주문 확인" });
  expect(confirmButton.disabled).toBeTruthy();
});

test("checkbox and button", () => {
  render(<MissionPage />);
});

// 
test("the counter starts at 0", () => {
  render(<MissionPage />);
});
test("minus button has correct text", () => {
  render(<MissionPage />);
});
test("plus button has correct text", () => {
  render(<MissionPage />);
});
test("When the + button is pressed the counter changes to 1 ", () => {
  render(<MissionPage />);
});
test("When the - button is pressed the counter changes to 1 ", () => {
  render(<MissionPage />);
});
test("on/off button has blue color", () => {
  render(<MissionPage />);
});
test("Prevent the -,+ button from being pressed when the on/off button is clicked", () => {
  render(<MissionPage />);
});