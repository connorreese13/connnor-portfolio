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
    activeTab: 1
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
            ></CardTitle>
            <CardText style={{ height: "100px" }}>
              <strong style={{ fontSize: "1.3rem" }}>
                Selenium & Cucumber BDD
              </strong>
              <br />
              <br />
              Testing framework utilizing Cucumbe Behavior Driven Development &
              Gherkin syntax. Writen in Ruby.
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <a
                href="https://github.com/connorreese13/selenium-cucumber-automation"
                target="_blank"
              >
                <Button className="colored">GitHub</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFF",
                height: "176px",
                background:
                  "url(https://pbs.twimg.com/profile_images/993969044674953216/Peyxjyb2_400x400.jpg) center / cover"
              }}
            ></CardTitle>
            <CardText style={{ height: "100px" }}>
              <strong style={{ fontSize: "1.3rem" }}>
                Selenium & Nightwatch.js
              </strong>
              <br />
              <br />
              Test Automation framekwork using Nigthwatch.js, written in
              Javascript.
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <a
                href="https://github.com/connorreese13/connor-el-sistema-automation"
                target="_blank"
              >
                <Button className="colored">GitHub</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
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
            ></CardTitle>
            <CardText style={{ height: "100px" }}>
              <strong style={{ fontSize: "1.3rem" }}>AirBnb Clone</strong>
              <br />
              <br />
              AirBnB clone making use of multiple components, pages, and
              collections and utilizing client-side APIs and third-party
              components
            </CardText>
            <CardActions
              border
              style={{ textAlign: "center", fontSize: "10px" }}
            >
              <a
                href="https://github.com/connorreese13/04-airbnb-api"
                target="_blank"
              >
                <Button className="colored">Server </Button>
              </a>
              <a
                href="https://github.com/connorreese13/04-airbnb-client"
                target="_blank"
              >
                <Button className="colored">Client </Button>
              </a>
              <a
                href="https://connor-airbnb-clone.herokuapp.com/"
                target="_blank"
              >
                <Button className="colored">Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80) center / cover"
              }}
            ></CardTitle>
            <CardText style={{ height: "100px" }}>
              <strong style={{ fontSize: "1.3rem" }}> To Do List</strong>
              <br />
              <br />A simple but elegant todo CRUD application
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <a
                href="https://github.com/connorreese13/03-todo-list-api"
                target="_blank"
              >
                <Button className="colored">Server </Button>
              </a>
              <a
                href="https://github.com/connorreese13/03-todo-list-client"
                target="_blank"
              >
                <Button className="colored">Client</Button>
              </a>
              <a
                href="https://connor-reese-to-do-list-client.herokuapp.com/"
                target="_blank"
              >
                <Button className="colored">Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FFF",
                height: "176px",
                background:
                  "url(https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80) center / cover"
              }}
            ></CardTitle>
            <CardText style={{ height: "100px" }}>
              <strong style={{ fontSize: "1.3rem" }}> Chat App</strong>
              <br />
              <br />
              Chat app similar to slack requiring user authentication for login
              and sign up
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <a
                href="https://github.com/connorreese13/06-slack-api"
                target="_blank"
              >
                <Button className="colored">Server </Button>
              </a>
              <a
                href="https://github.com/connorreese13/06-slack-client"
                target="_blank"
              >
                <Button className="colored">Client</Button>
              </a>
              <a
                href="https://connor-slack-clone-client.herokuapp.com/"
                target="_blank"
              >
                <Button className="colored">Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
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
