import { useDispatch } from "react-redux";

const HeaderC = () => {
    const dispatch = useDispatch()

    const showFormButtonClicked = (e) => {
        dispatch({
            type: 'SHOW_HIDE_FORM',
            payload: null
        })
    }


    return (
        <div className="header">
            <h1>My Books</h1>
            <button className="addBook" onClick={() => showFormButtonClicked()}>Add Book</button>
        </div>
    );
}

export default HeaderC;