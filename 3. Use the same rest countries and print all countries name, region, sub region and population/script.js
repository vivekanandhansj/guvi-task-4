   
//given json data iterate with for,for in,for of and forEach loops respectively.
let employee=[{"Name":"vino",
         "age":"23",
         "email":" vinogurunath@gmail.com",
         "salary":"75k"},
         
         {"Name":"sathiya",
         "age":"21",
         "email":"sathiya@gmail.com",
         "salary":"50k"},
         
         {"Name":"chandru",
         "age":"22",
         "email":"chandru@gmail.com",
         "salary":"40k"}];


//for loop   

for(i=0;i<employee.length;i++){
   console.log([i]);          
} ;
console.log("...............");
//for in loop

 for( let x in employee){
     console.log(employee[x]);
 } ;       
 console.log("..............");
//for of loop

 for(let a of employee){
     console.log(a);
 };
 console.log("..............");
// //for Each loop

employee.forEach(element => console.log(element));