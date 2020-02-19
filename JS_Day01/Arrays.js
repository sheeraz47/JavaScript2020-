
var numbers = [1, 2, 3, 3.5, "Saeed", true, '$'];
// index num   0  1  2   3      4          5   6 
console.log(numbers);

console.log(numbers[10]); // 'undefined' is also a class in JS
console.log(numbers[5]);

var name1 = numbers[4];

console.log(name1);


/*
sort(): sorts in accending
push(value): add method 
pop(): LIFO
Shift(): FIFO
unshift(value): inserts the value to index 0 
length: returns the length 
*/

var nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
nums.sort(); // always go the ascii table when you run sort()
nums.push(100); // when you need to add we can use push method 
console.log(nums.pop()); // 100 removed LIFO 
console.log(nums.shift()); // first value removed FIFO
console.log(nums.unshift());  // get back to first removed value
nums.unshift(1);
console.log(nums);

console.log(nums.length);


