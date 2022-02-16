import React from "react";
import { connect } from "react-redux";
import { decrease, increase } from "../actions";

const Counter = (props: any) => {
  return (
    <div>
      Counter: {props.counterReducer}
      <button onClick={() => props.decrease()}>DECREASE</button>
      <button onClick={() => props.increase()}>INCREASE</button>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps, { increase, decrease })(Counter);
