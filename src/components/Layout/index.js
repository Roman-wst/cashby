import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import Slider from '../Slider'
import MyCashback from '../MyCashback'
import {Switch, Route } from 'react-router-dom'


class Index extends Component {
    render() {
        return (
            <div className="d-flex flex-column">

                <Header />

                <main className="main-content">
                    <Switch>
                        <Route exact path="/"  component={Slider} />
                        <Route path="/my-cashback/" component={MyCashback} />
                    </Switch>
                </main>

                {/*{this.props.children}*/}

                <Footer />
            </div>

        )
    }
}

export default Index