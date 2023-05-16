import React from "react";
import { Box, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import styles from "./Form.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

function Form() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },

    validateOnChange:false,

    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().required("Required").email("Invalid email address"),
      phone: Yup.string()
        .required("Required")
        .max(12, "Must be 12 characters or less")
        .matches(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, 'Invalid phone number'),
    }),

    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });
  return (
    <Box>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <TextField
          sx={{ m: 2 }}
          id="name"
          name="name"
          label="Name"
          error={!!formik.errors.name}
          onChange={formik.handleChange}
          value={formik.values.name}
          helperText={formik.errors.name}
          variant="outlined"
        />
        <TextField
          sx={{ m: 2 }}
          id="email"
          name="email"
          label="Email"
          error={!!formik.errors.email}
          onChange={formik.handleChange}
          value={formik.values.email}
          helperText={formik.errors.email}
          variant="outlined"
        />
        <TextField
          sx={{ m: 2 }}
          id="phone"
          name="phone"
          label="Phone"
          error={!!formik.errors.phone}
          onChange={formik.handleChange}
          value={formik.values.phone}
          helperText={formik.errors.phone}
          variant="outlined"
        />
        <Button
          type={"submit"}
          variant="contained"
          size="large"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </form>
    </Box>
  );
}

export default Form;
