import React, { useState } from "react";
import Booklist from "./components/Booklist";
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from "axios";
import { Button } from "@material-ui/core";

// 入力値に`books`を追加して出力するシンプルな関数を定義
const getDataFormAPI = async (keyword) => {
    const requestUrl = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
    const result = await axios.get(`${requestUrl}${keyword}`);
    return result;
};

function App() {
    const languages = ["React", "Vue", "Angular"]; // 追加
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(() => e.target.value);
    };
    return (
        <BrowserRouter>
            <div>
                <h1>React App</h1>
                <ul>
                    <li>
                        <Link to="/react">React</Link>
                    </li>
                    <li>
                        <Link to="/vue">Vue</Link>
                    </li>
                    <li>
                        <Link to="/angular">Angular</Link>
                    </li>
                    <li>
                        <input
                            value={text}
                            onChange={handleChange}
                            type="text"
                            placeholder="本のタイトル"
                        />
                        <Link to={text} onClick={() => handleChange}>
                            <Button variant="contained" color="primary">
                                書籍を探す
                            </Button>
                        </Link>
                    </li>
                </ul>
                <Route
                    path="/:text"
                    render={(props) => (
                        <Booklist
                            language={text}
                            getData={(keyword) => getDataFormAPI(keyword)} // getDataという名前で関数を渡す
                        />
                    )}
                />
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
