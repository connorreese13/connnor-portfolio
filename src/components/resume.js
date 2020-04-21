import React from "react";
import { Grid, Cell } from "react-mdl";

class Resume extends React.Component {
  render() {
    return (
      <div>
        <Grid style={{ height: "100vh" }}>
          <Cell className="resume-right-col" col={12}>
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
