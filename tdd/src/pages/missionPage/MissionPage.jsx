import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'
import ErrorBanner from '../../components/ErrorBanner';
import { OrderContext } from '../../context/OrderContext';

function missionPage({ setStep }) {

  // const [orderDatas] = useContext(OrderContext);
  // const [orderHistory, setOrderHistory] = useState([]);
  // const [loading, setLoading] = useState();
  // const [error, setError] = useState();

  const [number, setNumber] = useState(0);
  const [disable, setDisable] = useState(false);

  // useEffect(() => {
  //   orderCompleted(orderDatas);
  // }, [orderDatas])

  const changeDisable = () => {
    const target = document.getElementsByClassName('target_btn');
    target.disabled = true;
  }

  const addNum = () => {
    setNumber(number + 1);
  }

  const delNum = () => {
    setNumber(number - 1);
  }

  // const orderCompleted = async () => {
  //   try {
  //     let response = await axios.post(
  //       'http://localhost:4000/order',
  //       orderDatas
  //     )
  //     setOrderHistory(response.data);
  //     setLoading(false);
  //   } catch (error) {
  //     setError(true);
  //   }
  // };


  // if (error) {
  //   return <ErrorBanner message="에러발생" />;
  // }

  // const orderTable = orderHistory.map((item, key) => (
  //   <tr key={item.orderNumber}>
  //     <td>{item.orderNumber}</td>
  //     <td>{item.price}</td>
  //   </tr>
  // ));

  function changeDisableState() {
    var btns = document.querySelectorAll('#count button');
  
    // 하나씩 토글
    for (var i = 0; i < btns.length; i++) {
      btns[i].disabled = !btns[i].disabled;

    }
  }


  return (
    <div>
      <div id="count">
        <button disabled={disable} onClick={delNum}>-</button>
        {" "}{number}{" "}
        <button disabled={disable} onClick={addNum}>+</button>
        {"    "}<br />
      </div>
        <button onClick={changeDisableState}>비/활성화</button>
    </div>
  );

}

export default missionPage