import React from 'react';
import PropTypes from 'prop-types';

import styles from './FriendsList.module.css';

const FriendsListItem = ( {name, avatar, isOnline }) => {
    return (
        <li className={styles.item}>
            {<span className={ isOnline ? styles.statusOn : styles.statusOff }></span>}
            {<img src={avatar} alt={name} width='50' />}
            <p className={styles.name}>{name}</p>
        </li>
    )
}

export default FriendsListItem;

FriendsListItem.prototypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,

}