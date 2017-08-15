import React, { Component } from "react";
import { css, withStyles } from "../withStyles";

@withStyles(({ color }) => ({
  title: {
    fontSize: "16px",
    color: color.text
  }
}))
export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { styles } = this.props;
    return (
      <div>
        <span {...css(styles.title)}>
          环境配置<br />
          <br />
          ES2015/2016<br />
          SASS or Aphrodite(css in js)<br />
          React <br />
          Immutable <br />
          React-Redux <br />
          React-Router4 <br />
          Webpack3 <br />
          Simple Production Boilerplate
        </span>
      </div>
    );
  }
}
