type statusProps = {
    status: 'loading' | 'Fetched' | 'error'
}

export const Status = (props:statusProps) => {
    let message;

    if (props.status === 'loading')
        message = 'Loading...'
    else if (props.status === 'Fetched')
        // eslint-disable-next-line no-implied-eval
        setInterval(message = 'Fetched', 2000 )
        

    else 
         message = 'Error';
    return (
        <div>
            <h2>Data is {message}</h2>
        </div>
    )
}