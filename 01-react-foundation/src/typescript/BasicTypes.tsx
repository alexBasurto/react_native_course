// Functional component

export const BasicTypes = () => {
    const name:string = 'Alex';
    const age:number = 34;
    const isActive:boolean = true;
    const powers:string[] = ["React", "Angular"];

    //powers.push(35);
    
    return (
        <>
            <h3>Tipos básicos</h3>
            {name} {age} {isActive ? 'true' : 'false'}
            <br/>
            {powers.join(', ')}
        </>
    )
}