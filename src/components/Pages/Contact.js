import React, { Component } from "react";
import Field from "../Common/Field";
import { withFormik } from "formik";
import * as Yup from "yup";
import Footer from "../Common/Footer";
const fields = {
  sections: [
    [
      {
        name: "name",
        elementName: "input",
        type: "text",
        placeholder: "Your name*",
      },
      {
        name: "email",
        elementName: "input",
        type: "email",
        placeholder: "Your email*",
      },
      {
        name: "phone",
        elementName: "input",
        type: "tel",
        placeholder: "Your phone*",
      },
    ],
    [
      {
        name: "message",
        elementName: "textareaw",
        type: "text",
        placeholder: "Your message*",
      },
    ],
  ],
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  }
  render() {
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form novalidate="novalidate" onSubmit={this.props.handleSubmit}>
                <div className="row">
                  {fields.sections.map((section, sectionIndex) => {
                    return (
                      <div className="col-md-6" key={sectionIndex}>
                        {section.map((field, i) => {
                          return (
                            <Field
                              {...field}
                              key={i}
                              onChange={this.props.handleChange}
                              onBlur={this.props.handleBlur}
                              touched={this.props.touched[field.name]}
                              errors={this.props.errors[field.name]}
                            />
                          );
                        })}
                      </div>
                    );
                  })}

                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    phone: "",
    message: "",
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "Your name is too short")
      .required("You must give us your name."),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Your email is required"),
    phone: Yup.string()
      .min(10, "Please provide your 10 digit phone number")
      .max(15, "Your Phone number is too long")
      .required("We need a phone number to reach you at."),
    message: Yup.string()
      .min(500, "You need to provide a longer message")
      .required("a message is required"),
  }),
  //    validate: values => {
  // const errors = {};
  // Object.keys(values).map(v => {
  //     if (!values[v]) {
  //         errors[v] = "Required";
  //     }
  // })
  // return errors;
  //
  // },
  handleSubmit: (values, { setSubmitting }) => {
    console.log("Values", values);
    alert("Form Submitted. Thank you.", JSON.stringify(values));
    //alert("Uou've submitted the form");
  },
})(Contact);
