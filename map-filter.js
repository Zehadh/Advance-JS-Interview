//types of solve square calculation.

const number=[1, 2, 3, 4, 5, 6];

//1st type
const array=[];

for(i=0;i<number.length;i++){
    const element=number[i];
    const result=element*element;
    array.push(result);
}
console.log(array);

//2nd type
const result=number.map(function(x){
    return x*x;
})
console.log(result);

//filter
const result1=number.filter(x => x >3);
console.log(result1);

//find
const result1=number.find(x => x >3);
console.log(result1);
