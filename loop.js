//  for loop
 
for(i=0;i<5;i++){
    console.log(i)
}
 0
 1
 2
 3
 4

 var a= ['Venice', 'Pune', 'Mumbai', 'Delhi', 'Amsterdam', 'Mul']

 for(i=0;i<a.length;i++){
    console.log(a[i])
}

Venice
Pune
Mumbai
Delhi
Amsterdam
Mul

//if we want to print in <li>

var a= ['Venice', 'Pune', 'Mumbai', 'Delhi', 'Amsterdam', 'Mul']

 for(i=0;i<a.length;i++){
    console.log(`<li>${a[i]}</li>`)
}


<li> Venice </li>
<li>Pune</li>
<li>Mumbai</li>
<li>Delhi</li>
<li>Amsterdam</li>
<li>Mul</li>


//if we want to run nested loop

var a=['Jenoa', 'Helsinki',['Red','Green','Yellow'], 'Delhi', 'Rupa', 'Amsterdam', 'Rupa', 'Mul']
for(i=0;i<a.length;i++){
    for(j=0;j<a[i];j++){
        console.log(a[i][j])
    }
}
var a=['Jenoa', 'Helsinki',['Red','Green','Yellow'], 'Delhi', 'Rupa', 'Amsterdam', 'Rupa', 'Mul']
for(i=0;i<a.length;i++){
    for(j=0;j<a[i].length;j++){
        console.log(a[i][j])
    }
}
o/p >>>
J
e
n
o
a
H
e
l
s
i
n
k
i
Red
Green
Yellow
D
e
l
hi
R
u
p
a

// solution to above problem is

var a = ['Jenoa', 'Helsinki', ['Red', 'Green', 'Yellow'], 'Delhi', 'Rupa', 'Amsterdam', 'Rupa', 'Mul']
for (i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
        for (j = 0; j < a[i].length; j++) {
            console.log(a[i][j])
        }
    }
    else{
        console.log(a[i])
    }
}

o/p>>
Jenoa
Helsinki
Red
Green
Yellow
Delhi
Rupa
Amsterdam
Rupa
Mul


//While Loop

var i=0
while(i<5)
{
    console.log(i);
    i++
}
0
1
2
3
4

var i=10
do{
    console.log(i);
    i++
}
while(i<5)

o/p>> 10     // because condition not get true as 10 is greater than 5,so while loop not running

// for off loop

var color=['Red', 'Green', 'Yellow']
for(mycolor of color){
    console.log(mycolor)
}

// for off loop (nested)

var city=['Jenoa', 'Helsinki', ['Red', 'Green', 'Yellow'], 'Delhi', 'Rupa', 'Amsterdam', 'Rupa', 'Mul']
for(mycity of city){
    if(Array.isArray(mycity)){
        for(mycolor of mycity){
            console.log(mycolor)
        }
    }
    else{
        console.log(mycity)
    }
    
}
o/p>>
Jenoa
Helsinki
Red
Green
Yellow
Delhi
Rupa
Amsterdam
Rupa
Mul

















