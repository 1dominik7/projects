import { useEffect, useState } from 'react'
import { userRequest } from '../../requestMethods'
import './widgetLg.css'
import {format} from "timeago.js"


const WidgetLg = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);

  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>
    } 
  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest transations</h3>
      <table className="widgetLgTable">
        <tbody>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Data</th>
          <th className="widgetLgTh">Amounts</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders.map((order) => (
          <tr className="widgetLgTr" key={order._id}>
          <td className="widgetLgUser">
            <span className="widgetLgName">{order.userId}</span>
          </td>
          <td className="widgetLgData">{format(order.createdAt)}</td>
            <td className="widgetLgAmount">${order.amount}</td>
          <td className="widgetLgStatus"><Button type={order.status}/></td>
        </tr>
        ))}
          </tbody>
      </table>
    </div>
  )
}

export default WidgetLg
