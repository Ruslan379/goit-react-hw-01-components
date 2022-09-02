import PropTypes from 'prop-types';

import {
    FriendsList,
    StatList,
    Item,
    Status,
    Avatar,
    Name
} from 'components/FriendList/FriendList.styled';


export function FriendList({ title, friends = [] }) {
    return (
        <FriendsList>
            {title && <h2>{title}</h2>}
        <StatList>
            {friends.map(friend => (
                <Item
                    friendIsOnline={friend.isOnline ? 'On' : 'Off'}
                    key={friend.id} 
                >
                    <Status friendIsOnline={friend.isOnline}>
                        {friend.isOnline ? 'On' : 'Off'}
                    </Status>
                    <Avatar
                        src={friend.avatar}
                        alt="User avatar"
                        width="48"
                    />
                    <Name friendIsOnline={friend.isOnline}>
                        {friend.name}
                    </Name>
                </Item>
            ))}
        </StatList>
        </FriendsList>
    );
};



FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }),
    ),
    title: PropTypes.string
};

