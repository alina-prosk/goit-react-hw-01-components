import { FriendListItem } from "./FriendListItem"
export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">{friends.map(friends => (
            <FriendListItem key={friends.id} friends={friends} />
        ))}
</ul>
    )
}