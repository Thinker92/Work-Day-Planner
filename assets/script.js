// Adding current day to top of page
$("#currentDay").text(moment().format('MMMM Do YYYY'));

//Declaring save buttons
const saveButton = $(".saveBtn")
saveButton.on("click", function(event){
    event.preventDefault();
    var hour = $(this).siblings(".hour").text();
    var items = $(this).siblings(".items").val();
    localStorage.setItem(hour,items);
});

function getSavedItems() {
    $(".hour").each(function(){
        var currHour = $(this).text();
        var currItem = localStorage.getItem(currHour);
        if (currItem !== null){
            $(this).siblings(".items").val(currItem);
        }
    });
}

getSavedItems();