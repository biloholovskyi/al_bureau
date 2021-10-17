import styled from "styled-components";

const Pallet = styled.div`
  padding: 80px 0;
  width: 100%;
  display: flex;

  .blocks {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .item {
      width: 274px;
      height: 274px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(16px);
      margin-right: 10px;
      margin-bottom: 39px;
      padding: 32px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      .number {
        font-family: Pragmatica Extended, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 48px;
        letter-spacing: -0.02em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.1);
      }

      .name {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;
        color: #FFFFFF;
      }

      @media (max-width: 1099px) {
        width: 250px;
        height: 250px;
      }
      
      @media (max-width: 600px) {
        width: 160px;
        height: 160px;
        padding: 10px;
        margin-right: 0;
        margin-bottom: 20px;
        
        .number {
          font-size: 18px;
          line-height: 24px;
        }

        .name {
          font-size: 12px;
          line-height: 22px;
        }
      }
      
      @media (max-width: 378px) {
        width: 100%;
      }
    }
  }

  @media (max-width: 767px) {
    padding: 40px 0 60px;
  }
`

export {
  Pallet
}