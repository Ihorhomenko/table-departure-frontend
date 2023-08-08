import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3033/api',
  });


  export const getTransactions = async () => {
    const { data }  = await instance.get('/transactions');
    // console.log(data)
    return data;
  };

  export const addTransactions = async (data) => {
    const {data: result} = await instance.post('/transactions', data);
    
    return result;
}

export const removeTransactions = async (id) => {
  const {data: result} = await instance.delete(`/transactions/${id}`);
  return result;
}

export const upDateTransation = async (id, data) => {
  const {data: result} = await instance.put(`/transactions/${id}`, data)
  return result;
}