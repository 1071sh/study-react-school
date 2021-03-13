import React, { useState, useEffect } from "react";

const BookList = (props) => {
    const [bookData, setBookData] = useState(null);
    useEffect(() => {
        props
            .getData?.(props.language)
            .then((response) => setBookData(response));
    }, [props]);
    return (
        <div>
            <ul>
                {bookData === null ? (
                    <p>now loading...</p>
                ) : (
                    bookData.data.items.map((x, index) => (
                        <li key={index}>
                            <h3>
                                <a href={x.volumeInfo.infoLink}>
                                    {x.volumeInfo.title}
                                </a>
                            </h3>
                            {/* <p>
                                {x.volumeInfo.authors.length >= 2
                                    ? x.volumeInfo.authors[0] + " 他"
                                    : x.volumeInfo.authors[0]}
                                ／著
                            </p> */}
                            <p>
                                {x.saleInfo.saleability === "FOR_SALE"
                                    ? x.saleInfo.listPrice.amount.toLocaleString() +
                                      "円"
                                    : "非売品"}
                            </p>
                            <a target="_blannk" href={x.volumeInfo.infoLink}>
                                <img
                                    src={
                                        x.volumeInfo.imageLinks
                                            ? x.volumeInfo.imageLinks.thumbnail
                                            : "http://placehold.jp/150x150.png?text=sample"
                                    }
                                    alt={x.volumeInfo.title}
                                />
                            </a>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default BookList;
