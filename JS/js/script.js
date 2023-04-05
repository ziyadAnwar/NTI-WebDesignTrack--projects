// 'use strict'
// function do_repo(){
//     data='test repo';
//     console.log(data);
// }
// do_repo();
// console.log(data);

// var num1 = Number(prompt('num1 ?'));
// var num2 = Number(prompt('num2 ?'));

// console.log(num1+num2);
// console.log(Number(prompt('num1 ?'))+Number(prompt('num2 ?')));

// var c= 50;

// c/=5;
// c*=2;
// c-=3;
// console.log(c);

// var x =10;
// var y = x--;
//  console.log(String(x) + String(y));
 

// var x =8 ;
// if(x == '8'){
//     console.log('this is correct ')
// }

// var sal= prompt('u salary ?')
// if(sal>2000){
//     console.log('u are emp')
// }
// else{
//     console.log('u are tran')
// }

// var num = prompt('entr the num');
// if(num%2 ==0 ){
//     console.log('even');
// }else{
//     console.log('odd');
// }

// var x = prompt(' your salary ?')
// if(x <=2000){
//     console.log('tranier')
// }else if(x <= 4000){
//     console.log('emp')
// }else if(x <= 6000){
//     console.log('jun')
// }else if(x <= 10000){
//     console.log('hr')
// }
// else{
//     console.log('manager')
// // }
// var x = 15;
//  if(!(x>4 && x<20)){
//     console.log('suc')
//  }

// var x=10;
// var output=(x<2)? 'yes':(x > 20)?'yes tow':'error'
// console.log(output)

// var x = 15;
 
// switch(true){
//     case (x>5 && x>20):console.log('first');break;
//     case (x %5 ==0):console.log('sec');break;
//     case (x<10):console.log('thired');break;
//     case 20:console.log('fourth');break;
//     default:console.log('error')
// }

// for(i=3; i<5 ;i++){
//     console.log(i);
// }

// var names=['ahmed','ali','saad'];
// for(i=0; i<names.length; i++){
//     console.log(names[i]);
// }

// var count = prompt('num of product ?')
//  var arr=[];
// for( i=0 ; i <count ; i++){
//   arr[i] = prompt('product '+[i +1]+'is ?' )
// }
// for( i=0 ; i <count ; i++){
//     console.log(arr[i])
// }
    

// var sala=prompt('enter the salary')

// if(isNaN(sala)){
//   console.log('error');
// }else{
//   console.log(sala*12)
// }


// var count = prompt('num of product ?')
//  var max=0;
//  var total=0
// for( let i=0 ; i <count ; i++){
//    var price = Number(prompt('price is ' ));
//     total +=price
//   if(max < price){
//     max=price;
//   }
// }

// console.log(max)
// console.log(total);

    


// var x = prompt('the first num');
// var y = prompt('the sec num');
// var z = prompt('the opration');


 
// switch(z){
//     case '+':console.log(Number(x)+Number(y));break;
//     case '*':console.log(x*y);break;
//     case '/':console.log(x/y);break;
//     case '-':console.log(x-y);break;
//     default:console.log('error')
// }
// var names =['ahemd','ali','osama','saad']
// for(let i=0 ; i<names.length;i++){
//   console.log(names[i])
// }

// for(let item in names){
//   console.log(item)
// }
// for(let item of names){
//   console.log(item)
// }

// let count= 0;
// while(count< names.length){
//   console.log(names[count]);
//   count++;
// // }


// let count=1000;
// do{
//   console.log(names[count])
//   count++;
// }while(count<names.length)

// for(let i=0; i< names.length;i++){
//   if(i==1 || i==2){
//     continue;
//   }
//   console.log(i);
// }

// var person={
//   username:'ali',
//   addres:'cairo'
// };
// var user= Object.assign({},person);

// user.username='test';
// console.log(user);
// console.log(person)

// var str ='ziyad anwar ';
// console.log(str.length);
// console.log(str.toLocaleUpperCase());
// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());
// console.log(str.concat(' abc',' xyz' , 'www'));

// console.log(str.indexOf('a'));
// console.log(str.lastIndexOf('a'));
// console.log(str.replace('a','s'));
// console.log(str.replaceAll('a','d'));
// console.log(str.search('n'));
// console.log(str.charAt(6));

