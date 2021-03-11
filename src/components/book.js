const BookC = ({ book }) => {
    console.log(book)
    return (
        <div className="book">
            <h3>
                {book.title}
            </h3>
        </div>
    );
}

export default BookC;