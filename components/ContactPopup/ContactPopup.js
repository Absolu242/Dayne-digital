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
} from "./ContactPopup.styles"

//assests
import img from "../../public/assets/images/03.svg"
import close from "../../public/assets/images/CloseContact.svg"

export default function ContactPopup({ btnClick, setBtnClick }) {
  const formik = useFormik({
    initialValues: {
      service: "",
      name: "",
      email: "",
      phone: "",
      country: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.number()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      country: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      message: Yup.string()
        .max(300, "Must be 300 characters or less")
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
              <img src={close} alt='close-icon' />
            </button>
          </CtClose>
          <CtImage img={img} />
          <CtForm onSubmit={formik.handleSubmit}>
            <CtHeading> Let's talk</CtHeading>
            <CtButtons>
              <CtButton>
                <input
                  type='radio'
                  onChange={formik.handleChange}
                  name='service'
                  value='ios'
                />
                <p>Ios</p>
              </CtButton>
              <CtButton>
                <input
                  type='radio'
                  onChange={formik.handleChange}
                  name='service'
                  value='android'
                />
                <p>Android</p>
              </CtButton>
              <CtButton>
                <input
                  type='radio'
                  onChange={formik.handleChange}
                  name='service'
                  value='development'
                  id='check'
                />
                <p>Development</p>
              </CtButton>
              <CtButton>
                <input
                  type='radio'
                  onChange={formik.handleChange}
                  name='service'
                  value='design'
                />
                <p>Design</p>
              </CtButton>
            </CtButtons>

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
                placeholder='Country'
                type='text'
                {...formik.getFieldProps("country")}
              />
              {formik.touched.country && formik.errors.country ? (
                <div className='ct-error-msg'>{formik.errors.country}</div>
              ) : null}

              <CtTextArea
                placeholder='Message*'
                // cols='30'
                // rows='10'
                type='text'
                {...formik.getFieldProps("message")}
              />
              {formik.touched.message && formik.errors.message ? (
                <div className='ct-error-msg'>{formik.errors.message}</div>
              ) : null}
            </CtInputs>
            <CtSendBtn type='submit'>Send message </CtSendBtn>
          </CtForm>
        </CtMain>
      </CtContainer>
    </>
  )
}
