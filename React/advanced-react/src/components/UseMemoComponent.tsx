import { useMemo, useState } from 'react'

function UseMemoComponent() {
    const [number, numberSet] = useState<number>(0)
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number])


    return (
        <div>
            <input type='number' value={number} onChange={e => numberSet(parseInt(e.target.value))}/>
            <div>{doubleNumber}</div>
        </div>
    )
}

function slowFunction(num: number) {
    for (let i=0; i<=1000; i++){}
    return num * 2

}

export default UseMemoComponent;
export {};