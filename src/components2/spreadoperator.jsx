const arr1=['hello','welcome','to']
const arr2=[...arr1,'react','js']  //<------------arr2=[hello,welcome,to,react,js]
console.log(arr2)

var games=['cod','csgo','igi','gta']
var [firstgame,...restgames]=games   //<------firstgame=cod,rest=csgo..



const fullName={
    fname:'K Rajeswar',
    lname:'Rao'
}

const biodata={
    id:1,
    ...fullName,
    age:26,
    gender:'male'
}