import React from "react";
import { Card } from "antd";
import Foo from "../components/foo";
import { PageContext } from "../interfaces";

/** Home page props definitions. */
export interface Props {
  a?: string;
}

interface State {
  b: number;
}

class HomePage extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { b: 1 };
  }

  static async getInitialProps(ctx: PageContext): Promise<Props> {
    return Promise.resolve({ a: "bruh" });
  }

  aMethod(val: String): void {
    val.toLocaleLowerCase();
  }

  render() {
    return (
      <div className="index-page">
        Welcome home
        <Foo title="Foo" />
        <Foo title="Bruh" />
        <Foo title={this.props.a} />
        <Card title="Card title" />
      </div>
    );
  }
}

export default HomePage;
