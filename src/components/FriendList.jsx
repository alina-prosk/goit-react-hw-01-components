import { FriendListItem } from "./FriendListItem"
import { Profiled } from './Profile.styled'
import { Friendlist } from "./FriedList.styled"

export const FriendList = ({ friends }) => {
    return (
        <Profiled>
        <Friendlist>{friends.map(friends => (
            <FriendListItem key={friends.id} friends={friends} />
        ))}
            </Friendlist>
            </Profiled>
    )
}