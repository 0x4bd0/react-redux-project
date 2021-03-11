import { useSelector } from "react-redux";
import rootReducer from "../reducers/rootReducer";
import BookC from "./book";

const BodyC = () => {
    const state = useSelector(rootReducer)

    console.log(state)

    return (
        <div className="body">
            {
                state.books.map(item => (
                    <BookC book={item} key={item.id}></BookC>
                ))
            }
        </div>
    );
}

export default BodyC;