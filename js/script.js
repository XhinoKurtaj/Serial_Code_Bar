
$(function(){
  $("#area1").attr("maxlength", "3");
  $("#area2").attr("maxlength", "5");
  $("#area3").attr("maxlength", "3");
  $("#area4").attr("maxlength", "4");
  $("#area5").attr("maxlength", "6");
  $("#area6").attr("maxlength", "7");
  $("#area7").attr("maxlength", "3");
  $("#area8").attr("maxlength", "1");
  $("#area9").attr("maxlength", "2");
  
$("textarea").css({
  height: '30px',
  width: '70px',
  textAlign: 'center',
  resize: 'none',
  overflow: 'hidden',
  border: '2px solid green'
});


  $("textarea").keyup(function(event){
    if($(this).val().length == $(this).attr('maxlength')){
    $(this).next('textarea').focus().css('background-color','gray');
    $(this).focusout().css('background-color','white');
  }
  });
});
