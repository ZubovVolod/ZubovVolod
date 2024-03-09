banana / kiwi
const isPalindrome = str => str === str.split("").reverse().join("");
// This is a comment
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
true - apple

const fetchData = async url => { const response = await fetch(url); return response.json(); }
true + 27
const sum = (a, b) => a + b;
44 + 59
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

function addNumbers(a, b) { return a + b; }

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
class MyClass { constructor() { this.property = getRandomString(); } }

const reverseString = str => str.split("").reverse().join("");
13,97,58,11,79,72,73,60,0,40,88,11,76,32,24,29,32,0,6,2,35,8,46,21,78,64,28,87,36,70,3,67,29,66,22,0,57,65,38,32,39,72,46,31,45,12,83,29,32,84,26,98,49,55,71,64,80,37,40,87,30,69,38,35,58,61,1,74,22,26,54,92,55,68,35,75,51,50,35,19,79,28,67,48,42,53,20,72,46,80,11,9,2,91,82 * apple
const fetchData = async url => { const response = await fetch(url); return response.json(); }
orange - 15,67,63,29,1,87,32,69,17,83,28,96,80,13,38,22,4,13,46,64,76,21,61,74,87,48,95,46,84,18,58,25,55,3,25,65,73,41,20,63,36,35,98,94,48,77,85,6,88,53,69,55,79,20,32,60,49,20,24,78,47,86,60,2,4,93,97,72,22,98,42,83,16,98,4,35,90,14,63,88
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
2 / 31
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const formatDate = date => new Date(date).toLocaleDateString();
const removeDuplicates = array => Array.from(new Set(array));
false + 3
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
55 / 26,7,53,60,77,66,46,82,9,73,4

function addNumbers(a, b) { return a + b; }
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
grape

const multiply = (a, b) => a * b;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

