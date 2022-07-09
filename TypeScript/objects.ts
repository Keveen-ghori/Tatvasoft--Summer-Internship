let employee: {
    readonly id: number, // Preventing Modifying Property
    name?: string,
    retrieve: (date:Date) => void
} = 
    {id: 1, 
        retrieve: (date:Date) => {
                console.log(date);
    }};

    
    employee.name = 'Kevin';
// employee.id = 0; return error
