import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Products from './Products';

export default function Type({orderType}) {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
    //const [orderDatas, updateItemCount] = useContext(orderContext)

    useEffect(()=> {
        loadItems(orderType);
    }, [orderType]);

    const loadItems = async(orderType) => {
        try {
            let response = await axios.get(`http://localhost:4000/${orderType}`);
            setItems(response.data);
        } catch(error) {
            setError(error);
        }
    };

    if (error) {
        return <ErrorBanner message="에러가 발생했습니다."/>;
    }

    const ItemComponent = orderType === "products" ? Products : null;

    const optionItems = items.map((item) => (
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
        />
    ));

    return <div>{optionItems}</div>;

}