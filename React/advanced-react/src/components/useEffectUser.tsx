import { useEffect } from "react"
import { useState } from "react"


function UseEffectUser() {

    const [resourceType, resourceTypeSet] = useState<string>('posts')

     useEffect(() => {
        // setTimeout(() => {
        //     console.log('Data is Loaded')
        // }, 2000)
        // console.log('render');
        // fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        //     .then(response => response.json())
        //     .then(json => console.log(json))

        console.log('Resource Changed...')

        return () => {
                console.log('Resource Erased...')
        }
        
     }, [resourceType])

    return (
        <div>
            <button onClick={() => resourceTypeSet('posts')}>Posts</button>
            <button onClick={() => resourceTypeSet('user')}>Users</button>
            <button onClick={() => resourceTypeSet('comment')}>Comments</button>
            <div>
                <h2>{resourceType}</h2>
            </div>
        </div>
        
    )

}

export default UseEffectUser;
export {}