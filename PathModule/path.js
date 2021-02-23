const path=require('path');
console.log(path.dirname('C:/Users/User/Nodey/PathModule/path.js'));

console.log(path.extname('C:/Users/User/Nodey/PathModule/path.js'));


console.log(path.basename('C:/Users/User/Nodey/PathModule/path.js'));

const myPath=path.parse('C:/Users/User/Nodey/PathModule/path.js');

console.log(myPath.name);