import React, { useState, useEffect } from "react";
import "./Booklist.css";

const BookList = (props) => {
    const [bookData, setBookData] = useState(null);
    useEffect(() => {
        props.getData?.(props.language).then((response) => setBookData(response));
    }, [props]);
    return (
        <div className="books">
            <ul className="books__list">
                {bookData === null ? (
                    <p className="text-center">now loading...</p>
                ) : (
                    bookData.data.items.map((x, index) => (
                        <li key={index} className="books__item">
                            <div className="books__thum">
                                <a target="_blannk" href={x.volumeInfo.infoLink}>
                                    <div
                                        className="books__bg"
                                        style={{
                                            backgroundImage:
                                                x.volumeInfo.imageLinks === undefined
                                                    ? `url("http://placehold.jp/150x150.png?text=sample")`
                                                    : `url(${x.volumeInfo.imageLinks.thumbnail})`,
                                        }}
                                    ></div>
                                </a>
                            </div>
                            <div className="books__text">
                                <h3 className="books__title">
                                    <a target="_blannk" href={x.volumeInfo.infoLink}>
                                        {x.volumeInfo.title}
                                    </a>
                                </h3>
                                <p className="books__price">
                                    {x.saleInfo.saleability === "FOR_SALE" ? (
                                        x.saleInfo.listPrice.amount.toLocaleString() + "円"
                                    ) : (
                                        <span className="books__price--not">休止中</span>
                                    )}
                                </p>
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default BookList;
