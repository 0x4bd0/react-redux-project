import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddBookC = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.addBook)
    const [input, setInput] = useState('')

    const addBookButtonClicked = () => {
        dispatch({
            type: 'ADD_BOOK',
            payload: {
                title: input
            }
        })
    }

    return (

        state.showForm && < div className="addBookContainer" >
            <input type="text" onChange={(e) => setInput(e.target.value)} className="addBookInput" placeholder="book name here" />
            <button className="addBookSubmit" onClick={() => addBookButtonClicked()}>+</button>
        </div >

    );
}

export default AddBookC;