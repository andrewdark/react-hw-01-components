import css from './Statistics.module.css';
export const Statistics = props => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css.statList}>
        {props.data.map(elem => {
          return (
            <li
              id={elem.id}
              className={css.item}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={css.label}>{elem.label}</span> <br />
              <span className={css.percentage}>{elem.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
