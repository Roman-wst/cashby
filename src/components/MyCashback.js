import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom";

class MyCashback extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 h1">Нет кэшбэка</div>
                </div>
                 <div className="row">
                     <div className="col-12 h1">Есть кэшбэк</div>
                 </div>
            </div>
        )
    }
}

export default MyCashback