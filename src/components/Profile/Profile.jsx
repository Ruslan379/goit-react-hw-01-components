import PropTypes from 'prop-types';

import { FaMapMarkerAlt, FaUserAlt } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';

import { iconSize } from 'constants';

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




export function Profile({
    avatar = defaultImage,
    username = "не известно",
    tag,
    location,
    followers,
    views,
    likes
  }) {
  
  // const {
  //   avatar = defaultImage,
  //   username = "не известно",
  //   tag,
  //   location,
  //   followers,
  //   views,
  //   likes
  // } = props;

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
