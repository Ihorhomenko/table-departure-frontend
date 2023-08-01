import "./AddBtn.css"

const AddBtn = ({openModal}) => {

    // const hundleClickBtn = () => {
    //     return console.log("hello")
    // }


    return (
        <button className="addBtn" type="button" onClick={openModal}>+</button>
    )
}

export default AddBtn