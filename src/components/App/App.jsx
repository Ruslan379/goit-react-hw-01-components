import user from '../../user.json'
import data from '../../data.json'
import friends from '../../friends.json'
import transactions from '../../transactions.json'
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { Container } from './App.styled';


//! +++++++++++++++++++++++++++++++++++++
export function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics items={data} />
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