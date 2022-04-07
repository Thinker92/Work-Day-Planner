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
    // For each time-block with class Hour
    $(".hour").each(function(){
        // Set currHour to current time
        var currHour = $(this).text();
        // Set currItem to current item from localStorage
        var currItem = localStorage.getItem(currHour);
        // If current item exists in localstorage, set the value of current item to that value
        if (currItem !== null){
            $(this).siblings(".items").val(currItem);
        }
    });
}
function hourBlockFormatting () {
    // Setting current hour to hour
    var hour = moment().hours();
    // console.log(hour)
    // For each time block,
    $(".time-block").each(function(){
        var curHour = parseInt($(this).attr("id"));
        // If current timeblock is greater than current hour, add future class
    if (curHour > hour) {
        $(this).addClass("future");
        // If current timeblock is equal to current hour, add present class
    } else if (curHour === hour) {
        $(this).addClass("present");
        // If current timeblock is less than current hour, add past class
    } else {
        $(this).addClass("past");
    }
    })

}
// Calling formatting function
hourBlockFormatting();
// Calling function to load local storage
getSavedItems();

