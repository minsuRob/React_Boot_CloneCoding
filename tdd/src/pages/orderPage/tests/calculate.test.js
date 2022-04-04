// import { render, screen } from "@testing-library/react";
import { render, screen } from "../../../test-utils";
import userEvent from "@testing-library/user-event";
import { OrderContextProvider } from "../../../context/OrderContext";
import Type from "../Type"
import OrderPage from "../OrderPage"

test("update pd's total when pd change", async() => {
        render(<Type orderType="products"/>, {wrapper: OrderContextProvider});

        const productsTotal = screen.getByText("상품 총 가격: ", {exact: false});
        expect(productsTotal).toHaveTextContent("0");

        const americaInput = await screen.findByRole("spinbutton", {
            name: "America",
        });
        userEvent.clear(americaInput);
        userEvent.type(americaInput, "1");
        expect(productsTotal).toHaveTextContent("1000");

        const englandInput = await screen.findByRole("spinbutton", {
            name: "England",
        });
        userEvent.clear(englandInput);
        userEvent.type(englandInput, "3");
        expect(productsTotal).toHaveTextContent("4000");
        
    }
    )

test("update option's total when opt change", async() => {
    render(<Type orderType="options"/>);

    const optionsTotal = screen.getByText("상품 총 가격: ", {exact: false});
    expect(optionsTotal).toHaveTextContent("0");

    const insuranceCheckbox = await screen.findByRole("checkbox", {// backend에서 가져온 후에 하기에 findByRole 사용
        name: "Insurance",
    });

    userEvent.click(insuranceCheckbox);
    expect(optionsTotal).toHaveTextContent('500');

    const dinnerCheckbox = await screen.findByRole("checkbox", {
        name: "Dinner",
    });

    userEvent.click(dinnerCheckbox);
    expect(optionsTotal).toHaveTextContent('1000');

    userEvent.click(dinnerCheckbox);
    expect(optionsTotal).toHaveTextContent('500');
});


describe("total price of goods and options", ()=>{
    test("tota price start with 0 and Updating price when adding one product",async()=> {
        render(<OrderPage/>);

        const total = screen.getByText("총 금액:", {exact: false});
        expect(total).toHaveTextContent("0");

        const americaInput = await screen.findByRole("spinbutton", {
            name: "America",
        });
        userEvent.clear(americaInput);
        userEvent.type(americaInput, '1');

        expect(total).toHaveTextContent("1000");
    });

    test("updating total price when adding one option",async()=> {
        render(<OrderPage/>);
        const total = screen.getByText("총 금액:", {exact: false});
        const insuranceCheckbox = await screen.findByRole("checkbox", {// backend에서 가져온 후에 하기에 findByRole 사용
            name: "Insurance",
        });
    
        userEvent.click(insuranceCheckbox);
        expect(total).toHaveTextContent('500');
    });
    test("updating total price when removing option and product",async()=> {
        render(<OrderPage/>);
        const total = screen.getByText("총 금액:", {exact: false});
        
        const insuranceCheckbox = await screen.findByRole("checkbox", {// backend에서 가져온 후에 하기에 findByRole 사용
            name: "Insurance",
        });
    
        userEvent.click(insuranceCheckbox);
        
        
        const americaInput = await screen.findByRole("spinbutton", {
            name: "America",
        });
        userEvent.clear(americaInput);
        userEvent.type(americaInput, '3');

        userEvent.clear(americaInput);
        userEvent.type(americaInput, '1');

        expect(total).toHaveTextContent("1500");

    });
})