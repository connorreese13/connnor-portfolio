import React from "react";
import { Grid, Cell } from "react-mdl";

class Resume extends React.Component {
  render() {
    return (
      <div>
        <Grid style={{ height: "100vh" }}>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Connor Reese</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>lorem ipsum blah blah blah</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>801-230-0129</p>
            <h4>Email</h4>
            <p>connor.reese13@gmail.com</p>
            <h5>Web</h5>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <iframe
              style={{ height: "100%", width: "100%" }}
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
