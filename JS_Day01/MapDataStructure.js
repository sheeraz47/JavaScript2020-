
var map = new Map();
/*
set(Key, Value): add keys & values to the map
get(key): returns the value
delete(key): delets the key and value
has(Key): verifies 
keys(): returns all the keys
values(): returns all the values
*/

map.set("Sheeraz", 100000);
map.set("Saeed", 120000);

console.log(map); 

/*
for of loop:
    for( var [X, Y]  of mapName   )
*/

for(var [key, value] of map){ // key and value it can be any name 
console.log(key+" salary is "+value+ " dollars");
}

console.log(map.get("Saeed"));

map.delete("Saeed");
console.log(map);

/*
keys():
values():
*/

var students = new Map();
students.set("Nurzat", 1);
students.set("Olessya", 2);
students.set("Holy", 3);

for(var key of students.keys()){ // return all the keys from the data
console.log(key);
}
console.log("========================================");

for(var value of students.values()){ // return all the values from the data
    console.log(value);
    }
