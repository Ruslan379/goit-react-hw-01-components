import PropTypes from 'prop-types';


export function FriendList({ friends = [] }) {
    return (
        <ul className="stat-list">
            {friends.map(friend => (
                <li key={friend.id}>
                    <span className="status">{friend.isOnline ? 'Online' : 'Offline'}</span>
                    <img
                        className="avatar"
                        src={friend.avatar}
                        alt="User avatar"
                        width="48"
                    />
                    <p className="name">{friend.name}</p>
                </li>
            ))}
        </ul>
    );
};


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }),
    ),
};



