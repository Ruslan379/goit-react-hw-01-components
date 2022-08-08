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

export const Avatar = styled.div`
    border: 1px solid rgb(61, 61, 61);
        padding: 15px;
        border-radius: 30%;
        background-color: rgb(205, 232, 255);
        box-shadow: 10px 10px 14px -3px rgba(0, 0, 0, 0.43);
`;
