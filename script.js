// compute() function will calculate and display the total interest amount based on the intpu
function compute()
{
    var principalElement = document.getElementById("principal");
    var principal = principalElement.value;
    // If value is negative or empty the display error message
    if ( principal == "" || principal <= 0 ){
        alert("Enter a positive number")
        principalElement.focus();
        return false;
    }
    // Read and calculate values
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var amount = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);

    // Display the results
    document.getElementById("result")
            .innerHTML="If you deposit \<mark\>"+principal+"\</mark\>,\<br\>at an interest rate of \<mark\>"+rate+"%\</mark\>\<br\>You will receive an amount of \<mark\>"+amount+"\</mark\>,\<br\>in the year \<mark\>"+year+"\</mark\>\<br\>"
    
    return true;
}

// UpdateRate() function will automatically display the seletected slider rate
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval+"%";
}
        