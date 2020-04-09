import React from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardText,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends React.Component {
  state = {
    activeTab: 0
  };

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://www.abc.net.au/news/image/9627246-3x2-340x227.jpg) center / cover"
              }}
            >
              Selenium & Cucumber BDD
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <a
                href="https://github.com/connorreese13/selenium-cucumber-automation"
                target="_blank"
              >
                <Button className="colored">GitHub</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFF",
                height: "176px",
                background:
                  "url(https://img.stackshare.io/service/1020/OYIaJ1KK.png) center / cover"
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It
            </CardText>
            <CardActions border>
              <Button className="colored">GitHub</Button>
              <Button className="colored">CodePen</Button>
              <Button className="colored">Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "white",
                height: "176px",
                background:
                  "url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80) center / cover"
              }}
            >
              AirBnb Clone
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <a
                href="https://github.com/connorreese13/04-airbnb-client"
                target="_blank"
              >
                <Button className="colored">GitHub</Button>
              </a>
              <a
                href="https://connor-airbnb-clone.herokuapp.com/"
                target="_blank"
              >
                <Button className="colored">Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80) center / cover"
              }}
            >
              To Do List
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <a
                href="https://github.com/connorreese13/03-todo-list-client"
                target="_blank"
              >
                <Button className="colored">GitHub</Button>
              </a>
              <a
                href="https://connor-reese-to-do-list-client.herokuapp.com/"
                target="_blank"
              >
                <Button className="colored">Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFF",
                height: "176px",
                background:
                  "url(https://img.stackshare.io/service/1020/OYIaJ1KK.png) center / cover"
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It
            </CardText>
            <CardActions border>
              <Button className="colored">GitHub</Button>
              <Button className="colored">CodePen</Button>
              <Button className="colored">Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is Test Automation</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Test Automation</Tab>
          <Tab>React</Tab>
          <Tab>NodeJS</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
