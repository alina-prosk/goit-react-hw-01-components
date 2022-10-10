
import { Frienditem } from "./FriedList.styled"
import { Avatar, Name } from "./FriedList.styled"

export const FriendListItem = ({ friends: {avatar, name, isOnline} }) => {
    return (
        <Frienditem>
            <span>{isOnline}</span>
    <Avatar  src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </Frienditem>
        
    )
}



/* <li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li> */