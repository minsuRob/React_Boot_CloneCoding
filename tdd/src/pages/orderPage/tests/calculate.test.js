// import { render, screen } from "@testing-library/react";
import { render, screen } from "../../../test-utils";
import userEvent from "@testing-library/user-event";
import { OrderContextProvider } from "../../../context/OrderContext";
import Type from "../Type"

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