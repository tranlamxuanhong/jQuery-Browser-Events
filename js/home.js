$(document).ready(function () {
    $('#akronInfoDiv').fadeOut();
    $('#minneapolisInfoDiv').fadeOut();
    $('#louisvilleInfoDiv').fadeOut();

    $('#akronButton').click(function() {
        $('#mainInfoDiv').fadeOut();
        $('#akronInfoDiv').fadeIn();
        $('#minneapolisInfoDiv').fadeOut();
        $('#akronWeather').hide();
        $('#louisvilleInfoDiv').fadeOut();
    });

    $('#akronWeatherButton').click(function(){
      $('#akronWeather').toggle('fast');
    });

    $('#minneapolisButton').click(function() {
      $('#minneapolisInfoDiv').fadeIn();
      $('#mainInfoDiv').fadeOut();
      $('#akronInfoDiv').fadeOut();
      $('#minneapolisWeather').hide();
      $('#louisvilleInfoDiv').fadeOut();
    });

    $('#minneapolisWeatherButton').click(function() {
      $('#minneapolisWeather').toggle('fast');
    });

    $('#louisvilleButton').click(function() {
      $('#louisvilleInfoDiv').fadeIn();
      $('#mainInfoDiv').fadeOut();
      $('#minneapolisInfoDiv').fadeOut();
      $('#akronInfoDiv').fadeOut();
      $('#louisvilleWeather').hide();
    });

    $('#louisvilleWeatherButton').click(function() {
      $('#louisvilleWeather').toggle('fast');
    });

    $('tr:not(:first-child)').hover(
      function() {
        $(this).css('background-color','WhiteSmoke');
      }, function() {
        $(this).css('background-color','');
      }
    )

});
