import React from 'react';
import PropTypes from 'prop-types';

const FriendsListItem = ( {name, avatar }) => {
    return (
        <li>
            {<img src={avatar} alt={name} width='50' />}
            {name}
        </li>
    )
}

export default FriendsListItem;

FriendsListItem.prototypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,

}