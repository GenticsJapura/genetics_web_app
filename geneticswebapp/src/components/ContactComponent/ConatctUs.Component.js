import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
 
export default function Contactsection() {
  init("user_17nXRu6uDfNlxC194GMjM");
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ua8wyq",
        "template_1fbr7iu",
        e.target,
        "user_5S6aiBc4zEh6anPwvWsu4"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("success");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500"
      style={{ marginTop: "5%" }}
      id="contact"
      class="container-fluid text-center bg-grey"
    >
      {/* <!-- Container (Contact Section) --> */}
      <div style={{marginBottom:'5%'}}>
        <h2 class="text-center" style={{marginBottom:'5%'}}>Contact Us</h2>
        <div class="row">
          {/* <div class="col-md-5">
            <img style={{height:'55%'}} src={contact}></img>
          </div> */}
          <div class="col-md-12 slideanim">
            <form noValidate autoComplete="off" onSubmit={sendEmail}>
              <TextField
                id="outlined-basic"
                label="Full Name"
                size="medium"
                variant="outlined"
                name="name"
                required
                style={{ width: "80%", fontSize: "15px" }}
              />

              <TextField
                id="outlined-basic"
                label="Email"
                type='email'
                size="medium"
                name="email"
                variant="outlined"
                required
                style={{ width: "80%", margin: "15px", fontSize: "15px" }}
              />
                <TextField
                id="outlined-basic"
                label="Subject"
                size="medium"
                name="subject"
                variant="outlined"
                required
                style={{ width: "80%", margin: "15px", fontSize: "15px" }}
              />

              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                size="medium"
                name="message"
                rows={4}
                variant="outlined"
                required
                style={{ width: "80%", fontSize: "15px" }}
              />

              <Button
                variant="outlined"
                type="submit"
                value="send message"
                color="primary"
                style={{
                  margin: "15px",
                  width: "80%",
                  height: "10%",
                  fontSize: "15px",
                }}
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
