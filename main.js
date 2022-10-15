let arr=[];
let fruits;
let speed=2000/document.getElementById("spd").value;
visualiser();
function visualiser(){

document.getElementById("main").innerHTML="";
let count=parseInt(document.getElementById("inp").value);
let change=document.getElementById("main").offsetWidth/count;
if (arr.length<count){
while(arr.length!=count){
    let n=parseInt((Math.random()*200));
    let flag=false;
for (let i=0;i<arr.length;i++){
    
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
    fruits[i].style.width=document.getElementById("main").offsetWidth/count-document.getElementById("main").offsetWidth/count/5+"px";
}
chngspeed();
}

function chngspeed(){
    speed=2000/document.getElementById("spd").value;
    for (let i=0;i<arr.length;i++){
        fruits[i].style.transitionDuration=speed/1000+"s";
    }
}
function start(){
    document.getElementById("start").style.display="none";
    if (document.getElementById("algos").value=="sel"){
        document.getElementById("status").innerHTML="Running Selection Sort";
        selectionSort(0);
        
    }
    if (document.getElementById("algos").value=="bub"){
        document.getElementById("status").innerHTML="Running Bubble Sort";
        bubbleSort();
    }
    if (document.getElementById("algos").value=="quick"){
        document.getElementById("status").innerHTML="Running Quick Sort";
        quickSort(0,arr.length-1);
    }
}
function swap(x,y){
    let temp=document.getElementById(arr[x]).style.left;
        document.getElementById(arr[x]).style.left=document.getElementById(arr[y]).style.left;
        document.getElementById(arr[y]).style.left=temp;
        temp=arr[x];
        arr[x]=arr[y];
        arr[y]=temp;
}

function selectionSort(j){
        let smallest_i=j;
        for (let i=j+1;i<arr.length;i++){
            if (arr[i]<arr[smallest_i]){
                smallest_i=i;
            }
        }
        swap(smallest_i,j);
        if (j<arr.length-1){
            j++;
            setTimeout(selectionSort,speed,j);
        }
        
}
function bubbleSort(){
    let flag=false;
    for(let i = 0; i < arr.length-1; i++){
        if (arr[i]>arr[i+1]){
            swap(i,i+1);
            flag=true;      
        }}
        if (flag){
            setTimeout(bubbleSort,speed);
        }
}
function quickSort(low,high){
    if (low<high){    
    let k=low-1;
    let pivot=arr[high];
    for (let i=low;i<=high;i++){
        if (arr[i]<=pivot){
            k++;
            swap(k,i);
        }
    }
    setTimeout(quickSort,speed,low,k-1);
    setTimeout(quickSort,speed,k+1,high);
}
}
  
