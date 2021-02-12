import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import { Field, reduxForm } from "redux-form";
//reduxForm is similar to connect

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = (formProps) => {
    const className = `field ${
      formProps.meta.error && formProps.meta.touched ? "error" : ""
    }`;
    return (
      //<input onChange={formProps.input.onChange} value={formProps.input.value} /> OR YOU CAN WRITE:

      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off" />
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    //creating a network request on the api running on loacalhost:3001
    this.props.createStream(formValues);
    console.log(formValues);
  };
  render() {
    //console.log(this.props);
    return (
      // since we are using redux form- this.props.handleSubmit- callback function that is provided to our componenet by redux form
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "streamCreate",
  //validate: validate OR YOU CAN WRITE
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
