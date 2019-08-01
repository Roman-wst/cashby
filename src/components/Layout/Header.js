import React, {Component} from 'react'
import GeoField from '../GeoField'
import SearchField from '../SearchField'
import HeaderNav from './HeaderNav'
import IconSvg from '../IconSvg'
import logo from '../../img/logo.svg'

class Header extends Component {
    render() {
        return (
            <header className="page-header">

                <div className="header-top">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between">
                            <GeoField/>
                            <div className="d-flex align-items-center">
                                <IconSvg className="ic-login" icon={'ic-login'}/>
                                <span>Войти</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-bottom">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <img src={logo} alt={"CashBy Logo"}/>
                            </div>
                            <div className="col-6">
                                <HeaderNav/>
                            </div>
                            <div className="col-3">
                                <SearchField placeholder = {'Поиск'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header