function A(persons, name) {
    const person = persons.find(person => person.name.toLowerCase() === name.toLowerCase());
    if (!person) {
        return "Bilet al.";
    }
    else {
        if (person && person.age < 18) {
            return `${person.name} böyəl gəl.`;
        } else {
            return `${person.name} buyur.`;
        }
    }
}

let persons = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
];

console.log(A(persons, "mike")); 
console.log( A(persons, "cheryl"));
console.log(A(persons, "Ali")); 
