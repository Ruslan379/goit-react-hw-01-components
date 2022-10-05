import user from 'user.json'
import data from 'data.json'
import friends from 'friends.json'
import transactions from 'transactions.json'


import { Profile } from 'components/Profile/Profile.jsx';
import { Statistics } from 'components/Statistics/Statistics.jsx';
import { FriendList } from 'components/FriendList/FriendList.jsx';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory.jsx';


import { Container } from 'components/App/App.styled'; 



export default function App() {
  //! 2-й ВАРИАНТ: Передача пропсов с дестуктуризацией:
  const {
    username,
    tag,
    location,
    avatar,
    stats: {
    followers,
    views,
    likes
    } } = user;
  
  return (
    <Container>
      <Profile
        //! 1-й ВАРИАНТ: Передача пропсов без дестуктуризации:
        // username={user.username}
        // tag={user.tag}
        // location={user.location}
        // avatar={user.avatar}
        // followers={user.stats.followers}
        // views={user.stats.views}
        // likes={user.stats.likes}

        //! 2-й ВАРИАНТ: Передача пропсов с дестуктуризацией:
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}

        //! 3-й ВАРИАНТ: Передача пропсов одним объектом:
        // userArr={user}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList title="FRIEND LIST" friends={friends} />
      <TransactionHistory title="TRANSACTION HISTORY" items={transactions} />
    </Container>
  );
};



