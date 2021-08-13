import React, { useState } from "react"
import { Field, useFormik } from "formik"
import * as Yup from "yup"

//styles
import {
  CtButton,
  CtButtons,
  CtClose,
  CtContainer,
  CtForm,
  CtHeading,
  CtImage,
  CtInput,
  CtInputs,
  CtMain,
  CtSendBtn,
  CtTextArea,
} from "../ContactPopup/ContactPopup.styles"

//assests
import img from "../../public/assets/images/08.svg"
import close from "../../public/assets/images/CloseContact.svg"

export default function ApplyPopup({ btnClick, setBtnClick }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      hourlyRate: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.number()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      position: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      hourlyRate: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <>
      <CtContainer open={btnClick}>
        <CtMain>
          {" "}
          <CtClose>
            <button onClick={() => setBtnClick(false)}>
              <img src={close} alt='' />
            </button>
          </CtClose>
          <CtImage img={img} />
          <CtForm onSubmit={formik.handleSubmit}>
            <CtHeading> Apply to Job</CtHeading>

            <CtInputs>
              <CtInput
                placeholder='Name'
                type='text'
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className='ct-error-msg'>{formik.errors.name}</div>
              ) : null}

              <CtInput
                placeholder='Email*'
                type='email'
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className='ct-error-msg'>{formik.errors.email}</div>
              ) : null}

              <CtInput
                placeholder='Phone'
                type='text'
                {...formik.getFieldProps("phone")}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className='ct-error-msg'>{formik.errors.phone}</div>
              ) : null}

              <CtInput
                placeholder='Desired position'
                type='text'
                {...formik.getFieldProps("position")}
              />
              {formik.touched.position && formik.errors.position ? (
                <div className='ct-error-msg'>{formik.errors.position}</div>
              ) : null}
              <CtInput
                placeholder='Hourly Rate'
                type='text'
                {...formik.getFieldProps("hourlyRate")}
              />
              {formik.touched.hourlyRate && formik.errors.hourlyRate ? (
                <div className='ct-error-msg'>{formik.errors.hourlyRate}</div>
              ) : null}

              <CtInput placeholder='Name' type='upload' />
            </CtInputs>
            <CtSendBtn type='submit'>Send application </CtSendBtn>
          </CtForm>
        </CtMain>
      </CtContainer>
    </>
  )
}