// console.log(str.slice(2,8));



// // Task 
// var count = prompt('enter the count');
// var product=[];

// for(let i =0 ; i<count ;i++){
//   product[i]=prompt('the product is ?')
// }
// console.log(product)


// var num = prompt('enter your salary')
// num<2000? console.log('tran'): num<4000 ? console.log('emplo'):console.log('manager')

// var num = prompt('enter your salary')
// if(num<2000){
//   console.log('tran')
// }else if(num<4000){
//   console.log('emp')
// }else{
//   console.log('manager')
// }

//  var num = prompt('enter your salary')
// switch(num){
//   case (num<2000):console.log('tran');break;
//   case (num<4000):console.log('emp');break;
//   default:console.log('manage');break
// }

// var count = prompt('enter the count');
// var product=[], sum=0;


// for(let i =0 ; i<count ;i++){
//   product[i]=Number(prompt('the product is ?'))
//   sum+=product[i]
// }
// console.log(sum)


// var str= 'ziyad ANwar '
// var FullName="Ziyad Anwar Abdelftah"
// console.log(str.length);
// str=str.trim();
// console.log(str.length);
// console.log(FullName.split(' '))

// var num= 105.578612

// console.log(num.toFixed());
// console.log(num.toFixed(1));
// console.log(num.toFixed(2));

// var img= prompt('the path of image is ')
// img= img.split('.')

// while(img[1]!='png'){
//   console.log(' not valid')
//   img=prompt('enter the bath again')
// }
// console.log('valid')

// var file=prompt('enter the file')
//  var valid=['png','jbg']

//  var fileExtention = file.split('.')[file.split('.').length-1];
//  var output='not valid img';
//  for(let ex of valid){
//   if(ex ==fileExtention)
//   var output='valid extention'
//   break;
//  }
//  console.log(output);

// var data = new Date();

// console.log(data.getFullYear());
// console.log(data.getMonth() +1 );
// console.log(data.getDate());
// console.log(data.getHours());
// console.log(data.getMinutes());
// console.log(data.toLocaleDateString());
// console.log(data.toLocaleTimeString());
// console.log(data.toLocaleString());

// var x =10.5;

// console.log(Math.round(x));
// console.log(Math.floor(x));
// console.log(Math.ceil(x));

// // /the task 
// var x = prompt('enter the num');
// var message='prime'
//  for(let i=2; i<x ; i++){
//     if(x%[i]==0){// 9%2 > 1  9%3>0
//         message= 'not prime'
//         break;
//     }
    
//  }
//  console.log(message)


// var file=prompt('enter the video')
//  var valid= ['mp4','mov']

//  var fileExtention = file.split('.')[file.split('.').length-1];
 
//  while(!(valid.includes(fileExtention))){
//     file=prompt('enter the right pass of video')
//     fileExtention = file.split('.')[file.split('.').length-1];
//  }
//  console.log('valid');


// var sal=prompt('enter salary')

// while(isNaN(sal)){
//     sal=prompt('enter the right sala')
// }
// console.log('valid')


// var x = new Date();

// console.log(x.toLocaleDateString());
// console.log(x.toLocaleTimeString());
// console.log(x.toLocaleString());

// var x= prompt('enter the num');

// console.log(Math.round(x));
// console.log(Math.floor(x));
// console.log(Math.ceil(x));
// console.log(Math.trunc(x));


// var input = document.querySelector('input');
// var btn = document.querySelector('button');

// btn.onclick =function(){
//     if(input.getAttribute('type')=='password'){
//         input.setAttribute('type','text')
//         btn.textContent='hide password'
//     }else{
//         input.setAttribute('type','password');
//         btn.textContent='show password'
        
//     }
// }

// var input = document.querySelector('input');
// var p = document.querySelector('p');
 
// input.onkeyup = function(){
//     if(input.value.length<4){
//         p.textContent='week'
//         p.className='alert alert-danger'
//     }
//     else if(input.value.length<10){
//         p.textContent='meduaim'
//         p.className='alert alert-info'


//     }
//     else{
//         p.textContent='strong'
//         p.className='alert alert-success'

//     }
// }

// document.querySelector('h3')
// .onclick = function(e){
//     console.log(e.target.previousElementSibling);
//     console.log(e.target.nextElementSibling);
//     console.log(e.target.parentElement);

// }
 



// var input = document.querySelector('input');
// var p = document.querySelector('p');
// var save = document.getElementById('save')
// for(let input of document.querySelectorAll('form div input')){
//     input.onkeyup=function(){
//         if(event.target.value.length <8 ){
//             event.target.nextElementSibling.setAttribute('disabled','disabled')
//         }else{
//             event.target.nextElementSibling.removeAttribute('disabled')   
//              }
//     }
// }

// var img= document.querySelector('img')
// var btn=document.querySelector('button')
// var arr= ['../image/1.jpg','../image/2.jpg','../image/3.jpg','../image/4.jpg']

// btn.onclick= function(){
//     for(let i=1; i<=arr.length; i++){
//         event.target.previousElementSibling.src=''
//         img.src('../image/'+[i]+'.jpg')
//     }
// }

// btn.onclick = function(){
//     var random = Math.floor(Math.random()*4);
//     event.target.previousElementSibling
//     .setAttribute('src',arr[random])
// }

// setInterval(function(){
//     var date = new Date().toLocaleString();
//     document.querySelector('.current_time p')
//     .innerHTML=date;
// },3000);

// document.querySelector('form')
// .onsubmit = function(){
//     event.preventDefault();
//     var error =0 ;
//     for(let input of document.querySelectorAll('form div input')){
//         if(input.value.length<4){
//             error++
//         }
//     }
//     console.log(error);
//     if(error>0){
//         alert('pls enter')
       
//     }
// }

// document.querySelector('.skills button')
// .onclick = function(){
//     var p = document.createElement('p');
//     if(event.target.previousElementSibling.value.length >4 ){
//     p.textContent=event.target
//     .previousElementSibling.value
//      event.target.parentElement.append(p);
//     }else{
//         console.log('error')
//     }
//     event.target.previousElementSibling.value=''
// }


// document.querySelector('.personal_image button')
// .onclick= function(){
//     if(confirm('are u sure ')){
//         event.target.previousElementSibling.remove();

//     }
// }

// var data ={
//     egypt:['cairo','alex','banha'],
//     usa:['new york','one','two'],
//     ksa:['ryad','gda','madina'],

// };
// document.querySelector('select')
// .onchange =function(){
//     var output= '<option>select city</opyion>'
//     if(event.target.value != ""){
//         var cities =data[event.target.value];
//         for(let city of cities){
//             output +='<option>'+city+'</option>';
//         }
//     }
//     console.log(output);
//     document.querySelector('.countary select:last-of-type')
//     .innerHTML=output
// }


// document.querySelector('button')
// .onclick =function(){
//     document.querySelector('.box_model')
//     .style.display='block'
// }
// document.querySelector('.box_model span')
// .onclick = function(){
//     event.target.parentElement.style.display='none'
// }

// document.querySelector('h5')
// .addEventListener('click',function(){
//     console.log('yes two');
//     event.target.style.color='red'
// })



// var input = document.querySelector('input');
// var btn = document.querySelector('button');

// btn.onclick =function(){
//     if(input.getAttribute('type')=='password'){
//         input.setAttribute('type','text')
//         btn.textContent='hide password'
//     }else{
//         input.setAttribute('type','password');
//         btn.textContent='show password'
        
//     }
// }


// document.getElementById('btnPro1')
// .onclick =function(){
//     document.querySelector('.product1')
//     .style.display='block';
//     document.querySelector('.product2')
//     .style.display='none'
//     document.querySelector('.product3')
//     .style.display='none'
// }

// document.getElementById('btnPro2')
// .onclick =function(){
//     document.querySelector('.product2')
//     .style.display='block';
//     document.querySelector('.product1')
//     .style.display='none'
//     document.querySelector('.product3')
//     .style.display='none'
// }

// document.getElementById('btnPro3')
// .onclick =function(){
//     document.querySelector('.product3')
//     .style.display='block';
//     document.querySelector('.product1')
//     .style.display='none'
//     document.querySelector('.product2')
//     .style.display='none'
// }

