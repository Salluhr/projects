a='20'
'20'
b='30'
'30'
parseInt(a)+parseInt(b)
50

a='123Delhi'
'123Delhi'
b='delhi123'
'delhi123'
parseInt(a)
123
parseInt(b)
NaN

parseInt(a)+parseInt(b)
NaN

a=20
20
b=10.11
10.11
parseFloat(a)+parseFloat(b)
30.11

alert('form')

confirm('Do you Want to submit')
true
confirm('Do you want to submit')
false

prompt('what is your name')
'Salman Sheikh'
prompt('Whats your age')
'23'

var a=prompt('Enter first no.')
var b=prompt('Enter Second No.')
alert(number(a)+number(b))
30
var a=prompt('Enter first no.')
var b=prompt('Enter Second No.')
alert(parseInt(a)+parseInt(b))
30


// 5) Using var, let, const//

> let a=20
> let a=10

Uncaught SyntaxError: Identifier 'a' has already been declared
> a=30
30
>  const a=30
Uncaught SyntaxError: Identifier 'a' has already been declared
> const c=20

> c=30
Uncaught TypeError: Assignment to constant variable.
> const c=10
Uncaught SyntaxError: Identifier 'c' has already been declared
>

var uname = "Avenger"
var type = "Action"
var ind = "hollywood"
var rating = "4.5"
//es5
var out = "An "+uname+"is a "+type+"movie with rating of "+rating+"and from industry "+ind+"."


// 6) Conditions
  
// =   Assignment
// ==  Comapare the Data
// === Compare the data and data types 

var a=10
var b='10'

//if we compare //
a==b    // comparing data
true
a===b   // comparig data types
false

//7) if else
  
var a=10
if (a%2==0){
   console.log(`Number ${a} is even`)
}
else{
    console.log(`Number ${a} is odd`)
}



// Ternary Operator
 var a=10
 a>10 ? 'hiii' :"bye" 

 
// 9) Using Functions


// function functionname (parameters){
//  return output }
//  add(1,2)          >>>> Function call

function add(a,b)
    {
        return a+b
    }


      // if we want input fron user then use userInput
function iseven(userInput) {
   let output;
    if(userInput%2==0){
       output=`The No. ${userInput} is Even`
    }
    else{
        output=`The No. ${userInput} is Odd`
    }
    return output
    }


    // 10)  Dom (Document Object Model)
   

    // by tag name

    document.getElementsByTagName('h1')
    HTMLCollection(6) [h1, h1, h1, h1, h1, h1]

      document.getElementsByTagName('h1')[0]
    <h1>​My First HTML Page​</h1>
    ​
      document.getElementsByTagName('h1')[0].innerText
    'My First HTML Page'

     document.getElementsByTagName('h1')[0].innerText='Somesh'
    'Somesh'                      // Here text will change from 'My First HTML Page' to 'Somesh'

    document.getElementsByTagName('h1')[0].style.color="Red"

    document.getElementsByTagName('h1')[0].style.fontSize="60px"
    '60px'

    document.getElementsByTagName('h1')[0].style.fontSize="60px"
    '60px'
    
    // by class name

    document.getElementsByClassName('scroll')[1].innertext

   // 13) string  operation
   var city='amsTeRdaM'

city[0]
'a'
city.charAt(5)
'R'
city.charAt(-1)
''
city.at(1)
'm'
city.at(-1)
'M'
city.at(-2)
'a'
var a='LonDon'
var b='VenIs'
a==b
false

a.toLowerCase==b.toLowerCase
true
a.toLowerCase==b.toLowerCase
true


var a='LonDon'
var b='VenIs'

a.toLowerCase==b.toLowerCase
true
a.toLowerCase==b.toLowerCase
true
a==b
false
var a='LonDon'
var b='london'

a==b
false
var a='LonDon'
var b='LonDon'


a==b
true
var a='LonDon'
var b='venis'

a.toLowerCase==b
false

// slice fuction()
var a= 'london'

a.slice(1)   // it will slice/cut first letter
'ondon'
a.slice(-1)   // it will slice/cut all letters except last one
'n'
a.slice(4)    // it will slice/cut first four letter
'on'
a.slice(-2)   // it will slice/cut all letters except last two
'on'
a.slice(-5)
'ondon'       // slice only first letter

'ondon'
a.slice(-3)     
'don'
a.slice(2,5)     // show the character from range 2- 5
'ndo'
a.slice(1,-2)
'ond'
a.slice(1,2)
'o'
a.slice(2,-1)
'ndo'


a.slice(-1,2)   // first value should not be negatve , it not give any output
''
a.slice(1,-1)   // remove first character and last character
'ondo'
a.slice(2,-2)   // remove first two character and last two character
'nd' 

// removingace and replace string
﻿
var name='  nikita  '

name.trim()
'nikita'
var name='ni ki ta'

name.trim()
'ni ki ta'
var a='I am learning JavaScript'

a.replace('JavaScript', 'JS')
'I am learning JS'
var a='JavaScript learning JavaScript'

a.replace('JavaScript', 'JS')
'JS learning JavaScript'
var a='JavaScript learning JavaScript'

a.replaceAll('JavaScript', 'JS')
'JS learning JS'
var a='JavaScript learning JavaScript'


a.replace(/JavaScript/g, 'JS')
'JS learning JS'
var a='ni ki ta'

a.replace(/ /g,'')

'nikita'

// using split() function

var a='https://www.google.com/search/aadhardownload/cpu'

a.split('/')
(6) ['https:', '', 'www.google.com', 'search', 'aadhardownload', 'cpu']
a.split('/')[3]
'search'
a.split('/')[5]
'cpu'

var a='Javascript'

a.split('')
(10) ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

var  b=['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
undefined
b.join()
'J,a,v,a,s,c,r,i,p,t'

b.join().replace(/,/g,'')        // it will join the string and replace all the commas
'Javascript'

///Using Math operation

                      // This operation generally used in OTP system
'Javascript'
Math.random()
0.7151137333328859
Math.random()*230
100.28133268728439
Math.random()*230
106.4495083315352
Math.random()*250
157.39249354317343

//using floor(), ceil() and round() function



Math.floor(10.5)
10
Math.floor(10.3)
10
Math.floor(10.9)
10
Math.ceil(10.3)
11
Math.ceil(10.5)
11
Math.ceil(10.6)
11
Math.round(10.3)
10
Math.round(10.5)
11
Math.round(10.7)
11
Math.round(10.35)
10
Math.round(10.49)
10
Math.round(10.5)
11

Math.floor(Math.random())
0

Math.ceil(Math.random())
1
Math.round(Math.random())
0

Math.floor(Math.random()*2000)
852
Math.floor(Math.random()*2000)

1456
Math.floor(Math.random()*2000)

806
Math.floor(Math.random()*29000)
6248
Math.floor(Math.random()*29000)
4146

Math.floor(Math.random()*(999999-111111))+111111
308215
Math.floor(Math.random()*(999999-111111))+111111
973535
Math.ceil(Math.random()*(999999-111111))+111111
817549
Math. ceil(Math.random()*(999999-111111))+111111
177447


Math.PI
3.141592653589793
Math.log(0)
-Infinity
Math.sin(0)
0
Math.cos(90)
-0.4480736161291702
Math.tan(90)
-1.995200412208242

Math.PI.toFixed(2)
'3.14'                       /// Here it will give the string
Math.PI.toFixed(4)
'3.1416'
Number(Math.PI.toFixed(2))      // if we write like this it gives the no.
3.14
