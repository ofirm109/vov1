var fName = "";
var lName = "";
var Email = "";
var cantry = "";
var age = 0;
var gender = "";



$(document).ready(function () {

    $("#buttonHead").click(function () {
        $('html, body').animate({
            scrollTop: $("#myFrom").offset().top
        }, 500);
    });

    $(".btnNext").click(function () {
        fName = $("#fname").val();
        lName = $("#lname").val();
        Email = $("#Email").val();
        cantry = $("#contry option:selected").text();
        age = $("#year").val();
        gender = $(".jender input[type='radio']:checked").val();
        
        if (fName != "") {
            if (lName != "") {
                if (Email != "") {
                    if (cantry != "היבשת שלך") {
                        if (gender == "זכר" || gender == "זכר") {
                            if ($('input[id="AC"]:checked').val()=="true") {
                                alert("הצלחה")



                            }         
                        }
                    }
                }
            }
        }


    });

});