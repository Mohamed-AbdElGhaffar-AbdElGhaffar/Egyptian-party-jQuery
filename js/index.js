$(document).ready(function () {
    $('.spinner').fadeOut(1000, function () {
        $('#loading').fadeOut(1000, function () {
            $('body').css('overflow','auto');
            $('#loading').remove();
        })
    })

    

    // when click on (☰ open) will open the side bar
    $("#Home .home-content span").click(function () {
        $('#leftMenu').animate({width: 250}, 500)
        $("#Home .home-content").animate({"margin-left": "250px"}, 500);
    })
    // when click on (x in side bar) will close the side bar
    $("#Home #leftMenu .btnClose").click(function () {
        $('#leftMenu').animate({width: 0}, 500)
        $("#Home .home-content").animate({"margin-left": "0px"}, 500);
    })
    // when click on alink in side bar went to its section
    $(window).scroll(function() {

        $("#leftMenu a[href^='#']").click(function(e) {
            let aHref = e.target.getAttribute('href');
            let sectionOffSet = $(aHref).offset().top;
            $("body").animate({scrollTop:sectionOffSet},3000)
        })
    })

    $("#sliderDown h3").click(function (e) {
        $("#sliderDown p").not($(this).next()).slideUp(500);
        $(this).next().slideToggle(500);
        
    })


    let intervalId;

    function updateRemainingTime() {
    // The date of the current day
    let today = new Date();

    // The target date
    let targetDate = new Date('10/25/2023');

    // Calculates the difference between dates in milliseconds
    let timeDiff = targetDate.getTime() - today.getTime();

    // Calculating days, hours, minutes and seconds
    let daysRemaining = Math.floor(timeDiff / (1000 * 3600 * 24));
    let hoursRemaining = Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600));
    let minutesRemaining = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60));
    let secondsRemaining = Math.floor((timeDiff % (1000 * 60)) / 1000);

    window.document.getElementById('daysRemaining').innerHTML = `${daysRemaining} D`;
    window.document.getElementById('hoursRemaining').innerHTML = `${hoursRemaining} h`;
    window.document.getElementById('minutesRemaining').innerHTML = `${minutesRemaining} m`;
    window.document.getElementById('secondsRemaining').innerHTML = `${secondsRemaining} s`;

    }

    // Time update every second
    intervalId = setInterval(updateRemainingTime, 1000);



    $('textarea').keyup(function() {
        let length = $(this).val().length;
        let massageChars = 100 - length;
        if(massageChars<=0)
        {
            $("#char").text("your available character finished");
        }
        else{
            $("#char").text(massageChars);
        }
    });
})


