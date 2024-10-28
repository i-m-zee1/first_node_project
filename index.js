// run `node index.js` in the terminal

// console.log(`Hello Node.js v${process.versions.node}!`);
const mission = process.argv[2]//'learn';
console.log("Process: ",mission);
if (mission === 'learn') console.log('Time to write some node code!!!!!!!');
else console.log(`Is ${mission} really more fun?????`);
