var studentNames = [
  "Nicolas",
  "Chloé",
  "Filippo",
  "Helen",
  "Christian",
];

// adds to the end of the array
studentNames.push("Jean-Nicolas");

// adds to the beginning of the array (new index 0)
studentNames.unshift("Laura");


// .splice() with a P is used for removing items anywhere in the array

// remove starting at INDEX 3
// remove ONLY 1 item
studentNames.splice(3, 1);

var index = studentNames.indexOf("Jean-Nicolas");
// remove start at the index of "Jean-Nicolas"
// remove ONLY 1 item
studentNames.splice(index, 1);


console.log(studentNames[4]);
console.log(studentNames.length);

console.log(studentNames[studentNames.length - 1]);

console.log(studentNames);


for (var i = 0; i < studentNames.length; i += 1) {
  var name = studentNames[i];
  console.log(name.charAt(0) + ".");
}


// forEach (better loop for arrays)
studentNames.forEach(function (name) {
  console.log(name.charAt(0) + ".");
});
