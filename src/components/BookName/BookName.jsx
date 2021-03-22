import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faAngular } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import "./BookName.css";

const BookName = () => {
    const iconStyle = { fontSize: 30 };
    return (
        <>
            <h1 className="sec-heading">JavaScript フレームワーク</h1>
            <p className="sec-text">好きな本を選んでください 。</p>
            <div className="sec-cat">
                <ul className="sec-cat__list">
                    <li className="sec-cat__item">
                        <NavLink to="/react" className="react">
                            React
                            <FontAwesomeIcon style={iconStyle} icon={faReact} />
                        </NavLink>
                    </li>
                    <li className="sec-cat__item">
                        <NavLink to="/vue" className="vue">
                            Vue
                            <FontAwesomeIcon style={iconStyle} icon={faVuejs} />
                        </NavLink>
                    </li>
                    <li className="sec-cat__item">
                        <NavLink to="/angular" className="angular">
                            Angular
                            <FontAwesomeIcon style={iconStyle} icon={faAngular} />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default BookName;
