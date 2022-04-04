import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'
import ErrorBanner from '../../components/ErrorBanner';
import { OrderContext } from '../../context/OrderContext';

function CompletePage({setStep}) {

  const [orderDatas] = useContext(OrderContext);
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    orderCompleted(orderDatas);
  }, [orderDatas])


  const orderCompleted = async () => {
    try {
      let response = await axios.post(
        'http://localhost:4000/order',
        orderDatas
      )
      setOrderHistory(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };


  if (error) {
    return <ErrorBanner message="에러발생" />;
  }

  const orderTable = orderHistory.map((item, key) => (
    <tr key={item.orderNumber}>
      <td>{item.orderNumber}</td>
      <td>{item.price}</td>
    </tr>
  ));

  if (loading) {
    return <div>loading</div>;
  } else {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>주문 성공!</h2>
        <h3>지금까지 모든 주문</h3>
        <table style={{ margin: "auto" }}>
          <thead>
            <tr>
              <th>number</th>
              <th>price</th>
            </tr>
            <tbody>
              {orderTable}
            </tbody>
          </thead>
        </table>
        <br />
        <button className='rainbow rainbow-1' onClick={() => setStep(0)}>
          첫번째 페이지로!
        </button>
      </div>
    );
  }

}

export default CompletePage