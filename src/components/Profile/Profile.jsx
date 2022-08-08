import PropTypes from 'prop-types';

import { FaMapMarkerAlt, FaUserAlt } from 'react-icons/fa';
// import { FcBusinessman, FcContacts } from 'react-icons/fc';
import { MdOutlineAlternateEmail } from 'react-icons/md';

// import { iconSize } from '../../constants'; //? OLD, before creating the file jsconfig.json
import { iconSize } from 'constants';

// import defaultImage from '../../components/default.jpg'; //? OLD, before creating the file jsconfig.json
import defaultImage from 'components/default.jpg'; 

// import css from './Profile.module.css' //? OLD, before creating the file jsconfig.json
// import css from 'components/Profile/Profile.module.css' //todo = старый вариант импорта стилей
//! НОВЫЙ вариант импорта стилей
import { Profiles, Description, Avatar, Name, Tag, Location, Stats, Item, Label, Quantity } from 'components/Profile/Profile.styled';

// import { Profiles } from 'components/Profile/Profile.styled'; 
// import { Description } from 'components/Profile/Profile.styled'; 
// import { Avatar } from 'components/Profile/Profile.styled';
// import { Name } from 'components/Profile/Profile.styled';
// import { Tag } from 'components/Profile/Profile.styled';
// import { Location } from 'components/Profile/Profile.styled';
// import { Stats } from 'components/Profile/Profile.styled';
// import { Item } from 'components/Profile/Profile.styled';
// import { Label } from 'components/Profile/Profile.styled';
// import { Quantity } from 'components/Profile/Profile.styled';



//! +++++++++++++++ НОВЫЙ вариант импорта стилей с Profile.styled.jsx ++++++++++++++++++
export function Profile(props) {
  // console.log(props); //!
  const {
    avatar = defaultImage,
    username = "не известно",
    tag,
    location,
    followers,
    views,
    likes
  } = props
  return (
    <Profiles>
      <Description>
        <Avatar
            src={avatar}
            alt="User avatar"
            width="240"
        />
        <Name>
          <FaUserAlt size={iconSize.sm} />
          {username}
        </Name>
        <Tag>
          <MdOutlineAlternateEmail size={iconSize.md} />
          {tag}
        </Tag>
        <Location>
          <FaMapMarkerAlt size={iconSize.sm} />
          {location}
        </Location>
      </Description>

      <Stats>
        <Item>
          <Label>
            Followers
          </Label>
          <Quantity>
            {followers}
          </Quantity>
        </Item>
        <Item>
          <Label>
            Views
          </Label>
          <Quantity>
            {views}
          </Quantity>
        </Item>
        <Item>
          <Label>
            Likes
          </Label>
          <Quantity>
            {likes}
          </Quantity>
        </Item>
      </Stats>
    </Profiles>
  );
};


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

//todo  ---- старый вариант импорта стилей c Profile.module.css ----------
// export function Profile(props) {
//   // console.log(props); //!
//   const {
//     avatar = defaultImage,
//     username = "не известно",
//     tag,
//     location,
//     followers,
//     views,
//     likes
//   } = props
//   return (
//     <div className={css.profile}>
//       <div className={css.description}>
//         <img
//           src={avatar}
//           alt="User avatar"
//           width="240"
//           className={css.avatar}
//         />
//         <p className={css.name}><FaUserAlt className={css.icon} size={iconSize.sm} />{username}</p>
//         <p className={css.tag}><MdOutlineAlternateEmail  className={css.icon} size={iconSize.md} />{tag}</p>
//         <p className={css.location}><FaMapMarkerAlt className={css.icon} size={iconSize.sm} />{location}</p>
//       </div>

      
//       <ul className={css.stats}>
//         <li className={css.item}>
//           <Label>Followers</Label>
//           <Quantity>{followers}</Quantity>
//         </li>
//         <li className={css.item}>
//           <Label>Views</Label>
//           <Quantity>{views}</Quantity>
//         </li>
//         <li className={css.item}>
//           <Label>Likes</Label>
//           <Quantity>{likes}</Quantity>
//         </li>
//       </ul>
//     </div>
//   );
// };
//todo  ________________________________________________________



