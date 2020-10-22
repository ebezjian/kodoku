$(document).ready(function() {
  $("#furniture").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const address = $("input#address").val();
    const chairs = $("input:radio[name=chairs]:checked").val();
    const fabric = $("#fabric").val();
    const date = $("#delivery").val();
    const color= $("#color").val();
    // we are creating variables and storing them to be submitted into the receipt

   
    $(".name").text(name);
    $(".address").text(address);
    $(".chairs").text(chairs);
    $(".fabric").text(fabric);
    $(".delivery").text(date);
    $(".color").text(color);
    
    $("#receipt").show();
  });
});