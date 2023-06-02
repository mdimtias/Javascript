const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
arr.forEach(function(value, index, arr){
	// console.log(value, index, arr);
	return sum+=value;
});
console.log(sum);

// ForEach implementation
function forEach(arr, cb){
	for(let i=0; i < arr.length; i++ ){
		cb(arr[i], i, arr);
	}
}

let sumTwo = 0;
forEach(arr, function(value){
	// console.log(value, index, arr);
	return sumTwo += value;
})
console.log(sumTwo);