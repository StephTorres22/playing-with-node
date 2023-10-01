const os = require("os");

//Get platform
console.log(os.platform());

//Get CPU architecture
console.log(os.arch());

//CPU core infor
//console.log(os.cpus());

//Free memory
console.log(os.freemem());

//Total mem
console.log(os.totalmem());

//Home directory
console.log((os.homedir()));

//Uptime, how long system has been up/running
console.log(os.uptime());