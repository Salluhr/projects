var a=['hii','hello','kilo','see','you','nothing']
      Array of String

var b=[1,2,3,4,5,6,7,8]
    Array of Number

var c=[true,false,false,true]
    Array of boolean

typeof(a)
'object'

typeof(b)
'object'

typeof(c)
'object'

var city=['Mumbai','Pune','Delhi','Amsterdam','Venice']

city.sort()
(5)['Amsterdam', 'Delhi', 'Mumbai', 'Pune', 'Venice']

city.reverse()
(5)['Venice', 'Pune', 'Mumbai', 'Delhi', 'Amsterdam']
city.sort()
(5)['Amsterdam', 'Delhi', 'Mumbai', 'Pune', 'Venice']
city.reverse()
(5)['Venice', 'Pune', 'Mumbai', 'Delhi', 'Amsterdam']
city.push('Mul')
6
city
(6)['Venice', 'Pune', 'Mumbai', 'Delhi', 'Amsterdam', 'Mul']    /// element added at last

city.pop()
'Mul'                                             /// element removed from last

city
(5)['Venice', 'Pune', 'Mumbai', 'Delhi', 'Amsterdam']   /// new array

city.pop(2)          /// here whatever index no. we give , pop() always remove from last (here it removes the Amsterdam from last instead of that value which is present on index no. 2)
'Amsterdam'

city
(4)['Venice', 'Pune', 'Mumbai', 'Delhi']

city.shift()
'Venice'

city.pop(4000)
'Delhi'

city
(2)['Pune', 'Mumbai']

city.unshift('Dubai','Nice')
4

city
(4)['Dubai', 'Nice', 'Pune', 'Mumbai']

// Using slice() Function

var city=['Venice', 'Pune', 'Mumbai', 'Delhi', 'Amsterdam', 'Mul'] 

city.slice(1)
(5) ['Pune', 'Mumbai', 'Delhi', 'Amsterdam', 'Mul']

city.slice(-1)
['Mul']

city
(6) ['Venice', 'Pune', 'Mumbai', 'Delhi', 'Amsterdam', 'Mul']

city.slice(1,-2)
(3) ['Pune', 'Mumbai', 'Delhi']

// Using Splice() Function

var city=['Venice', 'Pune', 'Mumbai', 'Delhi', 'Amsterdam', 'Mul'] 

city.splice(0,1,'Jenoa')    //remove 1 element from index no. 0 and added new element
['Venice']

city
(6)['Jenoa', 'Pune', 'Mumbai', 'Delhi', 'Amsterdam', 'Mul']

city.splice(1,0,'Helsinki')  //added 1 element to index no. 1

city
(7)['Jenoa', 'Helsinki', 'Pune', 'Mumbai', 'Delhi', 'Amsterdam', 'Mul']

city.splice(-1,0,'Rupa')

city
(8)['Jenoa', 'Helsinki', 'Pune', 'Mumbai', 'Delhi', 'Amsterdam', 'Rupa', 'Mul']
city.splice(-3,0,'Rupa')

city
(9)['Jenoa', 'Helsinki', 'Pune', 'Mumbai', 'Delhi', 'Rupa', 'Amsterdam', 'Rupa', 'Mul']

city.splice(2,2)
(2)['Pune', 'Mumbai']   //remove 2 element from index no. 2 
city
(7)['Jenoa', 'Helsinki', 'Delhi', 'Rupa', 'Amsterdam', 'Rupa', 'Mul']

// Using indexOf() Function

var city=['Venice', 'Pune', 'Mumbai', 'Delhi', 'Amsterdam', 'Mul']

city.indexOf('Pune')
1

city.indexOf('venice')  // if the element is not from array it will return -1
-1
city.indexOf('Delhi') // if the element is from array it will return that index no.
3

var a=['a','b','c',1]
var b=[2,3,'d','e']
a+b
'a,b,c,12,3,d,e'

a.concat(b)
(8)['a', 'b', 'c', 1, 2, 3, 'd', 'e'] // Better way to add array

var a=["a","b","c"]
var b="hii"

Array.isArray(a)      //check whether given value is array or not array 
true
Array.isArray(b)
false

/Nested Array 
var a=['Jenoa', 'Helsinki',['Red','Green',['Audi','Bmw','Merc'],'Yellow'], 'Delhi', 'Rupa', 'Amsterdam', 'Rupa', 'Mul']
a[2]
(4) ['Red', 'Green', Array(3), 'Yellow']

a[0]
'Jenoa'

a[2][1]
'Green'

a[3]
'Delhi'

a[2][2][0]
'Audi'

a[2][2][2]
'Merc'

a[3]
'Delhi'


