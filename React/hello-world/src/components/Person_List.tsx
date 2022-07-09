type personListProps = {
    name: {
        first_Name: string
        last_Name: string
    }[]

}

export const PersonLists = (props: personListProps) => {
    return (
        <div>
            {props.name.map((name) => {
                return(
                <h2 key = {name.first_Name}> {name.first_Name} {name.last_Name}</h2>
                )
            })}
        </div>
    )
}