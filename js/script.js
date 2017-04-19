var allStrings []; 
var total = 0; 
var sum = 0; 

$(#'submit').on('click', startAdd); 
$(#reset').on('click', clearForm); 
  
function startAdd() {
  var addData = $("#textInput").val();
  if ($.isNumeric(addData)){
    total ++; 
    sum += parseFloat(addData); 
    updateNumbers(); 
  }
  else {
    allStrings.push(addData); 
    updateText(addData); 
  }
  $('#textInput').val(''); 
  event.preventDefault(); 
} 

function updateNumbers () {
  var average = sum/total; 
  if(isNaN(average)) {
    average = 0; 
  }
  $('#count').text(total); 
  $('#average').text(average); 
  $('#sum').text(sum); 
}

funtion updateText(addData) {
  
  var text = addData.toLowerCase().split(" "); 
  
  $('#conCat').text(textString.join(' ')); 
  $('#totalStrings').text(textString.length); 
}
