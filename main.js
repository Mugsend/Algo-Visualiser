let arr=[];
let flag=false;
let time=700;
let fruits;
let change=15;
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
    fruits[i].style.left=change*i+"px";
}
}
function sortit(){
    flag=false;
    for(let i=0;i<arr.length;i++){
        fruits[i].style.backgroundColor="white";
    }
    for(let i = 0; i < arr.length-1; i++){
        if (arr[i]>arr[i+1]){
            let temp=arr[i];
            document.getElementById(arr[i]).style.left=parseInt(document.getElementById(arr[i]).style.left.slice(0,document.getElementById(arr[i]).style.left.length-2))+change+"px";
            document.getElementById(arr[i]).style.backgroundColor="red";
            document.getElementById(arr[i+1]).style.left=parseInt(document.getElementById(arr[i+1]).style.left.slice(0,document.getElementById(arr[i+1]).style.left.length-2))-change+"px";
            document.getElementById(arr[i+1]).style.backgroundColor="green";
            arr[i]=arr[i+1];
            arr[i+1]=temp; 
            flag=true;  
            break;          
        }}
        if (flag){
            setTimeout(sortit, time); 
        }
        else{
        for(let i = 0; i < arr.length; i++){
            document.getElementById(arr[i]).style.backgroundColor="green";
        }
    }
}

  