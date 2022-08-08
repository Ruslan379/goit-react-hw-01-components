import styled from '@emotion/styled';

export const Profiles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 300px;
    padding: 40px;
    margin-right: 20px;
    margin-left: 20px;

    border: 2px solid rgb(61, 61, 61);
    border-radius: 20px;
    box-shadow: 10px 10px 14px -3px rgba(0, 0, 0, 0.43);

    background-color: rgb(254, 255, 221)
`;


export const Description = styled.div`
    text-align: center;
`;


export const Avatar = styled.img`
    border: 1px solid rgb(61, 61, 61);
    padding: 15px;
    border-radius: 50%;
    background-color: rgb(205, 232, 255);
    box-shadow: 10px 10px 14px -3px rgba(0, 0, 0, 0.43);
`;


export const Name = styled.p`
    margin-top: 32px;
    font-size: 32px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: 0.5px;
    /* text-transform: uppercase; */


    svg {
      margin-right: 8px;
      color: rgb(97, 97, 97);
  }
`;


export const Tag = styled.p`
    margin-top: 0;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    letter-spacing: 0.5px;
    
    color: blue;

    svg {
      margin-right: 8px;
      color: rgb(97, 97, 97);
  }
`;


export const Location = styled.p`
    margin-top: 24px;

    font-size: 20px;
    line-height: 28px;
    font-weight: 700;
    letter-spacing: 0.5px;

    color: rgb(90, 0, 0);

    svg {
      margin-right: 8px;
      color: rgb(97, 97, 97);
  }
`;

export const Stats = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    padding: 0;
    /* width: 300px; */

    list-style-type: none;
    text-align: center; 

    border: 1px solid rgb(0, 0, 0);
    border-right: 3px solid rgb(0, 0, 0);
    border-radius: 2px;
    box-shadow: 10px 10px 14px -3px rgba(0, 0, 0, 0.43);
`;

export const Item = styled.li`
    /* display: block; */
    padding: 20px;

    border-right: 1px solid rgb(0, 0, 0);
    border-bottom: 2px solid rgb(0, 0, 0);
    background-color: rgb(199, 199, 199);
`;

export const Label = styled.span`
    display: block;
    margin-top: 0;

    text-align: center;
    font-size: 16px;
    line-height: 32px;
    font-weight: 700;
    letter-spacing: 0.5px;

    color: rgb(0, 56, 0);
`;

export const Quantity = styled.span`
    /* display: block;
    text-align: center; */
    font-style: italic;

    color: rgb(138, 0, 0);
`;