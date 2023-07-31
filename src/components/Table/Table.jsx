import transactions from "../../transactions.json"
import "./table.css"

const Table = () => {
    return (
        <table class="table table-hover table-dark">
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
                    <tr>
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
                        <td>{el.percentEarning}</td>
                   </tr>
                ))}
                
            </tbody>

        </table>
    )
}

export default Table