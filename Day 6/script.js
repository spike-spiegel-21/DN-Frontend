/* ====================Task-1========================*/

let x = [1, 2, 3, 4, 5, 6];
let y = "Mayank";

function is_array(m) {
    return m instanceof Array;
}

console.log(is_array(x));
//useful link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

/* ====================Task-2========================*/

function clone_array(m) {
    mcpy = [...m];
    console.log(mcpy);
}

clone_array(x);

//useful link: https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/

/* ====================Task-3========================*/

function first(x, from = 0) {
    // if(from<0) return x;
    x.splice(from + 1, x.length);
    console.log(x);
}

first([7, 9, 0, -2], 6);

//use of splice function w/o extra space

/* ====================Task-4========================*/

let arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

function printit(arr) {
    let s = "";
    for (let i = 0; i < arr.length; ++i) {
        s = s + arr[i] + "+";
    }

    s1 = s.slice(0, s.length - 1);
    return s1;
}

console.log(printit(arr));

/* ====================Task-5========================*/

var map = {};
var mostFrequentElement = arr[0];
function findMostFrequent() {
    for (var i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = 1;
        } else {
            ++map[arr[i]];
            if (map[arr[i]] > map[mostFrequentElement]) {
                mostFrequentElement = arr[i];
            }
        }
    }
    return [mostFrequentElement, map[mostFrequentElement]];
}
let res = findMostFrequent(arr);
console.log(`${res[0]} (${res[1]} times)`);
