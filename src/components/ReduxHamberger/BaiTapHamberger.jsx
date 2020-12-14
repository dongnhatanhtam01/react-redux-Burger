import React, { Component } from 'react'
import {connect} from 'react-redux'

class BaiTapHamberger extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <h3 className="display-4 text-success">Bài Tập Hamberger CyberSoft</h3>
                <div className="row">
                    <div className="col-6">12</div>
                    <div className="col-6">12</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        burger: state.BurgerReducer.burger
    }
}

export default connect(mapStateToProps, null)(BaiTapHamberger)