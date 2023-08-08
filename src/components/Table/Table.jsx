// import transactions from "../../transactions.json"
import "./table.css"
import { removeTransactions } from "components/services/api/api"
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const Table = ({transactions, isUpDateTransaction, openModal, addEditTransaction}) => {
    
    const onDelBtnClick = (id) => {
        removeTransactions(id)
    }

    const onUpdBtnClick = (data) => {
        isUpDateTransaction()
        openModal()
        addEditTransaction(data)
     }


    return (
        <table className="table table-hover table-dark">
            <thead>
                <tr>
                    <th scope="col">Тип товару</th>
                    <th scope="col">Найменування товару</th>
                    <th scope="col">Кількість</th>
                    <th scope="col">ПІБ отримувача</th>
                    <th scope="col">Номер телефону</th>
                    <th scope="col">Місто отримання</th>
                    <th scope="col">Відділення НП</th>
                    <th scope="col">Ціна</th>
                    <th scope="col">Сума</th>
                    <th scope="col">Оплачено</th>
                    <th scope="col">Залишок оплати</th>
                    <th scope="col">Собівартість</th>
                    <th scope="col">Заробіток</th>
                    <th scope="col">Заробіток у %</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(el => (
                    <tr key={el._id}>
                        <td>{el.typeProduct}</td>
                        <td>{el.product}</td>
                        <td>{el.quantity}</td>
                        <td>{el.name}</td>
                        <td>{el.telNumber}</td>
                        <td>{el.town}</td>
                        <td>{el.post}</td>
                        <td>{el.price}</td>
                        <td>{el.total}</td>
                        <td>{el.payment}</td>
                        <td>{el.balanceToBePaid}</td>
                        <td>{el.cost}</td>
                        <td>{el.earnings}</td>
                        <td>{parseFloat(el.percentEarning.toFixed(2))}</td>
                        <td>
                            <AiFillDelete className="btn-table btb-del" onClick={() => onDelBtnClick(el._id)}/>
                        </td>
                        <td>
                            <AiFillEdit className="btn-table btn-upd" onClick={() => onUpdBtnClick(el)}/>
                        </td>
                   </tr>
                ))}
                
            </tbody>

        </table>
    )
}

export default Table