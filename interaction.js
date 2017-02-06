// console.clear();




$(document).ready(function(){
    console.log("Welcome to this JS experiment!");
    var img3 = $('.img3');
    var img2_5 = $('.img2_5');
    var img2 = $('.img2');
    var img1 = $('.img1');
    var imgset = $('.imgset');
    var imgsetbg = $('.imgsetbg');
    var overlay = $('.overlaytext');
 
    

    $('#brand1').click(function() {
   
    });
    $('#gulf_g150').click(function (e) {
      e.preventDefault();
      console.log("a");
      $('.modelbody').css("display","none"); 
      $('#gulf_g150_body').css("display","block"); 
    });
    // $('#gulf_g280').click(function (e) {
    //   e.preventDefault();
    //   console.log("a");
    //   $('.modelbody').css("display","none"); 

    //   $('#gulf_g280_body').css("display","block"); 
    // });
    // $('#gulf_g450').click(function (e) {
    //   e.preventDefault();
    //   $('.modelbody').css("display","none"); 
    //   $('#gulf_g450_body').css("display","block"); 
    // });
    // $('#gulf_g500').click(function (e) {
    //   e.preventDefault();
    //   console.log("a");
    //   $('.modelbody').css("display","none"); 
    //   $('#gulf_g500_body').css("display","block"); 
    // });
    // $('#gulf_g550').click(function (e) {
    //   e.preventDefault();
    //   console.log("a");
    //   $('.modelbody').css("display","none"); 
    //   $('#gulf_g550_body').css("display","block"); 
    // });
    // $('#gulf_g600').click(function (e) {
    //   e.preventDefault();
    //   console.log("a");
    //   $('.modelbody').css("display","none"); 
    //   $('#gulf_g600_body').css("display","block"); 
    // });
    // $('#gulf_g650').click(function (e) {
    //   e.preventDefault();
    //   console.log("a");
    //   $('.modelbody').css("display","none"); 
    //   $('#gulf_g650_body').css("display","block"); 
    // });
    // $('#gulf_g650er').click(function (e) {
    //   e.preventDefault();
    //   console.log("a");
    //   $('.modelbody').css("display","none"); 
    //   $('#gulf_g650er_body').css("display","block"); 
    // });



    $('ul.modelselectwrap > li').click(function (e) {
      e.preventDefault();
      $('ul.modelselectwrap > li').removeClass('active');
      $(this).addClass('active');
    });


    // var c = document.getElementById("route_jfk_london");
    
    // var ctx = c.getContext("2d");
    //     ctx.beginPath();
    //     ctx.lineWidth="5";
    //     ctx.strokeStyle="#00f133";
    //     ctx.strokeStyle="#00a2ff";
    //     // ctx.shadowColor = "white";
    //     ctx.shadowOffsetX = 0; 
    //     ctx.shadowOffsetY = 1;
    //     ctx.bezierCurveTo(10, 130, 50, 50, 130, 90);
    //     ctx.moveTo(10,130);
    //     ctx.lineCap = 'round';
    //     // ctx.lineTo(130,90); 
    //     ctx.stroke();

    overlay.mousemove(function(e){
        var amountMovedX = (e.pageX * -1 / 60);
        var amountMovedY = (e.pageY * -1 / 60);
      imgset.css({
      '-webkit-transform' : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
      '-moz-transform'    : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
      '-ms-transform'     : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
      '-o-transform'      : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
      'transform'         : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)'
      });
    });
    overlay.mousemove(function(e){
        var amountMovedX = (e.pageX * -1 / 40);
        var amountMovedY = (e.pageY * -1 / 40);
      imgsetbg.css({
      '-webkit-transform' : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
      '-moz-transform'    : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
      '-ms-transform'     : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
      '-o-transform'      : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
      'transform'         : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)'
      });
    });
    overlay.mousemove(function(e){
        var amountMovedX = (e.pageX * -1 / 3);
        var amountMovedY = (e.pageY * -1 / 20);
      img3.css({
      '-webkit-transform' : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
      '-moz-transform'    : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
      '-ms-transform'     : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
      '-o-transform'      : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
      'transform'         : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)'
      });

    });
    overlay.mousemove(function(e){
        var amountMovedX = (e.pageX * -1 / 9);
        var amountMovedY = (e.pageY * -1 / 20);
      img2_5.css({
      '-webkit-transform' : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
      '-moz-transform'    : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
      '-ms-transform'     : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
      '-o-transform'      : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
      'transform'         : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)'
      });

    });
    overlay.mousemove(function(e){
        var amountMovedX = (e.pageX * -1 / 6);
        var amountMovedY = (e.pageY * -1 / 20);
      img2.css({
      '-webkit-transform' : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
      '-moz-transform'    : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
      '-ms-transform'     : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
      '-o-transform'      : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
      'transform'         : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)'
      });

    });
    


    overlay.mousemove(function(e){
        var amountMovedX = (e.pageX * -1 / 12);
        var amountMovedY = (e.pageY * -1 / 20);
      img1.css({
        '-webkit-transform' : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
        '-moz-transform'    : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
        '-ms-transform'     : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
        '-o-transform'      : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
        'transform'         : 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)'
      });

    });



});




