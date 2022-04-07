// the first task

const f1 = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Own properties of obj are ${key}:'${obj[key]}'`)
        }
    }
}


//example

const man = {
    gender: 'male'
}

const person = Object.create(man);
person.job = 'doctor';


console.group('man');
console.table({ man });
console.groupEnd();

console.group('person');
console.table({ person });
console.log(Object.getPrototypeOf(person));
console.groupEnd();

f1(person);