import { useDispatch } from "react-redux";

const BookC = ({ book }) => {
    const dispatch = useDispatch()

    const deleteBookClicked = (id) => {
        dispatch({
            type: 'DELETE_BOOK',
            payload: {
                id
            }
        })
    }

    return (
        <div className="book">

            <div className="bookItem">
                <h3>
                    Title : <span className="bookItemContent">{book.title}</span>
                </h3>
            </div>

            <div className="bookItem">
                <h3>
                    Author : <span className="bookItemContent">{book.author}</span>
                </h3>
            </div>

            <div className="bookItem">
                <div className="bookAction">
                    <button className="bookActionDelete" onClick={() => deleteBookClicked(book.id)}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default BookC;