let sister = {
    name:"Barakat",
    age:"18 years old",
    nameOfInstitution: "Qwara State University"
}

console.log(sister);
console.log(sister.name);
console.log(sister.age);
console.log(sister.nameOfInstitution);

/* Different Approach */
console.log(sister['name']);
console.log(sister['age']);
console.log(sister['nameOfInstitution']);

let institution = 'nameOfInstitution'
console.log(sister[institution]);
