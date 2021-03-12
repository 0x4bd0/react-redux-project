import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddBookC = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.addBook)
    const [showErr, setShowErr] = useState(false)
    const [input, setInput] = useState('')

    const addBookButtonClicked = () => {
        if (input.length > 0) {
            dispatch({
                type: 'ADD_BOOK',
                payload: {
                    title: input
                }
            })
            setShowErr(false)
            setInput("")
        } else {
            setShowErr(true)
        }
    }

    return (

        state.showForm && < div className="addBookContainer" >
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="addBookInput" placeholder="book name here" />
            {showErr && <p className="nameValidation">A name is required</p>}
            <button className="addBookSubmit" onClick={() => addBookButtonClicked()}>+</button>
        </div >

    );
}

export default AddBookC;