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

    useEffect(() => {
      const productTotal = calculateSubtotal("products", orderCounts);
      const optionTotal = calculateSubtotal("options", orderCounts);
      const total = productTotal + optionTotal;
      setTotals({
          products: productsTotal,
          options: optionsTotal,
          total: total,
      }, [orderCounts]);
      
    const pricePerItem = {
        products: 1000,
        options: 500,
    }

    function calculateSubtotal(orderType, orderCounts) { 
        let optionCount = 0;
        for (const count of orderCounts[orderType].values()) {
            optionCount += count;
        }

        return optionCount * pricePerItem[orderType];
        
    }

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