import PropTypes from 'prop-types';

import {

    Item,
    Status,
    Avatar,
    Name
} from 'components/FriendListItem/FriendListItem.styled';


export function FriendListItem({ avatar, name, isOnline }) {
    return (
        <Item
            friendIsOnline={isOnline ? 'On' : 'Off'}
        >
            <Status friendIsOnline={isOnline}>
                {isOnline ? 'On' : 'Off'}
            </Status>
            <Avatar
                src={avatar}
                alt={`${name} avatar`}
                width="48"
            />
            <Name friendIsOnline={isOnline}>
                {name}
            </Name>
        </Item>
    );
};



FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

