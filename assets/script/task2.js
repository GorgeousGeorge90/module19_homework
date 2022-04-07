// the second task 

const f2 = (obj, name) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(name)) {
            return true
        } else {
            return false
        }
    }
}

// example

const person = {
    name: 'Alex',
    job: 'plumber',
}


console.table({ person });
console.log(`Does this person have job ? ${f2(person, 'job')}`);
console.log(`Does this person have enemies ? ${f2(person, 'enemies')}`);