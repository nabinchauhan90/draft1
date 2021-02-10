// // console.log(global.setTim);
// global.setTimeout(()=>{
//     console.log('What up??')
//     clearInterval(hey);
// },3000);

// const hey = global.setInterval(()=>{
//     console.log('Hey!')
// },1000);

//OS

// const os = require('os');
// console.log(os);
// console.log(os.platform(),os.homedir(),os.hostname(),os.release());
// console.log(os.cpus());
// console.log(os.userInfo());
// console.log(os.version(),os.uptime(),os.totalmem());


//Module Import/Export

const cat = require('./modules');
console.log(cat);
const {
    array1
} = require('./modules');
console.log(array1);
