import { render } from "@testing-library/react";
import { OrderContextProvider } from "./context/OrderContext";
const customRender = (ui, options) => 
    render(ui,{wrapper: OrderContextProvider, ...options });
    // render method말고 tlr 제공 lib 다시 export
export * from '@testing-library/react';

export {customRender as render}