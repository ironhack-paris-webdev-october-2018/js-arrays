var theUser = [
  "Hugh Jackman",
  "hugh@wolverine.com",
  "October 12, 1968",
  "0999999999",
  "555 Rue Australie",
];

console.log(theUser[0]);
console.log(theUser[3]);
console.log(theUser[4]);
console.log(theUser[99]);


theUser = {
  // use "" only for keys with spaces and other weird characters
  "full name": "Hugh Jackman",
  email: "hugh@wolverine.com",
  birthday: "October 12, 1968",
  phone: "0999999999",
  address: "555 Rue Australie",
};

// use [""] only for keys with spaces and other weird characters
console.log(theUser["full name"]);
console.log(theUser.phone);
console.log(theUser.address);
console.log(theUser.height);

// is there a value for the "avatar" key?
if (theUser.avatar) {
  console.log("Avatar is set!");
}
else {
  console.log("Please set your avatar.");
}


// creating new keys and values
theUser.height = 1.88;

// updating existing values
theUser.address = "555 Wolverine St, Sydney, Australia";

// assigning an "empty" value to a key
theUser.email = undefined;

// removing existing keys & values
delete theUser.phone;

console.log(theUser);



// returns an array of the KEYS of the object as strings
console.log( Object.keys(theUser) );
// [ "full name", "email", "birthday", "address", "height" ]

// returns an array of the VALUES of the object
console.log( Object.values(theUser) );
// [ "Hugh Jackman", undefined, "October 12, 1968", "555 Wolverine St, Sydney, Australia", 1.88 ]



var hughValues = Object.values(theUser);

console.log("Hugh object's VALUES:");

hughValues.forEach(function (oneItem) {
  console.log("** " + oneItem);
});

// for (var i = 0; i < hughValues.length; i += 1) {
//   console.log("** " + hughValues[i]);
// }
