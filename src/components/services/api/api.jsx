import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3033/api',
  });


  export const getTransactions = async () => {
    const { data }  = await instance.get('/transactions');
    console.log(data)
    return data;
  };