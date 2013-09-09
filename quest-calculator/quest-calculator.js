questCalculator = {
    
}

$(document).ready(function () {
    $('#test').text('TEST');
    $('#test').click(function (data) {
        $(data.target).text($(data.target).text() + "1");  
    });
});
