function greet(name: string | null | undefined) {
    if (name)
       console.log(name.toUpperCase());
    else
       console.log('Hola!');
}

greet(null);
greet(undefined);
greet('Kevin');

type customer ={
    birthrate: Date
};

function getCustomer(id: number): customer | null {
    return id === 0 ? null : { birthrate: new Date()};
}



getCustomer(0)?.birthrate;