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


    // Dom (Document Object Model)
   

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