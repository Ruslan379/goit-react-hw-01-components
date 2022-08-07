import PropTypes from 'prop-types';

import css from './FriendList.module.css'



export function FriendList({ title, friends = [] }) {
    return (
        <section className={css.friendList}>
        {title && <h2>{title}</h2>}

        <ul className={css.statList}>
            {friends.map(friend => (
                <li key={friend.id} className={css.item} style={{сolor: (friend.isOnline ? "#b30000" : "#009100"), backgroundColor: (friend.isOnline ? "#009100" : "#b30000")}}>
                    <span className={css.status} style={{сolor: (friend.isOnline ? "#b30000" : "#009100")}}>{friend.isOnline ? 'On' : 'Off'}</span>
                    <img
                        className={css.avatar}
                        src={friend.avatar}
                        alt="User avatar"
                        width="48"
                    />
                    <p className={css.name} style={{сolor: (friend.isOnline ? "#b30000" : "#009100")}}>{friend.name}</p>
                </li>
            ))}
            </ul>
        </section>
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
    title: PropTypes.string
};



