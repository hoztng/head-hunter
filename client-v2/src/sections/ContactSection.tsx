import React from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import Container from "@common/components/Containers/Container";
import Button from "@common/components/Buttons/Button";
import SectionTitle from "@common/components/Texts/SectionTitle";
import ContentTitle from "@common/components/Texts/ContentTitle";
import SectionText from "@common/components/Texts/SectionText";

const InnerContainer = styled.div`
  border-radius: 40px;
  background-color: #f8f5ff;
`;

const StyledFormGroup = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
`;

const StyledLabel = styled.label`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 0.5rem;
  @media (max-width: 834px) {
    font-size: 12px;
    line-height: 18px;
  }
  @media (max-width: 375px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

const StyledInput = styled.input`
  font-family: Noto Sans;
  width: 100%;
  border-radius: 8px;
  padding: 9px 12px;
  background-color: #fff;
  font-size: 1rem;
  border-style: none;
  /* margin-bottom: 10px; */
  @media (max-width: 834px) {
    padding: 7px 12px;
  }
  @media (max-width: 375px) {
    padding: 7px 12px;
  }
`;

const StyledButton = styled(Button).attrs(props => ({
  disabled: props.disabled,
}))`
  width: 100%;
`;

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const FormWrapper = styled.div`
  max-width: 400px;
  margin: 80px auto;
  @media (max-width: 900px) {
    margin: 64px auto;
    max-width: 295px;
  }
  @media (max-width: 680px) {
    max-width: 400px;
  }
  @media (max-width: 500px) {
    margin: 40px auto;
    max-width: 295px;
  }
  @media (max-width: 350px) {
    margin: 40px 8px;
    max-width: 295px;
  }
`;

const DetailWrapper = styled.div`
  max-width: 300px;
  margin-top: 80px;
  margin-left: 80px;
  @media (max-width: 900px) {
    margin: 64px auto;
    max-width: 295px;
  }
  @media (max-width: 680px) {
    max-width: 400px;
    margin-bottom: 0;
  }
  @media (max-width: 500px) {
    margin: 40px auto;
    margin-bottom: 0;
    max-width: 295px;
  }
  @media (max-width: 350px) {
    margin: 40px 8px;
    margin-bottom: 0;
    max-width: 295px;
  }
`;

const ErrorStyled = styled.div`
  position: absolute;
  left: 0;
  bottom: -18px;
  font-weight: 400;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  color: #dc3545;

`;

const StyledGridItem = styled.div``;

const ContentTitleWrapper = styled(ContentTitle)`
  margin-top: 32px;
  margin-bottom: 48px;
  @media (max-width: 900px) {
    margin-top: 32px;
    margin-bottom: 40px;
  }
  @media (max-width: 680px) {
    margin-top: 24px;
    margin-bottom: 32px;
  }
  @media (max-width: 500px) {
  }
  @media (max-width: 350px) {
  }
`;

const SectionTitleWrapper = styled(SectionTitle)`
  @media (max-width: 350px) {
    text-align: center;
  }
`;

const ContactSection: React.FC<{}> = () => {
  // Initial form values
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  // Form validation logic
  const validate = (values: any) => {
    const errors: any = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.message) {
      errors.message = "Required";
    }
    console.log("error :::", errors);
    return errors;
  };

  return (
    <Container>
      <div id="Let’s Talk"></div>
      <InnerContainer>
        <StyledGridContainer>
          <StyledGridItem>
            <DetailWrapper>
              <SectionTitleWrapper> Contact Us </SectionTitleWrapper>
              <ContentTitleWrapper>
                Feel Free To Drop Us a Line
              </ContentTitleWrapper>
              <SectionText>
                Your inquiries, feedback, or a simple 'hello' are always welcome
                with a smile!
              </SectionText>
            </DetailWrapper>
          </StyledGridItem>
          <StyledGridItem>
            <FormWrapper>
              <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={(values, { setSubmitting }) => {
                  // Handle form submission
                  console.log(values);
                  setSubmitting(false);
                  
                }}
              >
                {({errors, isValid, dirty, touched}) => (
                  <Form>
                    <StyledFormGroup>
                      <StyledLabel>Your Name</StyledLabel>
                      <Field as={StyledInput} name="name" />
                      {errors.name && touched.name ? <ErrorStyled>{errors.name}</ErrorStyled> : null}
                    </StyledFormGroup>
                    <StyledFormGroup>
                      <StyledLabel>Your Email</StyledLabel>
                      <Field as={StyledInput} type="email" name="email" />
                      {errors.email && touched.email ? <ErrorStyled>{errors.email}</ErrorStyled> : null}
                    </StyledFormGroup>
                    <StyledFormGroup>
                      <StyledLabel>How Can We Help You?</StyledLabel>
                      <Field as={StyledInput} name="message" />
                      {errors.message && touched.message ? <ErrorStyled>{errors.message}</ErrorStyled> : null}
                    </StyledFormGroup>
                    <StyledFormGroup>
                      <StyledButton
                        size={"small"}
                        variant={"primary"}
                        disabled={!(isValid && dirty)}
                      >
                        Submit
                      </StyledButton>
                    </StyledFormGroup>
                  </Form>
                )}
              </Formik>
            </FormWrapper>
          </StyledGridItem>
        </StyledGridContainer>
      </InnerContainer>
    </Container>
  );
};

export default ContactSection;
