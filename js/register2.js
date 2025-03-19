var count = 0;
var count1=0;

function hide() {
    var h = document.getElementsByClassName("t2")[0];
    h.style.height="80%";
}
function hide1() {
    var h = document.getElementsByClassName("n2")[0];
    h.style.height="80%"
}
function bye(){
    var h = document.getElementsByClassName("t2")[0];
    h.style.height = '0';
}
function bye1(){
    var h = document.getElementsByClassName("n2")[0];
    h.style.height = '0';
}
var data = {
    name:"",
    rollno:"",
    college:"",
    email:"",
    phone:"",
    tevent:[],
    nevent:[],
}
function common(event){
if(event.target.name == 'NAME'){
data.name=event.target.value;
}else if(event.target.name == 'ROLLNO'){
data.rollno=event.target.value;
}else if(event.target.name=='COLLEGE'){
data.college=event.target.value;
}
else if(event.target.name=='EMAIL'){
data.email=event.target.value;
}
else if(event.target.name=='PHONE'){
data.phone=event.target.value;
}
}
function common1(element){
    let ele = document.getElementsByClassName(element)[0];
    if(ele.checked === true){
        console.log(count)
        data.tevent.push(ele.value);
        count+=1;
    }else{
        const index =data.tevent.indexOf(ele.value);
        if (index > -1) {
            data.tevent.splice(index, 1);
        }
        count-=1;
    }
    // var l = data.tevent.length();
    // console.log(l);
    document.getElementsByClassName("two")[0].innerHTML = `PAY ${(count*100)+(count1*50)}`;
}
function common2(element){
    let ele = document.getElementsByClassName(element)[0];
    if(ele.checked === true){
        console.log(count)
        data.nevent.push(ele.value);
        count1+=1;
    }else{
        const index =data.nevent.indexOf(ele.value);
        if (index > -1) {
            data.nevent.splice(index, 1);
        }
        count1-=1;
    }
    document.getElementsByClassName("two")[0].innerHTML = `PAY ${(count*100) +(count1*50)}`;
}
function submit_data(){
const r1=document.querySelectorAll('.i input');
let allfilled = true;
r1.forEach(input =>{
    if(input.value.trim() === ''){
        allfilled = false;
    }
});
if(allfilled){
document.getElementsByClassName('register1')[0].style.display = 'none'
    let dis = document.getElementById('payh');
    dis.style.display = 'block';
   let nm = document.getElementsByClassName('pay3')[0];
    nm.innerHTML = data.name;
    let nm1= document.getElementsByClassName('pay3')[1];
    nm1.innerHTML = data.rollno;
    let nm2 = document.getElementsByClassName('pay3')[2];
    nm2.innerHTML = data.college;
    let nm3 = document.getElementsByClassName('pay3')[3];
    nm3.innerHTML = data.email;
    let nm4 = document.getElementsByClassName('pay3')[4];
    nm4.innerHTML = data.phone;
    let nm5 = document.getElementsByClassName('pay3')[5];
    data.tevent.push(data.nevent);
    nm5.innerHTML = data.tevent;
}
else{
    alert('PLEASE FILL IN ALL FIELDS');   
}
}

