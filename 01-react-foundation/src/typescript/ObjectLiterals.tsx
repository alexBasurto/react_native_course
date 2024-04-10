interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    isAlive?: boolean;
}

interface Address {
    country: string;
    houseNo: number;
}


export const ObjectLiterals = () => {

    const person:Person = {
        firstName: "John",
        lastName: "Doe",
        isAlive: true,
        age: 25,
        address: {
            country: 'Canada',
            houseNo: 365
        }
    }

    


    return (
        <>
            <h3>Objetos literales</h3>
            <pre>
                {JSON.stringify(person, null, 2)}

            </pre>
        </>
    )
}