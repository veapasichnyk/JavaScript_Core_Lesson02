let user = {};
user.name = 'ПИЛИП';
user.surname = 'ШЕВЧЕНКО';
console.log("User name is " + user.name);
console.log("User surname is " + user.surname);
user.name = 'СЕРГІЙ';
console.log("User name is " + user.name);
delete user.name;
console.log("User name is " + user.name);