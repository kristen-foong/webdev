$(document).ready(function(){

  $(".kgit-item").click(function() {
    var id = $(this).attr('id');
    var vh = $(window).height();
    var vw = $(window).width();


    /** menu **/
    $(".kgit-item").css({
      "opacity" : "0.5"
    });
    $(this).css({
      "opacity" : 1
    });


    /** display descriptions **/
    $(".kgit-desc").css({
      "opacity": "0",
      "transform" : "translate(100px, 0px)",
      "z-index" : "1"
    });
    $("#" + id + "-desc").css({
      "opacity": "1",
      "transform" : "translate(0px, 0px)",
      "z-index" : "5"
    });


    /** change background position on click **/
    /** disable colorchange animation if wanting this feature **/
    /*
    if(id == "about"){
    	$(".kgit-bg").animate({
      	top : 0,
        left: 0
      });
    }else if(id == "skills"){
    	$(".kgit-bg").animate({
      	top : -vh,
        left: 0
      });
    }else if(id == "exp"){
    	$(".kgit-bg").animate({
      	top:0,
      	left : -vw
      });
    }else if(id == "projects") {
    	var halfvw = vw/2;
      var halfvh = vh/2;
    	$(".kgit-bg").animate({
      	top: -halfvh,
      	left : -halfvw
      });
    }else{
    	$(".kgit-bg").animate({
      	top : -vh,
        left : -vw
      });
    }
    */
  });

});
