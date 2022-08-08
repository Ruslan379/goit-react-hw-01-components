import PropTypes from 'prop-types';

// import css from './FriendList.module.css' //? OLD, before creating the file jsconfig.json
// import css from 'components/FriendList/FriendList.module.css' //todo = старый вариант импорта стилей
//! НОВЫЙ вариант импорта стилей
import { FriendsList } from 'components/FriendList/FriendList.styled'; 
import { StatList } from 'components/FriendList/FriendList.styled'; 
import { Item } from 'components/FriendList/FriendList.styled'; 
import { Status } from 'components/FriendList/FriendList.styled'; 
import { Avatar } from 'components/FriendList/FriendList.styled';
import { Name } from 'components/FriendList/FriendList.styled';



//! +++++++++++++++ НОВЫЙ вариант импорта стилей с FriendList.styled.jsx ++++++++++++++++++
export function FriendList({ title, friends = [] }) {
    return (
        <FriendsList>
        {title && <h2>{title}</h2>}

        <StatList>
            {friends.map(friend => (
                <Item friendIsOnline={friend.isOnline}
                    key={friend.id} 
                    // style={{ сolor: (friend.isOnline ? "" : "#009100"), backgroundColor: (friend.isOnline ? "#009100" : "#b30000") }}
                >
                    <Status friendIsOnlineStatus={friend.isOnline}
                        style={{ сolor: (friend.isOnline ? "#b30000" : "#009100") }}
                    >
                        {friend.isOnline ? 'On' : 'Off'}
                    </Status>
                    <Avatar
                        src={friend.avatar}
                        alt="User avatar"
                        width="48"
                    />
                    <Name friendIsOnlineName={friend.isOnline}
                        // style={{ сolor: (friend.isOnline ? "#b30000" : "#009100") }}
                    >
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




//todo  ---- старый вариант импорта стилей c FriendList.module.css ----------
// export function FriendList({ title, friends = [] }) {
//     return (
//         <section className={css.friendList}>
//         {title && <h2>{title}</h2>}

//         <ul className={css.statList}>
//             {friends.map(friend => (
//                 <li
//                     className={css.item}
//                     key={friend.id} 
//                     style={{ сolor: (friend.isOnline ? "#b30000" : "#009100"), backgroundColor: (friend.isOnline ? "#009100" : "#b30000") }}
//                 >
//                     <span className={css.status}
//                         style={{ сolor: (friend.isOnline ? "#b30000" : "#009100") }}>{friend.isOnline ? 'On' : 'Off'}
//                     </span>
//                     <img
//                         className={css.avatar}
//                         src={friend.avatar}
//                         alt="User avatar"
//                         width="48"
//                     />
//                     <p className={css.name}
//                         style={{ сolor: (friend.isOnline ? "#b30000" : "#009100") }}
//                     >
//                         {friend.name}
//                     </p>
//                 </li>
//             ))}
//             </ul>
//         </section>
//     );
// };

