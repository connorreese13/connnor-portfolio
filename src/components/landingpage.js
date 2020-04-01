import React from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends React.Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://res.cloudinary.com/dmreh5d0n/image/upload/v1585773642/avataaars_apsybw.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | Javascript | React | NodeJS | Express | MongoDB |
                Cucumber | Test Automation
              </p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/connor-reese/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/connorreese13"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
