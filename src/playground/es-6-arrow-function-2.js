const add = (a,b) =>{
    // console.log(arguments);
    
    return a+b;
};
console.log(add(55,1,1001));

const user ={
    name:'Armin',
    cities:['Tabriz','Tehran','Karaj'],
    printPlacesLived(){
        return this.cities.map((city) =>this.name + ' has lived ' + city);
    }
};
console.log(user.printPlacesLived());
 


const multiplier ={
numbers : [10,20,30],
multiplyBy : 3,
multiply(){
    return this.numbers.map((number) =>  number * this.multiplyBy);
}

};
console.log(multiplier.multiply());
