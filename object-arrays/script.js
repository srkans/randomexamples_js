
/*user = {};

let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;  */

/**************************************************************/

/*let user = {
    name: "John",
    age: 30
  };
  
  let key = prompt("What do you want to know about the user?", "name");
  
  // access by variable
  alert( user[key] ); // John (if enter "name") */

  /*************************************************************/

  //key tanimlandiginda yukaridaki sekilde koseli parantez ile kullanmak gerekiyor

 /* let user = {
    name: "John",
    age: 30
  };
  
  let key = "name";
  alert( user.key ) // undefined  */

  /**************************************************************/

 /* let fruit = prompt("Which fruit to buy?", "apple");


    let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
    };

    alert( bag.apple ); // 5 if fruit="apple" */

    /**********************************************************/
/*
    We can use more complex expressions inside square brackets:

let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};
  */
 /*************************************************************/ 

 /*
 function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
let user2 = makeUser("Betul", 26);
alert(user.name); // John
alert(user2.name);  


In the example above, properties have the same names as variables. The use-case of making a property from a variable is so common, that there’s a special property value shorthand to make it shorter.

Instead of name:name we can just write name, like this:

function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}
We can use both normal properties and shorthands in the same object:

let user = {
  name,  // same as name:name
  age: 30
};
*/
/***************************************************************/
/*
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}
*/
/*Note that all “for” constructs allow us to declare the looping
 variable inside the loop, like let key here.
Also, we could use another variable name here instead of key.
For instance, "for (let prop in obj)" is also widely used.*/

/*Are objects ordered? In other words, if we loop over an object, 
do we get all properties in the same order they were added? 
Can we rely on this?
The short answer is: “ordered in a special fashion”: 
integer properties are sorted, others appear in creation order.*/ 

/**************************************************************/
/*
alert( String(Math.trunc(Number("49"))) ); // "49", same, integer property
alert( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not integer property
*/
/***************************************************************/
let user = {
  name:"John",
  surname:"Smith",
};

user.name ="Pete";
delete user.name;
    /*******/
let schedule = {};
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

alert( isEmpty(schedule) );

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); 

  /*******/
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum =0;
function sumSalaries(obj) {
  for(let key in obj) {
    sum += obj[key];
  }
  return sum;

};

alert(sumSalaries(salaries));
     /**************/
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for(let key in obj) {
    if(typeof(obj[key])=="number") {
      obj[key] = obj[key]*2;
    }
   alert(obj[key]);
  }
}

multiplyNumeric(menu);

       /************/

