import React, { Component } from "react";
import { connect } from "react-redux";
// css
import "./hamberger.css";
class BaiTapHamberger extends Component {
  renderMenuHandler = () => {
    let { menu, burger } = this.props;
    return Object.entries(menu).map(([varKey, varValue], index) => {
      return (
        <tr key={index}>
          <td>{varKey}</td>
          <td>
            <button className="btn btn-danger m-2" onClick={()=>this.props.addBreadMid(varKey, -1)}>-</button>
            {burger[varKey]}
            <button className="btn btn-success m-2" onClick={()=>this.props.addBreadMid(varKey, 1)}>+</button>
          </td>
          <td>{varValue}</td>
          <td>{burger[varKey] * varValue}</td>
        </tr>
      );
    });
  };
  renderBreadMidHandler = () => {
    // console.log(this.props.burger);
    // ky thuat duyet object
    let { burger } = this.props;
    let content = [];
    for (let propsBurger in burger) {
      let breadMid = [];
      for (let i = 0; i < burger[propsBurger]; i++) {
        breadMid.push(<div className={propsBurger} key={i}></div>);
      }
      content.push(breadMid);
    }
    return content;
    // return Object.entries(burger).map(([var1_key, var2_value], index) =>{
    //     console.log(var1_key, var2_value);

    //     let breadMidArray =[];
    //     for (let i = 0; i< var2_value; i++){
    //         breadMidArray.push(<div key={i} className={var1_key}></div>)
    //     }
    //     return (
    //         breadMidArray
    //     )
    // })
  };

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h3 className="display-4 text-success">Bài Tập Hamberger CyberSoft</h3>
        <div className="row">
          <div className="col-6">
            <h3 className="text-center text-danger">Bánh burger của bạn!</h3>
            <div className="breadTop"></div>
            {this.renderBreadMidHandler()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-6">
            <table className="table">
              <thead>
                <td>Thức ăn</td>
                <td></td>
                <td>Giá</td>
                <td>Thành Tiền:</td>
              </thead>
              <tbody>{this.renderMenuHandler()}</tbody>
              <tfoot>
                <td colSpan="2"></td>
                <td>Tổng tiền</td>
                <td>{this.props.total}</td>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBreadMid: (propsBurger, amount) => {
      const action = {
        type: "ADD_BREAD_MID",
        propsBurger,
        amount,
      };
      dispatch(action);
    },
  };
};
const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BaiTapHamberger);
