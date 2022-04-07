// Adding current day to top of page
$("#currentDay").text(moment().format('MMMM Do YYYY'));

//Declaring save buttons
const saveButton = $(".saveBtn")
// On click, save text area contents of items to localStorage
saveButton.on("click", function(event){
    event.preventDefault();
    var hour = $(this).siblings(".hour").text();
    var items = $(this).siblings(".items").val();
    localStorage.setItem(hour,items);
});
// function for loading localstorage 
function getSavedItems() {
    $(".hour").each(function(){
        var currHour = $(this).text();
        var currItem = localStorage.getItem(currHour);
        if (currItem !== null){
            $(this).siblings(".items").val(currItem);
        }
    });
}
function hourBlockFormatting () {
    var hour = moment().hours();
    $(".time-block").each(function(){
        var curHour = parseInt($(this).attr("id"));

    if (curHour > hour) {
        $(this).addClass("future");
    } else if (curHour === hour) {
        $(this).addClass("present");
    } else {
        $(this).addClass("past");
    }
    })

}

hourBlockFormatting();

getSavedItems();

