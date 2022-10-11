import { FriendListItem } from "./FriendListItem"
import { Profiled } from './Profile.styled'
import { Friendlist } from "./FriedList.styled"
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
        <Profiled>
        <Friendlist>{friends.map(friend => (
            <FriendListItem key={friend.id} friends={friend} isOnline={friend.isOnline} />
        ))}
            </Friendlist>
            </Profiled>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        })
    ),
};