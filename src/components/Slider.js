import React, {Component} from 'react'
import ShoppingBag from '../img/shopping-bag.svg'
// import 'bootstrap/js/src/carousel'

class Slider extends Component {
    render() {
        return (
            <div id="slider" className="carousel slider" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <div className="h1">Возвращайте деньги за покупки в оффлайне</div>
                                    <p className="slide-description">Получайте кэшбэк на счёт телефона или банковскую карту</p>
                                    <div className="d-flex">
                                        <a href={"#"} className="slider-btn slider-btn-primary mr-3">Выбрать магазин</a>
                                        <a href={"#"} className="slider-btn slider-btn-secondary">Узнать больше</a>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <img className="img-fluid" src={ShoppingBag} alt="First slide" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*<div className="carousel-item">*/}
                        {/*<div className="container-fluid">*/}
                            {/*<div className="row">*/}
                                {/*<div className="col">*/}
                                    {/*<div className="h1">Возвращайте деньги за покупки только в оффлайне</div>*/}
                                    {/*<p className="slide-description">Получайте кэшбэк на счёт телефона или банковскую карту</p>*/}
                                    {/*<div className="d-flex">*/}
                                        {/*<a href={"#"} className="slider-btn slider-btn-primary mr-3">Выбрать магазин</a>*/}
                                        {/*<a href={"#"} className="slider-btn slider-btn-secondary">Узнать больше</a>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="col-auto">*/}
                                    {/*<img className="img-fluid" src={ShoppingBag} alt="First slide" />*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>
                {/*<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">*/}
                    {/*<span className="carousel-control-prev-icon" aria-hidden="true"></span>*/}
                    {/*<span className="sr-only">Previous</span>*/}
                {/*</a>*/}
                {/*<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">*/}
                    {/*<span className="carousel-control-next-icon" aria-hidden="true"></span>*/}
                    {/*<span className="sr-only">Next</span>*/}
                {/*</a>*/}
            </div>
        )
    }
}

export default Slider