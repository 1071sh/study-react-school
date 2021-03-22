import React from "react";
import Booklist from "./components/Booklist/Booklist";
import BookName from "./components/BookName/BookName";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";

// 入力値に`books`を追加して出力するシンプルな関数を定義
const getDataFormAPI = async (keyword) => {
    const requestUrl = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
    const result = await axios.get(`${requestUrl}${keyword}`);
    return result;
};

function App() {
    const languages = ["React", "Vue", "Angular"]; // 追加
    return (
        <BrowserRouter>
            <div className="container">
                <BookName />
                <Route
                    path="/react"
                    render={(props) => (
                        <Booklist
                            language={languages[0]}
                            getData={(keyword) => getDataFormAPI(keyword)} // getDataという名前で関数を渡す
                        />
                    )}
                />
                <Route
                    path="/vue"
                    render={(props) => (
                        <Booklist
                            language={languages[1]}
                            getData={(keyword) => getDataFormAPI(keyword)}
                        />
                    )}
                />
                <Route
                    path="/angular"
                    render={(props) => (
                        <Booklist
                            language={languages[2]}
                            getData={(keyword) => getDataFormAPI(keyword)}
                        />
                    )}
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
