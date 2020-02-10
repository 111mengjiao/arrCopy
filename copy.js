//Array.slice()
const numbers = [1,2,3,4,5];
const copy = numbers.slice();
copy.push(6);//添加新项以证明不会修改原始数组
console.log(copy);
console.log(numbers);
//输出
//[1，2，3，4，5，6]
//[1，2，3，4，5]


//Array.map()
const numbers = [1,2,3,4,5];
const copy = numbers.map(num => num);
copy.push(6); //添加新项以证明不会修改原始数组
console.log(copy);
console.log(numbers);


//Array.from()
const numbers=[1,2,3,4,5];
const copy = Array.from(new Set(numbers));
copy.push(6); //添加新项以证明不会修改原始数组
console.log(copy);
console.log(numbers);

//使用展开操作符
const numbers=[1,2,3,4,5];
const copy = [...numbers];
copy.push(6); //添加新项以证明不会修改原始数组
console.log(copy);
console.log(numbers);

//Array.of()+展开操作符
const numbers=[1,2,3,4,5];
const copy = Array.of(...numbers);
copy.push(6); //添加新项以证明不会修改原始数组
console.log(copy);
console.log(numbers);

//Array构造函数 + 展开操作符
const numbers=[1,2,3,4,5];
const copy = new Array(...numbers);
copy.push(6); //添加新项以证明不会修改原始数组
console.log(copy);
console.log(numbers);

//解构
const numbers=[1,2,3,4,5];
const [...copy] = numbers;
copy.push(6); //添加新项以证明不会修改原始数组
console.log(copy);
console.log(numbers);

//Array.concat()
const numbers=[1,2,3,4,5];
const copy = numbers.concat();
copy.push(6); //添加新项以证明不会修改原始数组
console.log(copy);
console.log(numbers);

//Array.push() + 展开操作符
const numbers=[1,2,3,4,5];
let copy = [];
copy.push(...numbers);
copy.push(6); //添加新项以证明不会修改原始数组
console.log(copy);
console.log(numbers);

//Array.unshift()+展开操作符
const numbers=[1,2,3,4,5];
let copy = [];
copy.unshift(...numbers);;.
copy.push(6); //添加新项以证明不会修改原始数组
console.log(copy);
console.log(numbers);

//Array.forEach()+展开操作符
const numbers=[1,2,3,4,5];
let copy = [];
copy.forEach((value) => copy.push(value));
copy.push(6); //添加新项以证明不会修改原始数组
console.log(copy);
console.log(numbers);

//for循环
const numbers=[1,2,3,4,5];
let copy = [];
for(let i = 0; i < numbers.length; i++){
	copy.push(numbers[i]);
}
copy.push(6); //添加新项以证明不会修改原始数组
console.log(copy);
console.log(numbers);

//Array.reduce()
const numbers=[1,2,3,4,5];
const copy = numbers.reduce((acc,x) => {acc.push(x);return acc;},[]);

copy.push(6); //添加新项以证明不会修改原始数组
console.log(copy);
console.log(numbers);

//apply()
const numbers = [];
let copy = [];
Array.prototype.push.apply(copy,numbers);
copy.push(6); //添加新项以证明不会修改原始数组
console.log(copy);
console.log(numbers);
