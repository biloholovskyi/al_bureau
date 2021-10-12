import styled from "styled-components";

const FormWrapper = styled.form`
  width: 100%;
  
  @media (max-width: 767px) {
    margin-top: 40px;
  }
  
  .contact-input {
    margin-bottom: 40px;
    
    @media (max-width: 1210px) {
      .label {
        font-size: 16px;
      }
    }
    
    @media (max-width: 575px) {
      .label {
        font-size: 14px;
      }
    }
  }
  
  .contact-submit {
    margin-top: 34px;
  }
  
  .double {
    display: flex;
    
    @media (max-width: 380px) {
      flex-direction: column;
    }
    
    .mr-input {
      margin-right: 40px;
      
      @media (max-width: 1210px) {
        margin-right: 20px;
      }
      
      @media (max-width: 380px) {
        margin-right: 0;
      }
    }
  }
`

export {
  FormWrapper
}