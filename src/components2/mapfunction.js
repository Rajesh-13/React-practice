const student=[
    {id: 1, name: 'ABC' ,degree:'BCA'},
    {id: 2, name: 'DEF' ,degree:'MCA'},
    {id: 3, name: 'GHI' ,degree:'CSE'}
]

const newData=student.map((currentvalue)=>{
    return `My name is ${currentvalue.name} , Highest degree:${currentvalue.degree},ID:${currentvalue.id}`
});

console.log(newdata)

document.getElementById('showdata').innerHTML=newdata;