type headingProps = {
    children: string
}

export const Heading = (props: headingProps) => {
    return(
        <div>
            <h2>{props.children}</h2>
        </div>
    )
}