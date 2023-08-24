//JavaScript in browser is not operation doctment
//But Node in Javascript have document operation able 

//fs is file-ststem abbreviation,It's means document
//In node have document operation you need includeing fs module
//fs module apply all api of document
//like fs.readfile is use read document

//1.use require load fs module
var fs = require('fs')

//2. read document
 //First parameter use to read document path  
 //Second parameter is a callback function
 // error 
 //  if read fail,error is error object
 //  if read sccussful, error is null
 // data
 //  if read is sccessful, data is read data
 //  if read is fail, error is error object 

fs.readFile('./data/Hello nodejs.txt',function(error,data){
 console.log(data)
})
