import { PHOTO_CATEGORY_OPTIONS } from "constant/globals";
import InputField from "custom-field/InputField";
import RandomPhotoField from "custom-field/RamdomPictureField";
import SelectField from "custom-field/SelectedField";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { SolarSystemLoading } from 'react-loadingg';
import {
  Button, Col, Container,
  FormGroup, Row
} from "reactstrap";
import * as Yup from "yup";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  const {isAddMode} = props;


  const {initialValues} = props;


  const validationSchema = Yup.object().shape({

    title:Yup.string().required('This field is required'),

    categoryId:Yup.number()
    .required('This field is required')
    .nullable(),

    photo:Yup.string().when('categoryId', {
      is : 1, 
      then :Yup.string().required('This field is required'),
      otherwise: Yup.string().notRequired()
    })


  })

  return (
    <Container>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <br />
          <br />
          <Formik 
          initialValues={initialValues}
          onSubmit= {props.onSubmit}
          validationSchema = {validationSchema}
          >
            {(formikProps) => {
              //   do something here...

              const {  isSubmitting } = formikProps;
              // console.log(values,errors,touched);

              return (
                <Form>

                  <FastField
                    name="title"
                    component={InputField}
                    label="Title"
                    placeholder="Enter title"
                  />
                  <br />

                  <FastField
                    name="categoryId"
                    component={SelectField}
                    label="Category"
                    placeholder="What's is your category...?"
                    options={PHOTO_CATEGORY_OPTIONS}
                  />

                 
                  <br />
                  <FastField
                    name="photo"
                    component={RandomPhotoField}
                    label="Photo"
                  
                  />
                  <FormGroup>
                    <Button 
                    type = "submit" 
                    color={isAddMode ? "primary" : "danger"}>
                      {isSubmitting ? <SolarSystemLoading size = "large" color="#FF3366"/>  : ''} 
                     {isAddMode ? 'Add Photo' : 'Save Photo'}
                    </Button>
                  </FormGroup>
                </Form>
              );
            }}
          </Formik>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
}

export default PhotoForm;
