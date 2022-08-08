import styled from '@emotion/styled';

export const FriendsList = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 300px;
    padding: 40px;
    margin-right: 20px;

    /* text-transform: uppercase; */

    border: 2px solid rgb(61, 61, 61);

    border-radius: 20px;
    box-shadow: 10px 10px 14px -3px rgba(0, 0, 0, 0.43);
    background-color: rgb(254, 255, 221);
`;


export const StatList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 0;

    list-style-type: none;
    text-align: center; 

    border: 1px solid rgb(0, 0, 0);
    border-right: 2px solid rgb(0, 0, 0);
    border-radius: 2px;
    box-shadow: 10px 10px 14px -3px rgba(0, 0, 0, 0.43);
`;


export const Item = styled.li`
    display: flex;
    align-items: center;

    padding: 10px 36px;
    
    border-right: 1px solid rgb(0, 0, 0);
    border-bottom: 2px solid rgb(0, 0, 0);
    // background-color: rgb(199, 199, 199); 

    background-color: ${({ friendIsOnline }) => {
        switch (friendIsOnline) {
            case true:
                return "#009100";
            case false:
                return "#b30000";
        }
    }
    };
`;


export const Status = styled.span`
    margin-right: 15px;

    font-size: 14px;
    line-height: 32px;
    letter-spacing: 0.5px;

    // color: rgb(255, 50, 0);

    color: ${({ friendIsOnline }) => {
        switch (friendIsOnline) {
            case true:
                return "#fff000";
            case false:
                return "#38c500";
        }
    }
    };
`;

export const Avatar = styled.img`
    border: 1px solid rgb(61, 61, 61);
    padding: 15px;
    border-radius: 50%;
    background-color: rgb(205, 232, 255);
    box-shadow: 10px 10px 14px -3px rgba(0, 0, 0, 0.43);
`;


export const Name = styled.p`
    margin-left: 28px;

    font-size: 24px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: 0.5px;

    // color: rgb(255, 240, 0);
    color: ${({ friendIsOnline }) => {
        switch (friendIsOnline) {
            case true:
                return "#fff000";
            case false:
                return "#38c500";
        }
    }
    };
`;