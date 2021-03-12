import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddBookC = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.addBook)
    const [showErr, setShowErr] = useState(false)
    const [input, setInput] = useState('')
    const [author, setAuthor] = useState('')

    const addBookButtonClicked = () => {
        if (input.length > 0) {
            dispatch({
                type: 'ADD_BOOK',
                payload: {
                    title: input,
                    author: author
                }
            })
            setShowErr(false)
            setInput("")
            setAuthor("")
            dispatch({
                type: 'SHOW_HIDE_FORM',
                payload: null
            })
        } else {
            setShowErr(true)
        }
    }

    return (

        state.showForm && < div className="addBookContainer" >
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="addBookInput" placeholder="book name here" />
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="addBookInput" placeholder="author name here" />
            {showErr && <p className="nameValidation">A name is required</p>}
            <button className="addBookSubmit" onClick={() => addBookButtonClicked()}>Save</button>
        </div >

    );
}

export default AddBookC;