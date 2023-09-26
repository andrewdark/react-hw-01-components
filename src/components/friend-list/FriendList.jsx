import css from './FriendList.module.css';
import clsx from 'clsx';
export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(elem => {
        return (
          <li className={css.item} id={elem.id}>
            <span
              className={clsx(css.status, {
                [css.online]: elem.isOnline,
              })}
            ></span>
            <img
              className={css.avatar}
              src={elem.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{elem.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
