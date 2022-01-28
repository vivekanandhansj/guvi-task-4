//Task 1: Simple Programs todo for variables
//a.Declare four variables without assigning values and print them in console
var a
var b
var c
var d
console.log(10,20,30,40)


//b.How to get value of the variable myvar as output
var myvar= 1;
console.log(myvar);

// //c. Declare variables to store your first name, last name, marital status, country and age in multiple lines
var e={
first_name:"vivek",
last_name:"j",
marital_status:"un married",
country:"India",
age:"24"
}
console.log(e)

//d. Declare variables and assign string, boolean, undefined and null data types
var a="vivek"
var b=true
var c
var d=null
console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))
//e.Convert the string to integer
let str="i am 20 years old"
var str1 = "you are 30 years old"
console.log(parseInt(str))
console.log(Number(str))
console.log(+(str))
console.log(parseInt(str1))
console.log(Number(str1))
console.log(+(str1))


//f.Write 6 statement which provide truthy & falsey values.
var b=1
b="1"
b=[1]
console.log(1 == "1")
console.log("1" == [1])
console.log([1] == 1)
console.log(1 === "1")
console.log("1" === [1])
console.log([1] === 1)

//Task 2: Simple Programs todo for Operators
//a.Square of a number
var a=10
var b= a**2
console.log(b)


//b.Swapping 2 numbers
// let x11 = prompt('Enter first value: ')
// let y11 = prompt('Enter second value: ')
// let z11
// z11=x11
// x11=y11
// y11=z11
// console.log(`Value of x after swapping : ${x11}`);
// console.log(`Value of y after swapping  : ${y11}`);


//c.Addition of 3 numbers
var a=10
var b=20
var c=30
console.log(a+b+c)


//d.Celsius to Fahrenheit conversion
let celsius=42
let fahrenheit = celsius * 1.8 + 32
console.log(fahrenheit)


//e.Meter to miles
let meter=100
let miles=meter*0.00062137
console.log(miles)


//f.Pounds to kg
let pound=5
let kilo = pound * 0.45
console.log(kilo)


//g.Calculate Batting Average
let runs = 1000;
let matches = 20;
let notout = 7;
let avg = runs/ (matches - notout);
 console.log(avg)


 //h.Calculate five test scores and print their average
let a1=100
let b1=98
let c1=99
let d1=98
let e1=100
let average=(a1+b1+c1+d1+e1)/5
console.log(average)


//i.Power of any number x ^ y
var x1=2
var y1=3
let power=x1 ** y1
console.log(power)


//j.Calculate Simple Interest
var p=30000
var n=12
var r=12.6
let SI = (p*n*r)/100
console.log(SI)


//k.Calculate area of an equilateral triangle
var a=50
let arequilateralTriangle = ( 1.73 * a *a) / 4
console.log(arequilateralTriangle)


//l.Area Of Isosceles Triangle
var a=2
var b=3
let AltitudeOfIsoscelesTriangle = Math.sqrt(Math.pow(a, 2) - (Math.pow(b, 2) / 4));
let h=AltitudeOfIsoscelesTriangle
let AreaOfIsoscelesTriangle=((1 * b * h) / 2)
console.log(AreaOfIsoscelesTriangle)


//m.Volume Of Sphere
var radius = 5;
var volumePOfSphere = (4/3)* Math.PI * Math.pow(radius, 3);
console.log(volumePOfSphere)


//n.Volume Of Prism
var b=45
var h1=34
let volumeOfPrism= b *h1
console.log(volumeOfPrism)


//o.Find area of a triangle.
var b=4
var h2=7
let areaOfTriangle=(1/2)* b * h2
console.log(areaOfTriangle)


//p.Give the Actual cost and Sold cost, Calculate Discount Of Product
let actualCost=500
let soldCost=475
let discountOfProduct=actualCost-soldCost
console.log(discountOfProduct)


//q.Given their radius of a circle and find its diameter, circumference and area.
var r=10
let diameterOfCircle = 2 * r
let circumferenceOfCircle= 2 * Math.PI * r
let areaOfCircle = Math.PI * r * r
console.log(diameterOfCircle)
console.log(circumferenceOfCircle)
console.log(areaOfCircle)


//r.Given two numbers and perform all arithmetic operations.
var p=5
var q=2
   var sum = p + q;
   var sub = p - q;
   var mul = p * q;
   var div = p / q;
    var mod = p % q;
   var sqr = p ** q;
console.log(sum)
console.log(sub)
console.log(mul)
console.log(div)
console.log(mod)
console.log(sqr)


//s.Display the asterisk pattern as shown below(No loop needed)
var a=["*","*","*","*","*"]
a.map((e)=>{
    d0=e+e+e+e+e
console.log(d0)
})


//t.Calculate electricity bill? //per hour 100watt,per unit10rs
let unitPerHourInWatt=100
let hour=1
let unitRate=10
let kWh=(unitPerHourInWatt * hour)/1000
let monthUsage=30*kWh
let costOfBill=unitRate*monthUsage
console.log(costOfBill)


//u.Program To Calculate CGPA
var mark1=97
 var mark2=100
 var mark3=98
 var mark4=100
 var mark5=99
var CGPA=(mark1+mark2+mark3+mark4+mark5)/5
console.log(CGPA)


//Starting from the friends variable below, 
//Loop and Print the names till you meet CaptianAmerica.
var friendsss = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandling(inputt){
    
 for (var i = 0; i < inputt.length-3; i++) {
console.log(inputt[i])
 }    
    }
        dataHandling(friendsss);
        //Task 3: Simple Programs todo for Condition , Looping and Arrays
//a.Write a loop that makes seven calls to console.log to output the following triangle:
var n = 7;
var string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "#";
  }
  string += "\n";
}
console.log(string);


//b.Iterate through the string array and print it contents
var strArray= ["Jazz","Blues","New Age","Classical","Opera"]
console.log(... strArray)

//c.write a code to count the elements in the array . Don’t use length property
var myarray=[11,22,33,44,55]
myarray.map((e) => {
console.log(e)
})


//d.Foods variable holds the names of your top 20 favorite foods, 
//starting with the best food. How can you find your fifth favorite food?
let food=["food1","food2","food3","food4","food5","food6","food7","food8","food9","food10","food11","food12","food13","food14","food15","food16","food17","food18","food19","food20"]
var a= [... food]
console.log(a[5])
//e.Find the length of your foods array
console.log(food.length)


//f.Starting from the existing friends variable below, 
//change the element that is currently “Mari” to “Munnabai”.
let friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandling(input){
  input.splice(0, 1, "Munnabai");
console.log(input)
    }
    dataHandling(friends);