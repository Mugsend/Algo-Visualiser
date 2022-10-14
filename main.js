let arr=[];
let flag=false;
let time=10;
let fruits;
let change=document.getElementById("main").offsetWidth/80;
let j=0;
let speed=1000;
visualiser();
function visualiser(){
document.getElementById("main").innerHTML="";
let count=parseInt(document.getElementById("inp").value);
if (arr.length<count){
while(arr.length!=count){
    let n=parseInt((Math.random()*200));
for (let i=0;i<arr.length;i++){
    flag=false;
    if (n==arr[i] || !n){
        flag=true;
        break;
    }
}

if (!flag){
    arr.push(n);
}
}
}
else{
    document.getElementById("main").innerHTML=""
    while(arr.length!=count){
        arr.pop();
    }
}
fruits=document.getElementsByClassName("line");
for (let i=0;i<arr.length;i++){
    document.getElementById("main").innerHTML+="<div class='line' id='"+arr[i]+"'"+">"+"</div";
    fruits[i].style.height=arr[i]*2+"px";
    fruits[i].style.left=change*i+2+"px";
}
j=0;
}
function chngspeed(){
    speed=2000/document.getElementById("spd").value;
}
function start(){
    document.getElementById("start").style.display="none";
    if (document.getElementById("algos").value=="sel"){
        document.getElementById("status").innerHTML="Running Selection Sort";
        selectionSort();
        
    }
    if (document.getElementById("algos").value=="bub"){
        document.getElementById("status").innerHTML="Running Bubble Sort";
        bubbleSort();
    }
}
function swap(x,y){
    let diff=y-x;
    document.getElementById(arr[x]).style.transitionDuratio=diff+"s";
    let temp=document.getElementById(arr[x]).style.left;
    document.getElementById(arr[x]).style.left=document.getElementById(arr[y]).style.left;
    document.getElementById(arr[y]).style.left=temp;
    temp=arr[x];
    arr[x]=arr[y];
    arr[y]=temp;
}
   
function selectionSort(){
        let smallest_i=j;
        for (let i=j+1;i<arr.length;i++){
            if (arr[i]<arr[smallest_i]){
                smallest_i=i;
            }
        }
        swap(smallest_i,j);
        if (j<arr.length-1){
            j++;
            setTimeout(selectionSort,speed);
        }
        
}
function bubbleSort(){
    flag=false;
    for(let i = 0; i < arr.length-1; i++){
        if (arr[i]>arr[i+1]){
            swap(i,i+1);
            flag=true;      
        }}
        if (flag){
            setTimeout(bubbleSort,speed);
        }
}
  
