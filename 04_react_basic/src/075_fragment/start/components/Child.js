import "./Child.css";
import { Fragment } from "react";

const Child = () => {
  return (
    <Fragment key="1">
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3></h3>
    </Fragment>
  );
};

export default Child;
