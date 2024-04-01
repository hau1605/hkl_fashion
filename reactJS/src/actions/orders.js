import axios from 'axios';
import { BASE_URL } from "../configs/index.js";


export const vnpayPayment = async (total, order_id) => {
  
  const res = await axios.post(`${BASE_URL}/order/vnpay_url`, { total,  order_id });
  return res.data;
};

export const vnPayReturn = async () => {
  const res = await axios.get(`${BASE_URL}/order/vnpay_return${window.location.search}`);
  return res.data;
};

export const momoPayment = async (total, order_id) => {
  const res = await axios.post(`${BASE_URL}/order/momo_payment_url`, { total, order_id } );
  return res.data;
};

export const momoRedirect = async () => {
  const res = await axios.get(`${BASE_URL}/order/momo_return${window.location.search}`);
  return res.data;
};

export const getDiscount = async () => {
  const res = await axios.get(`${BASE_URL}/order/discount`);
  return res.data;
};
