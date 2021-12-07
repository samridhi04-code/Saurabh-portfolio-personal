$(document).ready(function(){
  $(".see").click(function(){
    $(this).prev().toggle();
    
    if($(this).text()=='See less'){
      $(this).text('See more');
    }
    else{
    $(this).text('See less');
    }
  });
});


function validation(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("gmail").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  var text;


error_message.style.padding = "20px";

if (name.length < 5){
  text = "Please Enter Your Valid Name";
  error_message.innerHTML = text;
  return false;
}
  if (email.indexOf("@") == -1 || email.length < 6 ){
    text = "Please Enter Valid Your Email Id";
    error_message.innerHTML = text;
    return false;
  }
    if (message.length <= 100){
      text = "Please Enter More Than 100 Characters";
      error_message.innerHTML = text;
      return false;
    }
  alert("Form Submitted Successfully!");
  return true;

}
