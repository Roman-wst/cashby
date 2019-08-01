import React from "react";
import { Link } from "react-router-dom";

const FooterNav = () => (
    <ul className="nav">
        <li className="nav-item">
            <Link className="nav-link" to='/'>Главная</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/my-cashback/">Мой кэшбэк</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/enrollment-history/">История зачислений</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/offer/">Оферта</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/feedback/">Обратная связь</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/about/">О проекте</Link>
        </li>
    </ul>
);

export default FooterNav;
