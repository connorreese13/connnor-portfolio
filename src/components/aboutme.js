import React from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  List,
  ListItem,
  ListItemContent
} from "react-mdl";

class About extends React.Component {
  render() {
    return (
      <div>
        <Grid className="landing-grid" style={{ height: "100vh" }}>
          <Cell col={7}>
            <Card
              shadow={0}
              style={{
                width: "75%",
                margin: "auto",
                height: "80vh",
                borderRadius: "10px"
              }}
            >
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
                }}
              >
                About Me
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sagittis pellentesque lacus eleifend lacinia...
              </CardText>
            </Card>
          </Cell>
          <Cell col={5}>
            {" "}
            <div className="contact-list">
              <Card
                shadow={0}
                style={{
                  width: "75%",
                  margin: "auto",
                  height: "80vh",
                  borderRadius: "10px"
                }}
              >
                <h2>Contact Me</h2>
                <hr />
                <List>
                  <ListItem>
                    <ListItemContent
                      style={{ fontSize: "30px", fontFamily: "Anton" }}
                    >
                      <i className="fa fa-phone-square" aria-hidden="true"></i>
                      801-230-0129
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent
                      style={{ fontSize: "30px", fontFamily: "Anton" }}
                    >
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      connor.reese13@gmail.com
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent
                      style={{ fontSize: "30px", fontFamily: "Anton" }}
                    >
                      <i className="fab fa-linkedin" aria-hidden="true"></i>
                      linkedin.com/in/connor-reese
                    </ListItemContent>
                  </ListItem>
                </List>
              </Card>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
