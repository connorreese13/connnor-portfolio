import React from "react";
import { Grid, Cell } from "react-mdl";

class Resume extends React.Component {
  render() {
    return (
      <div>
        <Grid style={{ height: "100vh" }}>
          <Cell col={5}>
            <div className="about-me">
              <img
                src="https://res.cloudinary.com/dmreh5d0n/image/upload/v1586722500/selfie_ffcarh.jpg"
                alt="avatar"
              />
            </div>
            <div style={{ paddingLeft: "20px" }}>
              <h2>Connor Reese</h2>
              <h4 style={{ color: "grey" }}>Programmer</h4>
              <hr style={{ borderTop: "3px solid #833fb2", width: "80%" }} />
              <h5 style={{ fontWeight: "bold" }}>About Me</h5>
              <p style={{ width: "90%", fontSize: "18px" }}>
                Hello there! My name is Connor Reese and I am from Salt Lake
                City, Utah. For over 2 years, my passion for tech has led to a
                fulfilling career as a Quality Assurance Software Engineer.
                Participating in several projects, I’ve had the rewarding
                experience of helping shape optimal end products through manual
                and automated testing measures.
                <br />
                <br />
                Actively participating in the Software Development Lifecycle has
                piqued my interest in the development phase and has given me the
                impetus to work on my own projects. Attending a Full Stack
                Development bootcamp in 2020 has since helped me build upon this
                expertise, and has allowed me to strengthen my skills in
                building out full stack web applications and automated testing
                frameworks.
              </p>
              <hr style={{ borderTop: "3px solid #833fb2", width: "80%" }} />
              <p style={{ fontSize: "25px", paddingTop: "15px" }}>
                <i className="fa fa-phone-square" aria-hidden="true"></i>
                801-230-0129
              </p>

              <p
                style={{
                  fontSize: "25px",
                  paddingTop: "15px",
                  paddingBottom: "15px"
                }}
              >
                <i className="fa fa-envelope" aria-hidden="true"></i>
                connor.reese13@gmail.com
              </p>

              <hr style={{ borderTop: "3px solid #833fb2", width: "80%" }} />
            </div>
          </Cell>
          <Cell className="resume-right-col" col={7}>
            <iframe
              style={{
                height: "100%",
                width: "100%",
                border: "5px solid #833fb2"
              }}
              src="https://res.cloudinary.com/dmreh5d0n/image/upload/v1585949969/Connor_s_Resume_hjcsjl.pdf"
              frameborder="0"
            ></iframe>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
