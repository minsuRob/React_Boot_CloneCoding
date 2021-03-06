import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from './App';

test('From order to ', async ()=>{
    render(<App/>);

    const americaInput = await screen.findByRole("spinbutton", {
        name: "America"
    });
    userEvent.clear(americaInput);
    userEvent.type(americaInput, "2");

    const englandInput = await screen.findByRole("spinbutton", {
        name: "England"
    });
    userEvent.clear(englandInput);
    userEvent.type(englandInput, "3");

    const insuranceCheckbox = await screen.findByRole("checkbox", {// backend에서 가져온 후에 하기에 findByRole 사용
        name: "Insurance",
    });

    userEvent.click(insuranceCheckbox);

    const orderButton = screen.getByRole("button", {
        name: "주문하기",
    });
    userEvent.click(orderButton);

    const summaryHeading = screen.getByRole("heading", {name: "주문 확인"});
    expect(summaryHeading).toBeInTheDocument();

    const productHeading = screen.getByRole("heading", {name: "여행 상품: 5000"});
    expect(productHeading).toBeInTheDocument();

    const optionHeading = screen.getByRole("heading", {name: "옵션: 500"});
    expect(optionHeading).toBeInTheDocument();
    
    expect(screen.getByText("2 America")).toBeInTheDocument();
    expect(screen.getByText("3 England")).toBeInTheDocument();
    expect(screen.getByText("Insurance")).toBeInTheDocument();

    const confirmCheckbox = screen.getByRole("checkbox", {
        name: "주문하려는 것을 확인하셨나요?",
    });
    userEvent.click(confirmCheckbox);
    
    const confirmOrderButton = screen.getByRole("button", {
        name: "주문 확인",
    });
    userEvent.click(confirmOrderButton);


    // 주문 완료
    //const loading = screen.getByText(/loading/i);
    //expect(loading).toBeInTheDocument();

    const completeHeader = await screen.findByRole("heading", {
        name: "주문 성공!",
    });
    expect(completeHeader).toBeInTheDocument();
    
    // const loadingDisappeared = screen.queryByText("loading");
    // expect(loadingDisappeared).toBeInTheDocument();

    const firstPageButton = screen.getByRole("button", {name: "첫번째 페이지로!"});
    userEvent.click(firstPageButton);

    await waitFor(()=> {
        screen.getByRole("spinbutton", {name: "America"});
    })

});