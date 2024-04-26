function A(persons, name) {
    const person = persons.find(person => person.name.toLowerCase() === name.toLowerCase());
    if (!person) {
        console.log("Bilet al.");
        return;
    }

    if (person.age < 18) {
        console.log(`${person.name} böyəl gəl.`);
    } else {
        console.log(`${person.name} buyur.`);
    }
}

let persons = [
    {
    name: "Mike",
    age: 12,
    gender: "male"
    },{
    name: "Madeline",
    age: 80,
    gender: "female"
    },{
    name: "Cheryl",
    age: 22,
    gender: "female"
    },{
    name: "Sam",
    age: 30,
    gender: "male"
    },{
    name: "Suzy",
    age: 4,
    gender: "female"
    }
    ];
    
A(persons, "mike");
A(persons, "cheryl"); 
A(persons, "Ali");
