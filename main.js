let arr=[];
let fruits;
let speed=2000/document.getElementById("spd").value;
let time=0;
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
    document.getElementById("main").innerHTML="";
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
function hide(){
    document.getElementById("start").style.display="none";
    document.getElementById("reset").style.display="none";
    document.getElementById("inp").style.display="none";
    document.getElementById("algos").style.display="none";
}
function start(){
    hide();
    if (document.getElementById("algos").value=="sel"){
        document.getElementById("status").innerHTML="Running Selection Sort";
        selectionSort(0);

        
    }
    if (document.getElementById("algos").value=="bub"){
        document.getElementById("status").innerHTML="Running Bubble Sort";
        bubbleSort();
    }
    if (document.getElementById("algos").value=="ins"){
        document.getElementById("status").innerHTML="Running Insertion Sort";
        insertionSort(0);
    }
    if (document.getElementById("algos").value=="quick"){
        document.getElementById("status").innerHTML="Running Quick Sort";
        quickSort(0,arr.length-1);
    }
}
function reset(){
    arr=[];
    document.getElementById("status").innerHTML="";
    document.getElementById("start").style.display="inline";
    visualiser();
}
function done(func){
    clearInterval(func);
    document.getElementById("status").innerHTML="done";
    document.getElementById("inp").style.display="inline";
    document.getElementById("reset").style.display="inline";
    document.getElementById("algos").style.display="inline";
    time=0;
}
function swap(x,y){
    chngspeed();
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
        else{
            done();
        }
        
}
function bubbleSort(){
    let func=setInterval(function(){
    let flag=false;
    for(let i = 0; i < arr.length-1; i++){
        if (arr[i]>arr[i+1]){
            let temp=document.getElementById(arr[i]).style.left;
        document.getElementById(arr[i]).style.left=document.getElementById(arr[i+1]).style.left;
        document.getElementById(arr[i+1]).style.left=temp;
        temp=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
            flag=true;      
        }}
        if (!flag){
            done(func);
        }
    },speed);
}
function insertionSort(j){
    let func=setInterval(function(){
    let flag=false;
    for(let i = 0; i < j; i++){
        if (arr[i]>arr[i+1]){
            swap(i,i+1);
            flag=true; 
        }
        }
        if (!flag){        
        j++;
        }
        if (j>=arr.length){
            done(func);
        } 
    },speed);
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
    else{
        done();
    }
}
  
