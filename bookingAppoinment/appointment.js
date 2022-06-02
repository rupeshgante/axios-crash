var sub=document.getElementById('submit');
sub.addEventListener('click',additems);

function additems(e){
    e.preventDefault();
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const phone=document.getElementById('phone').value;
   const user={
       name : name,
       email : email,
       phone :phone,
   }; 
   
   axios.post('https://crudcrud.com/api/06c018342675479398d2e9442a5f4f0d/appointmentData',user)
        .then((response)=>{
              show(response.data);
              console.log(response);
        })
        .catch(err=>console.log(err));


}

document.addEventListener('DOMContentLoaded',()=>{

    axios.get('https://crudcrud.com/api/06c018342675479398d2e9442a5f4f0d/appointmentData')
    .then((response)=>{
    for(var i=0;i<response.data.length;i++){
        show(response.data[i]);
    }
    }); 
    });

 function show(user){
    // e.preventDefault();
    var userlist=document.getElementById('listOfPeople')
     
    // console.log(d);
    var li=document.createElement('li');
    li.className='item';
    li.id='li'+user.email;
    li.appendChild(document.createTextNode(`name:${user.name} email:${user.email} Phone :${user.phone}`));
    var edit=document.createElement('input');
    edit.className='edit';
    edit.id='edit';
    
    edit.type='button';
    edit.value='EDIT';
    edit.style.border = "2px solid green";
    li.appendChild(edit);
   edit.addEventListener('click',()=>{
       var x=document.getElementById('edit');
     var n=document.getElementById('name');
     var e=document.getElementById('email');
     n.value=d.name;
     e.value=d.email;
    // localStorage.removeItem('userdetails'+user.email);
        li.remove();
   })

    var del=document.createElement('input');
    del.className='delete';
    del.id='delete';
    
    del.type='button';
    del.value='DELETE';
    del.style.border = "2px solid red";
    li.appendChild(del);
    del.addEventListener('click',()=>{
        //localStorage.removeItem('userdetails'+user.email);
        li.remove();
    });
    userlist.appendChild(li);
}

// function removeFromScreen(email)
// {
  
// var parent=document.getElementById('listOfPeople');
// var child=document.getElementById('li'+email);
// parent.removeChild(child);
// }