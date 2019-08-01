import React, {Component} from 'react'
import FooterNav from './FooterNav'

class Footer extends Component {
    render() {
        return (
            <div className="page-footer mt-auto">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-auto">
                            <p>6+ © 2018—2019, ООО «ГетПрайс»</p>
                        </div>
                        <div className="col">
                            <FooterNav/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer