/* function add(){
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    let out = Number(a)+Number(b);
    document.getElementsByClassName('output')[0].innerText=`Sum Of no. is ${out}`
 }
   function sub(){
   let a = document.getElementById("first").value;
   let b = document.getElementById("second").value;
  let out = Number(a)-Number(b);
   document.getElementsByClassName('output')[0].innerText=`Subtraction Of no. is ${out}`
    */

 function calc(opt){
       let a = document.getElementById("first").value;
       let b = document.getElementById("second").value;
       let out;
       if(opt=="Add"){
         out=`Sum of Number is ${Number(a)+ Number(b)}`;
       }
       else{
        out=`Substraction of Number is ${Number(a)- Number(b)}`;
       }
       document.getElementsByClassName('output')[0].innerText=out
 }