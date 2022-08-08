// import user from '../../user.json' //? OLD, before creating the file jsconfig.json
import user from 'user.json'
import data from 'data.json'
import friends from 'friends.json'
import transactions from 'transactions.json'

// import { Profile } from '../Profile/Profile'; //? OLD, before creating the file jsconfig.json
import { Profile } from 'components/Profile/Profile.jsx';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

// import css from './App.module.css' //? OLD, before creating the file jsconfig.json
// import css from 'components/App/App.module.css' //todo = старый вариант импорта стилей
// import { Container } from './App.styled'; //? OLD, before creating the file jsconfig.json
import { Container } from 'components/App/App.styled'; //! НОВЫЙ вариант импорта стилей




//! +++++++++++++++ НОВЫЙ вариант импорта стилей с App.styled.jsx ++++++++++++++++++
export function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList title="FRIEND LIST" friends={friends} />
      <TransactionHistory title="TRANSACTION HISTORY" items={transactions} />
    </Container>
  );
};



//todo  ---- старый вариант импорта стилей c App.module.css ----------
// export function App() {
//   return (
//       <div className={css.app}>
//         <Profile
//           username={user.username}
//           tag={user.tag}
//           location={user.location}
//           avatar={user.avatar}
//           followers={user.stats.followers}
//           views={user.stats.views}
//           likes={user.stats.likes}
//         />

//         <Statistics title="Upload stats" stats={data} />

//         <FriendList title="FRIEND LIST" friends={friends} />

//         <TransactionHistory title="TRANSACTION HISTORY" items={transactions} />

//       </div>
//   );
// };
//todo  ________________________________________________________



//* ------------- Old -------------------
// export const App = () => {
//   return (
//     <Container>
//       <div
//         style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//         >
//         React-hw-01-components
//       </div>
//     </Container>
//   );
// };