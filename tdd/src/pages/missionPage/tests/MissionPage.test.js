//import { render, screen } from "../../../test-utils";
//import { render, screen } from "@testing-library/react"
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MissionPage from "../MissionPage";

// test("checkbox and button", () => {
//   render(<MissionPage />);
//   const checkbox = screen.getByRole("checkbox", {
//     name: "주문하려는 것을 확인하셨나요?",
//   });
//   expect(checkbox.checked).toEqual(false);

//   const confirmButton = screen.getByRole("button", { name: "주문 확인" });
//   expect(confirmButton.disabled).toBeTruthy();
// });


// 
test("the counter starts at 0", () => {
  render(<MissionPage />);
  const counter = screen.getByText("0", {exact: false});
  expect(counter).toHaveTextContent("0");
});

// test("minus button has correct text", () => {
//   render(<MissionPage />);
//       // const btn = screen.getByRole("button", {// backend에서 가져온 후에 하기에 findByRole 사용
//       const btn = screen.getAllByRole("button", {// backend에서 가져온 후에 하기에 findByRole 사용
//         name: "sibal",
//     });
    
//     expect(btn).toHaveTextContent('sibal');

// });
// test("plus button has correct text", () => {
//   render(<MissionPage />);
// });
test("When the + button is pressed the counter changes to 1 ", () => {
  render(<MissionPage />);
    const resetBtn = screen.getByRole("button", {
      name: "reset",
    });
    userEvent.click(resetBtn);

    const plusBtn = screen.getByRole("button", {
      name: "+",
    });
    userEvent.click(plusBtn);

    const counter = screen.getByText("1", {exact: false});
    expect(counter).toHaveTextContent("1");

});
 test("When the - button is pressed the counter changes to 1 ", () => {
   render(<MissionPage />);
   const resetBtn = screen.getByRole("button", {
    name: "reset",
  });
  userEvent.click(resetBtn);

  const minusBtn = screen.getByRole("button", {
    name: "-",
  });
  userEvent.click(minusBtn);

  const counter = screen.getByText("-1", {exact: false});
  expect(counter).toHaveTextContent("-1");
 });
//  test("on/off button has blue color", () => {
 //  render(<MissionPage />);
// });
 test("Prevent the -,+ button from being pressed when the on/off button is clicked", () => {
   render(<MissionPage />);

   const Btn = screen.getByRole("button", {
    name: "비/활성화",
   });
   userEvent.click(Btn);

   const minusBtn = screen.getByRole("button", {
    name: "-",
  });
  expect(minusBtn.disabled).toBeTruthy();
  
  const plusBtn = screen.getByRole("button", {
    name: "+",
  });
  expect(plusBtn.disabled).toBeTruthy();
   
 });