import { useState } from "react";
import { useDispatch } from "react-redux";

const BookC = ({ book }) => {
    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(false)
    const [title, setTitle] = useState(book.title)
    const [author, setAuthor] = useState(book.author)
    const [showErr, setShowErr] = useState(false)

    const deleteBookClicked = (id) => {
        dispatch({
            type: 'DELETE_BOOK',
            payload: {
                id
            }
        })
    }

    const saveBookClicked = (id) => {
        if (title.length > 0) {

            dispatch({
                type: 'UPDATE_BOOK',
                payload: {
                    id, title, author
                }
            })

            setShowErr(false)
            setIsEditing(false)


        } else {
            setShowErr(true)
        }
    }

    return (
        <div className="book">

            <div className="bookItem">
                {
                    !isEditing ?
                        <h3>
                            Title : <span className="bookItemContent">{book.title}</span>
                        </h3>
                        :
                        <input className="editBookInput" type="text" name="" id="" value={title} onChange={(e) => setTitle(e.target.value)} />
                }

            </div>

            <div className="bookItem">
                {
                    !isEditing ?
                        <h3>
                            Author : <span className="bookItemContent">{book.author}</span>
                        </h3>
                        :
                        <input className="editBookInput" type="text" name="" id="" value={author} onChange={(e) => setAuthor(e.target.value)} />
                }

            </div>

            <div className="bookItem">
                {
                    showErr && <p className="nameValidation">A name is required</p>
                }
            </div>

            <div className="bookItem">
                <div className="bookAction">

                    {
                        !isEditing ?
                            <>
                                <button className="bookActionDelete" onClick={() => deleteBookClicked(book.id)}>Delete</button>
                                <button className="bookActionEdit" onClick={() => setIsEditing(true)}>Edit</button>
                            </>
                            :
                            <button className="bookActionEdit" onClick={() => saveBookClicked(book.id)}>Save</button>

                    }


                </div>
            </div>
        </div>
    );
}

export default BookC;