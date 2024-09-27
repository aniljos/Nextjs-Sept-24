'use client';

type CustomerErrorProps = {
    error: Error
}

export default function CustomerError(props: CustomerErrorProps){
    return (
        <div className="alert alert-danger">
            There was an error processing the request
            <p>{props.error.message}</p>
        </div>
    )
}