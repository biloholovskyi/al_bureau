import styled from 'styled-components';

const FooterWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 40px;
  min-height: 224px;

  .footer_item {
    flex: 2;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    @media (max-width: 767px) {
      width: 100%;
      flex: 100%;
      min-height: unset;
      margin-bottom: 40px;
    }

    &--left {
      
    }

    .political {
      font-size: 16px;
      text-decoration: underline;
      margin-top: 12px;
      color: #fff;
      white-space: nowrap;
    }

    .logo {
      width: 124px;
      height: 88px;
      object-fit: contain;
      object-position: left center;
      
      @media (max-width: 767px) {
        width: 60px;
        height: auto;
      }
    }

    p {
      font-family: Pragmatica, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
      color: rgba(255, 255, 255, 0.64);
      @media (max-width: 767px) {
        display: none;
      }
    }

    .top,
    .bottom {
      max-width: 290px;

      .title {
        font-family: Pragmatica, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        color: #FFFFFF;
      }

      a {
        font-family: Pragmatica;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        color: #FFFFFF;
        text-decoration: none;
        display: block;
      }
    }

    .top {
      .title {
        margin-bottom: 8px;
      }

      @media (max-width: 767px) {
        margin-bottom: 40px;
      }
    }

    .bottom {
      a {
        margin-bottom: 8px;
      }
    }
  }

  & .footer_item:nth-child(2) {
    flex: 3;
  }

  & .footer_item:last-child {
    flex: 1;
    justify-content: space-between;

    .social_links {
      width: 100%;
      display: flex;
      align-items: center;
      position: relative;
      justify-content: flex-end;
      
      @media (max-width: 767px) {
        margin-top: 40px;
        justify-content: flex-start;
      }

      .social_link {
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        width: 56px;
        height: 56px;
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 28px;
          height: 28px;
          object-fit: contain;
        }
      }

      & .social_link:last-child {
        margin-right: 0;
      }

      @media (max-width: 767px) {
        margin-bottom: 40px;
      }
    }

    .mobile_block {
      display: none;
      font-family: Pragmatica, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
      color: rgba(255, 255, 255, 0.64);
      width: 100%;
      @media (max-width: 767px) {
        display: block;
      }
    }

    @media (max-width: 767px) {
      margin-bottom: 0;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 44px 20px 36px;
  }
`

export {
  FooterWrap
}

