/*======================== TASK 1 ====================================*/
var student = {
    name: "Levi Ackerman",
    sclass: "Scout Leader",
    sclass: "Scout Leader",
    rollno: 21,
};

for (key in student) {
    console.log(`${key} : ${student[key]}`);
}
/*=====================================================================*/

/*======================== TASK 2 ====================================*/
var student = {
    name: "Levi Ackerman",
    sclass: "Scout Leader",
    rollno: 21,
};

delete student.rollno;

for (key in student) {
    console.log(`${key} : ${student[key]}`);
}
/*=====================================================================*/

/*======================== TASK 3 ====================================*/
var student = {
    name: "Levi Ackerman",
    sclass: "Scout Leader",
    rollno: 21,
};

console.log(Object.keys(student).length);
/*=====================================================================*/

/*======================== TASK 4 ====================================*/
var library = [
    { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
    { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false,
    },
];

for (book of library) {
    for (info in book) {
        console.log(`${info} : ${book[info]}`);
    }
}
/*=====================================================================*/

/*======================== TASK 5 ====================================*/
const cylinder = {
    area: function (r, h) {
        return 3.1423 * r * r * h;
    },
};

console.log(25, 35);
/*=====================================================================*/

/*======================== TASK 5 ====================================*/
var library = [
    {
        title: "The Road Ahead",
        author: "Bill Gates",
        libraryID: 1254,
    },
    {
        title: "Walter Isaacson",
        author: "Steve Jobs",
        libraryID: 4264,
    },
    {
        title: "Mockingjay: The Final Book of The Hunger Games",
        author: "Suzanne Collins",
        libraryID: 3245,
    },
];

/*=====================================================================*/
