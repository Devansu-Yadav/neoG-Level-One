const arr = [
	{
		name: "Jay",
		age: 60
	},
	{
		name: "Gloria",
		age: 36
	},
	{
		name: "Manny",
		age: 16
	},
	{
		name: "Joe",
		age: 9
	}
]


// Your output should be: 121 /*** 60+36+16+9 ***/
const calculateTotalAge = (prevPersonAge, currentPerson) => prevPersonAge + currentPerson.age;
console.log(arr.reduce(calculateTotalAge, 0));