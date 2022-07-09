type GreetProps = {
    student_Id: number;
    name: string;
    Email_Id: string;
    is_Pass: boolean;
    is_login?: boolean;
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>Welcome {props.name}!</h2>
            <h3>Your Student Id is:  {props.student_Id}.</h3>
            <h3>Your Email Id is:  {props.Email_Id}.</h3>
            <h3>Pass?:  {props.is_Pass ? 'Yes' : 'Failed! Sorry Try Again...' }.</h3>
            <h3>Login:  {props.is_login}.</h3>
        </div>
    )
}