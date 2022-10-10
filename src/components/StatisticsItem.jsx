import { Statitem } from "./Statistics.styled"
import { Label, Quantity } from "./Profile.styled";
export const StatisticsItem = ({ stats: {id, label, percentage} }) => {
    return (
        <Statitem key={id}>
                    <Label>{label}</Label>
                    <Quantity>{percentage}</Quantity>
                </Statitem>
    )
}

