import React, {Component} from 'react'
import IconSvg from './IconSvg'

class SearchField extends Component {
    render() {
        return (
            <div className="form-group component-search d-flex mb-0">
                <input type="text" className="form-control form-control-lg" placeholder={this.props.placeholder} />
                <button className="btn btn-search" type="button">
                    <IconSvg icon="ic-search"/>
                </button>
            </div>
        )
    }
}

export default SearchField