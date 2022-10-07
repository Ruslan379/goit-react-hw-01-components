import PropTypes from 'prop-types';

import { FaMapMarkerAlt, FaUserAlt } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';

import { iconSize } from 'configs';

import defaultImage from 'components/default.jpg'; 

import {
  Profiles,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Item,
  Label,
  Quantity
} from 'components/Profile/Profile.styled';


//! 1-й ВАРИАНТ: Передача пропсов без дестуктуризации:
// export function Profile(props) {
// const {
//   avatar = defaultImage,
//   username = "не известно",
//   tag,
//   location,
//   followers,
//   views,
//   likes
// } = props;

//! 2-й ВАРИАНТ: Передача пропсов с дестуктуризацией:
// export function Profile({
//     avatar = defaultImage,
//     username = "не известно",
//     tag,
//     location,
//     followers,
//     views,
//     likes
// }) {


//! 3-й ВАРИАНТ: Передача пропсов одним объектом с дестуктуризацией:
// export function Profile({ userArr: {
//   avatar = defaultImage,
//   username = "не известно",
//   tag,
//   location,
//   followers,
//   views,
//   likes
//   }
// }) {

  
  //! 4-й ВАРИАНТ: Передача пропсов с дестуктуризацией как в ТЗ:
  export function Profile({
      avatar = defaultImage,
      username = "не известно",
      tag,
      location,
      stats: {
        followers,
        views,
        likes
      }
  }) {


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



//! 1-й и 2-й ВАРИАНТ:
// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   followers: PropTypes.number.isRequired,
//   views: PropTypes.number.isRequired,
//   likes: PropTypes.number.isRequired,
// };


//! 3-й ВАРИАНТ:
// Profile.propTypes = {
//   userArr: PropTypes.object.isRequired,
// };


//! 4_1-й ВАРИАНТ: Передача пропсов с дестуктуризацией как в ТЗ:
// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   stats: PropTypes.object.isRequired,
// };


//! 4_2-й ВАРИАНТ: Передача пропсов с дестуктуризацией как в ТЗ:
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

  stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
};

