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

//3rd type
const result=number.map(x=>x*x);
console.log(result)
