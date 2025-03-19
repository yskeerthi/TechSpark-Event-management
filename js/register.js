var data = {
    name:"",
    rollno:"",
    college:"",
    email:"",
    phone:"",
    tech:"",
}
function common(event)
{
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
function Tech(event)
{
data.tech=event.target.value;
}
function submit_data(data)
{
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
    console.log(data);
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
    nm5.innerHTML = data.tech;
}
else{
    alert('PLEASE FILL IN ALL FIELDS');
}    
}


