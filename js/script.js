// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    $(".btn-navbar").click(function(){
     console.log("hellffo")
     $(".phonemenu").toggleClass("inactive")
     $(".btn-navbar").toggleClass("hamActive")
    })

    var backgroundnumber = Math.floor(Math.random() * 7)+1;
    $(".intro").css("background", "url('backdrop" + backgroundnumber + ".jpg') no-repeat center center fixed");


    $(".seefaved").click(function(){
      console.log("faved")
      $(".showfaved").css("display","block")
      $(".showcompleted").css("display","none")
      $(".showadded").css("display","none")
      $(".seefaved a").addClass("current")
      $(".seecompleted a").removeClass("current")
      $(".seeadded a").removeClass("current")

    })
    $(".seecompleted").click(function(){
      console.log("completed")
      $(".showfaved").css("display","none")
      $(".showcompleted").css("display","block")
      $(".showadded").css("display","none")
      $(".seefaved a").removeClass("current")
      $(".seecompleted a").addClass("current")
      $(".seeadded a").removeClass("current")
    

    })
    $(".seeadded").click(function(){
      console.log("added")
      $(".showfaved").css("display","none")
      $(".showcompleted").css("display","none")
      $(".showadded").css("display","block")
      $(".seefaved a").removeClass("current")
      $(".seecompleted a").removeClass("current")
      $(".seeadded a").addClass("current")
 
    })
});


