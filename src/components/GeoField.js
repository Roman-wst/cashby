import React, {Component} from 'react'

class GeoField extends Component {
    render() {
        return (
            <div>
                <select>
                    <option>Москва и область</option>
                    <option>Калининград</option>
                </select>
            </div>
        )
    }
}

export default GeoField