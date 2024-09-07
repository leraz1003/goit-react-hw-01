import clsx from "clsx";
import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={clsx(css.card)}>
      <div className={clsx(css.wrap)}>
        <div className={clsx(css.imgWrap)}>
          <img src={image} alt="User avatar" className={clsx(css.avatar)} />
        </div>
        <p className={clsx(css.name)}>{name}</p>
        <p className={clsx(css.info)}>@{tag}</p>
        <p className={clsx(css.info)}>{location}</p>
      </div>

      <ul className={clsx(css.list)}>
        <li className={clsx(css.item)}>
          <span>Followers</span>
          <span className={clsx(css.quantity)}>{stats.followers}</span>
        </li>
        <li className={clsx(css.item)}>
          <span>Views</span>
          <span className={clsx(css.quantity)}>{stats.views}</span>
        </li>
        <li className={clsx(css.item)}>
          <span>Likes</span>
          <span className={clsx(css.quantity)}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
