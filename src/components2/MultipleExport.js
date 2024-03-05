const var1 = 'value1 from default export';
const var2 = 'value2'

function myName() {

    return (
        <p>Hello World</p>
    )
}

function myName2() {
    let var3 = 'value3'
    return var3
}


export default var1;
export { var2, myName, myName2 };