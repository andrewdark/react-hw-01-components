import css from './Profile.module.css';
export const Profile = props => {
  return (
    <div className={css.profile}>
      <img className={css.photo} src={props.usr.avatar} alt="avatar" />
      <h1>{props.usr.username}</h1>
      <p className={css.txtGray}>@{props.usr.tag}</p>
      <p className={css.txtGray}>{props.usr.location}</p>

      <ul className={css.stats}>
        {Object.keys(props.usr.stats).map((key, index) => {
          return (
            <li key={key} className={css.items}>
              <div className={css.txtGray}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </div>
              <div>
                <b>{props.usr.stats[key]}</b>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
