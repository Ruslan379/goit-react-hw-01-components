import user from '../../user.json'
import data from '../../data.json'
import friends from '../../friends.json'
import transactions from '../../transactions.json'

import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

import css from './App.module.css'

// import { Container } from './App.styled';


//! +++++++++++++++++++++++++++++++++++++
export function App() {
  return (
    <div className={css.app}>
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

      <TransactionHistory items={transactions} />

    </div>
  );
};






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