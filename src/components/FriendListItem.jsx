export const FriendListItem = ({ friends: {avatar, name, isOnline} }) => {
    return (
        <li>
            <span>{isOnline}</span>
    <img  src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </li>
        
    )
}


/* <li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li> */