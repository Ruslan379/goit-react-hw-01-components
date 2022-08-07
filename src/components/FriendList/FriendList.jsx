import PropTypes from 'prop-types';

import css from './FriendList.module.css'


export function FriendList({ title, friends = [] }) {
    return (
        <section className={css.friendList}>
        {title && <h2>{title}</h2>}

        <ul className={css.statList}>
            {friends.map(friend => (
                <li className={css.item} key={friend.id} style={{backgroundColor: (friend.isOnline ? "#009100" : "#b30000")}}>
                    <span className={css.status}>{friend.isOnline ? 'On' : 'Off'}</span>
                    <img
                        className={css.avatar}
                        src={friend.avatar}
                        alt="User avatar"
                        width="48"
                    />
                    <p className={css.name}>{friend.name}</p>
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
};



