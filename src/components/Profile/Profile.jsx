import PropTypes from 'prop-types';

import { FaMapMarkerAlt, FaUserAlt } from 'react-icons/fa';
// import { FcBusinessman, FcContacts } from 'react-icons/fc';
import { MdOutlineAlternateEmail } from 'react-icons/md';

// import { iconSize } from '../../constants'; //? OLD, before creating the file jsconfig.json
import { iconSize } from 'constants';

// import defaultImage from '../../components/default.jpg'; //? OLD, before creating the file jsconfig.json
import defaultImage from 'components/default.jpg'; 

import css from './Profile.module.css'



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
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt="User avatar"
          width="240"
          className={css.avatar}
        />
        <p className={css.name}><FaUserAlt className={css.icon} size={iconSize.sm} />{username}</p>
        <p className={css.tag}><MdOutlineAlternateEmail  className={css.icon} size={iconSize.md} />{tag}</p>
        <p className={css.location}><FaMapMarkerAlt className={css.icon} size={iconSize.sm} />{location}</p>
      </div>

      
      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
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