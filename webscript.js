var slideIndex = 0;
/*showSlides();b */
//code for file oploader in commsission page

//accordion sections
$(document).ready(function() {
    $( "#videos" ).accordion();
    collapsible: true;
} );


/*function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slideshow");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
*/
var accessToken = "BQDw4EybgyvX_0dwcrIuJ_P_EeB4D4aPGJRMwaOyF1caOu_6CKrhZHiuTXQM-tqjBrJbfjRMLAo7VEAe7nRxkqpq_t8diGOWrp9YZpAI-OZRN1rC68Q3oRVZGOcvv3rPBa2uGsG_Un_NlV1u26MUZA";
$.ajax({
    url: 'https://api.spotify.com/v1/playlists/1Z4ChgkSraU0Ku5mMFkPt2',
    type: 'GET',
    headers: {
        'Authorization' : 'Bearer ' + accessToken
},
success: function(data) {
    $("#CL").html("");
    $.getJSON('https://api.spotify.com/v1/playlists/1Z4ChgkSraU0Ku5mMFkPt2',function(data)
    {$.each(data,function(){
        $.each(this, function(key,value){
            $("#CL").append(
            "<p>" + value.playlist.tracks.track.artists + "</p>");
        });

    });

    });
}
});


$.ajax({
    type: "get",
    url: "generated.json",
    beforeSend: function() {
        $("#JSHP").html("Loading...");
    },
    dataType: "json",
    success: function(data) {
        $("#JSHP").html("");
        $.getJSON("generated.json", function (data) {
            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("#JSHP").append(
                        html += value.name);
                });
            });
        })
    });