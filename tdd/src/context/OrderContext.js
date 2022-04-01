import { useState, createContext } from "react";

export const OrderContext = createContext();

export function OrderContextProvider(props) {
    const [orderCounts, setOrderCounts] = useState({
        product: new Map(),
        options: new Map()
    });

    const [totals, setTotals] = useState({
        products: 0,
        options: 0,
        total: 0,
    })
    const value = useMemo(() => {

        function updateItemCount(itemName, newItemCount, orderType) {
            const newOrderCounts = {...orderCounts};
            console.log('newOrderCount berfore', newOrderCounts);

            const OrderCountMap = orderCounts[orderType];
            OrderCountMap.set(itemName, parseInt(newItemCount));

            console.log('newOrderCount after', newOrderCounts);
            setOrderCounts(newOrderCounts);
            
        }


        return [{...orderCounts}, updateItemCount];
    }, [orderCounts]);

    return <OrderContext.Provider value={value} {...props}/>
       
}