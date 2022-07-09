type personProps = {
    name: {
        first_Name: string,
        last_Name: string
    }
}

export const Person = (props: personProps) => {
    return (
        <div>
            {props.name.first_Name} {props.name.last_Name}
        </div>
    )
}