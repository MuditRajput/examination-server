// filter: Returns all the elements in the array as per the condition given.
const arr1 = [250,150,100,450,500];
const result = arr1.filter(arr1 => arr1 > 200);
console.log(result);


// find: Returns the first value in the array as per the condition given.
const result2 = arr1.find(name => name <150 );
console.log(result2);


// from: Returns an array of characters if string is input or can create a copy of array with iterated elements.
console.log(Array.from("author"));
console.log(Array.from([1,2,3,4],x => x*2));


// pop: Removes the last element from the array.
const name1 = ["user1" , "user2" , "user3"];
name1.pop();
console.log(name1);


// push: Adds new element in the array.
const name = ["user1" , "user2" , " user3" , "user4"];
name.push("user5");
console.log(name);


// reverse: Returns an array with reversed array elements.
const arr2 = ["1","2","3"];
const rev = arr2.reverse();
console.log(rev);


// shift: Returns and removes the first element of the array.
const arr3 = [1, 2, 3, 4];
const shifted = arr3.shift();
console.log(arr3);
console.log(shifted);


// slice: Returns an array from base array within given interval.
const arr4 = ["M","O","B","I","L","E"];
const result3 = arr4.slice(1,4);
console.log(result3);


// sort: Returns an array with sorted elements as per the place values.
const arr5 = [1,18,72,11,21,110];
console.log(arr5.sort());


// splice: Returns an array with modified inputs where values can be shifted or can be deleted.
const arr6 = ["minute","day","month","year"];
arr6.splice(1,0,"hour");
console.log(arr6);
