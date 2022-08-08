import styled from '@emotion/styled';

export const FriendsList = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: ${props => props.theme.spacing(75)};
    padding: ${props => props.theme.spacing(10)};
    margin-right: ${props => props.theme.spacing(5)};

    /* text-transform: uppercase; */

    border: ${props => `2px solid ${props.theme.colors.borderCardColor}`};
    border-radius: ${props => props.theme.spacing(10)};
    box-shadow: 10px 10px 14px -3px ${props => props.theme.colors.boxShadowCardColor};

    background-color: ${props => props.theme.colors.backgroundCardColor};
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

    background-color: ${({ friendIsOnline, theme }) => {
        switch (friendIsOnline) {
            case 'On':
                return theme.colors.backgroundOnlineColor;
            case 'Off':
                return theme.colors.backgroundOfflineColor;
            default:
                return theme.colors.backgroundOfflineColor;
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

    color: ${({ friendIsOnline, theme }) => {
        switch (friendIsOnline) {
            case true:
                return theme.colors.backgroundOnlineStatusColor;
            case false:
                return theme.colors.backgroundOfflineStatusColor;
            default:
                return theme.colors.backgroundDefaultStatusColor;
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
    color: ${({ friendIsOnline, theme  }) => {
        switch (friendIsOnline) {
            case true:
                return theme.colors.backgroundOnlineStatusColor;
            case false:
                return theme.colors.backgroundOfflineStatusColor;
            default:
                return theme.colors.backgroundDefaultStatusColor;
        }
    }
    };
`;