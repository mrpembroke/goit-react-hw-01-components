import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
    return <>
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>Upload stats</h2>}

            <ul className={styles.statList}>
                {stats.map((el) => {
                    const {id, label, percentage} = el;

                    return (
                        <li className={styles.item} key={id} style={{backgroundColor: `rgba( ${random()} , ${random()} , ${random()} )`}}>
                            <span className={styles.label}>{label} </span>
                            <span className={styles.percentage}>{percentage}%</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    </>
}

function random() {
  return Math.floor(Math.random() * 256);
}

export default Statistics;

Statistics.defaultProps = {
    title: "default title",
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),),
}

