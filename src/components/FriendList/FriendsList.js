import React from 'react';
import FriendsListItem from './FriendsListItem';
import PropTypes from 'prop-types';
import styles from './FriendsList.module.css';


const FriendList = ( { friends } ) => {
    return <>
        <ul className={styles.friendList}>
            {friends.map((el) => {
                const { id, name, avatar, isOnline } = el;
            
                return <FriendsListItem
                    key={id}
                    name={name}
                    avatar={avatar}
                    isOnline={isOnline}
                    className={styles.friendsListItem} />
            })}
        </ul>
    </>
}

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }),),
}