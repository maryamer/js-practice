// const arr = ["A", "B", "C", "D"];

// 1. length
// 2. push :add element to end of array and returns the new length of the array
// 3. pop : removes the last element of array and returns it
// 4. shift : Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// 5. unshift : Inserts new elements at the start of an array, and returns the new length of the array.
// 6. indexOf : Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// 7.includes: Determines whether an array includes a certain element, returning true or false as appropriate.
// 8. slice => NOT MUTATE :Returns a copy of a section of an array. For both start and end.
// 9.splice :MUTATE => Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// splice(start)
// splice(start , deleteCount)
// splice(start , deleteCount, item1)
// splice(start , deleteCount, item1,item2 , item3)
// 10.reverse
// 11.join :Adds all the elements of an array into a string, separated by the specified separator string.
// 12.concat : Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// 13. at => arr[0] = arr.at(0)

// // cceass the last index of an array:
// 1. arr[arr.length -1]
// 2.arr.slice(-1[0])
// 3. arr.at(-1)

// console.log(arr.at(0));

//
//
//
//

// // forEach method : loop on array,map,set
// The forEach() method executes a provided function once for each array element.

const myarr = ["records", "reactions", "necessary", "next.js", "vue js"];
const courses = [];
// myarr.forEach(callback function => A function to execute for each element in the array. Its return value is discarded.)
// forEach return => undefined
myarr.forEach((element, index, myarr) => {
  courses.push({
    id: index + 1,
    title: element[0].toUpperCase() + element.toLowerCase().slice(1),
  });
});
