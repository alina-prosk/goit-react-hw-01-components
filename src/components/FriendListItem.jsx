
import {Frienditem, Avatar, Name, Status} from "./FriedList.styled"
import PropTypes from 'prop-types';

export const FriendListItem = ({ friends: { avatar, name, isOnline} }) => {
    return (
        <Frienditem>
    <Status isOnline={isOnline}></Status>
    <Avatar  src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </Frienditem>
        
    )
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        })
    ),
};

/* <li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li> */