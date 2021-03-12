import { useSelector } from "react-redux";
import rootReducer from "../reducers/rootReducer";

const AddBookC = () => {
    const state = useSelector((state) => state.addBook)

    console.log(state)
    return (

        state.showForm && < div className="addBookContainer" >
            <input type="text" className="addBookInput" />
            <button className="addBookSubmit">+</button>
        </div >

    );
}

export default AddBookC;