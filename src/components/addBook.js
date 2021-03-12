import { useSelector } from "react-redux";

const AddBookC = () => {
    const state = useSelector((state) => state.addBook)

    return (

        state.showForm && < div className="addBookContainer" >
            <input type="text" className="addBookInput" />
            <button className="addBookSubmit">+</button>
        </div >

    );
}

export default AddBookC;