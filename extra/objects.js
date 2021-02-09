const object1={
    id: 1,
    name: "user1",
    subject: "maths"

};
const object2={
    id:2,
    age : 28,
    subject:"science"
};
// Assign keyword : assigns all elements to new objects and changes the data of 1st object with 1st object+2nd object merged. 
let child = Object.assign(object1,object2);
console.log(child);
console.log(object1.id===child.id);

//Create keyword: clones the Parent object but does not change any properties of Parent object.
const childCreate = Object.create(object2);
childCreate.id = 3;
childCreate.name = "user3";
console.log(childCreate);


// Define properties:Changes current properties or if there is no property with that key it creates new.
Object.defineProperties(object1, {
    age: {
      value: 31,
      writable : false
    },
    subject: {
        value:"Hindi"
    } 
});
console.log(object1, object1.age);


// Define property:Changes current property by the given value if not present create new.
Object.defineProperty(object2, 'age', {value: 31,writable : false} );
console.log(object2);


// Entries Keyword: It returns an array of key value pair per iteration in a for loop and stores into the name given
for (let [name1, name2] of Object.entries(object1)) {
    console.log(`${name1}: ${name2}`);
  }


// Freeze keyword: It freezes the object and a frozen object cannot be changed.
Object.freeze(childCreate);
childCreate.id = 4;
console.log(childCreate.id);


// From entries: It converts an array or a map into an object.
let arr = [ ['id', '7'], ['age', '29']];
const object3 = Object.fromEntries(arr);
console.log(object3);


// Object.is method: It returns whether the first argument is equals to second argument which can be any string, object, array.
let comp = Object.is(object1,object2);
console.log(comp);


// prevent extensions: It makes an object non-inheritable.
Object.preventExtensions(object3);
console.log(Object.isExtensible(object3));


// Object.keys: It returns all the keys in the object as an array.
console.log(Object.keys(object1));
