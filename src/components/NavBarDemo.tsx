import React from "react";
import { Tab, NavBarItem, Article, Button, Page, Msg } from "react-weui";

export default class NavBarDemo extends React.Component {
  render() {
    return (
      <Tab type="navbar">
        <NavBarItem label="Nav1">
          <Article>
            <section>
              <Page className="msg_success">
                <Msg
                  type="success"
                  title="Action Success"
                  description="We have received your feedback"
                  buttons={[]}
                />
              </Page>
              <Button>OK</Button>
            </section>
          </Article>
        </NavBarItem>
        <NavBarItem label="Nav2">
          <Article>
            <h1>Page 2</h1>
            <section>
              <h2 className="title">Heading</h2>
              <section>
                <h3>3.1 Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                </p>
              </section>
            </section>
          </Article>
        </NavBarItem>
      </Tab>
    );
  }
}
