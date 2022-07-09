import React from "react";
import { useFormik } from "formik";

function BasicForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
    onSubmit: values => {
      console.log('Form Data ', values)
    },
    validate: values => {
      let errors = {}

        if (!values.name && !values.email && !values.phone && !values.password) {
          errors.name = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
        } else if (!/^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[789]\d{9}$/.test(values.phone)){
              errors.phone = 'Invalid Phone Number';
        }
        else if (!values.password && !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(values.password) ) {
            errors.password = 'Invalid Password';
        }
        return errors;
    }
    
  });

  console.log("Form Values Errors ", formik.errors);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? <div className="error">{formik.errors.name}</div>: null}
        </div>

        <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div className="error">{formik.errors.email}</div>: null}
        </div>

        <div className="form-control">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="string"
          id="phone"
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        {formik.errors.phone ? <div className="error">{formik.errors.phone}</div>: null}
        </div>

        <div className="form-control">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? <div className="error">{formik.errors.password}</div>: null}
        </div>


        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BasicForm;
