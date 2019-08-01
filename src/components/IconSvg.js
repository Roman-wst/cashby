import React, {Component} from 'react'
import SvgSprite from "../img/sprite.symbol.svg";

class IconSvg extends Component {
    render() {
        return (
            <svg className={`${(this.props.className)} ic`}>
                <use xlinkHref={SvgSprite + '#' + this.props.icon}></use>
            </svg>
        )
    }
}

export default IconSvg