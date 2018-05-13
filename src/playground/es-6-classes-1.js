class Person{
    // arguments is goiing to be typed in (arguments)
    constructor(name = 'Anonymouse',age=0){
        this.age=age;
        this.name=name;
    }
    getGretting(){
        return 'Hi I am ' + this.name;
    }
    getDescription(){
        return this.name + ' is ' + this.age + ' years old';
    }


}

class Student extends Person{
    constructor(name,age,major='Undecided'){
        super (name,age)
        this.major = major;
    }
    
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description += ' Their Major is ' + this.major;
        }
        return description;
    }

    
}
class Traveler extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation=homeLocation;
    }
    
    getGretting(){
        let gretting = super.getGretting();
        if(this.homeLocation){
            gretting+= ' Im visiting from ' +this.homeLocation;
        }
        return gretting;
    }
    
}

const me = new Traveler('Armin Khodaei',26,'Tabriz');
console.log(me.getGretting());

const other = new Traveler();
console.log(other.getGretting());