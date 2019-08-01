import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import IconSvg from '../IconSvg'

const HeaderNav = () => (
    <ul className="nav header-nav">
        <li className="nav-item">
            <NavLink className="nav-link" to='/my-cashback/'>Мой кэшбэк</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to='/enrollment-history/'>История зачислений</NavLink>
        </li>
        <li className="nav-item">
           <NavLink className="nav-link" to='/upload-check/'>
                <IconSvg className="upload-check mr-2" icon={'ic-bill'}/>
                <span>Загрузить чек</span>
            </NavLink>
        </li>
    </ul>
);

export default HeaderNav