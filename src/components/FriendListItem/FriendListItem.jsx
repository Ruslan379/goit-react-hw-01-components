import PropTypes from 'prop-types';

import {
    // FriendsList,
    // StatList,
    Item,
    Status,
    Avatar,
    Name
} from 'components/FriendListItem/FriendListItem.styled';


export function FriendListItem({ avatar, name, isOnline }) {
    return (
        // <FriendsList>
        //     {title && <h2>{title}</h2>}
        // <StatList>
        //     {friends.map(friend => (
                <Item
                    friendIsOnline={isOnline ? 'On' : 'Off'}
                    // key={friend.id} 
                >
                    <Status friendIsOnline={isOnline}>
                        {isOnline ? 'On' : 'Off'}
                    </Status>
                    <Avatar
                        src={avatar}
                        alt={name}
                        width="48"
                    />
                    <Name friendIsOnline={isOnline}>
                        {name}
                    </Name>
                </Item>
            // ))}
        // </StatList>
        // </FriendsList>
    );
};



FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

