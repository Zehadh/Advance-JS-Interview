const array=[
    {id : 10, name : 'Shabaj'},
    {id : 16, name : 'Mojahid'},
    {id : 17, name : 'Ashik'},
    {id : 28, name : 'Plabon'}
]

const result = array.map(a => a.name);
console.log(result);

const result1 = array.filter(a => a.id>15);
console.log(result1);

const result2 = array.find(a => a.id>15);
console.log(result2);