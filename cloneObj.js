//Obj clonning
//Obj Ref,Obj clonning assign(),{...x},JSON
//
const obj1 = {
    person : 'Techinee',
    Weight : 43
}

//const obj2 = obj1;
const obj2 = Object.assign({},obj1);
//const obj2 = {...obj1};
obj2.Weight=45;
console.log(obj1);
console.log(obj2);
