const BookC = ({ book }) => {
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

        </div>
    );
}

export default BookC;