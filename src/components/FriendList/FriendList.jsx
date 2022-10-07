import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem.jsx';

import {
    FriendsList,
    StatList
} from 'components/FriendList/FriendList.styled';


export function FriendList({ title, friends = [] }) {
    return (
        <FriendsList>
            {title && <h2>{title}</h2>}
        <StatList>
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
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

