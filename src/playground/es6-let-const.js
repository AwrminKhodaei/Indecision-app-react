var nameVar = 'Armin';
nameVar = 'Hadi';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
console.log('nameLet',nameLet);

const nameConst = 'Jake';
console.log('nameConst',nameConst);

// BLock Scoping

const fullName = 'Armin Khodaei';
let firstName;
if (fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
    
}

console.log(firstName);
