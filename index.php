<!doctype html> 
<html lang="en"> 
<head> 
    <meta charset="UTF-8">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <link rel="apple-touch-icon" href="images/custom-icon.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>

    <title> > Private Jet Pricing Breakdown  </title>
  

    <link href='https://fonts.googleapis.com/css?family=Josefin+Sans:400,600,700,300' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>


    <!-- External Libraries & Functionality-->
    <!-- <link rel="stylesheet" type="text/css" href="bootstrap.css"> -->
    <link rel="stylesheet" type="text/css" href="animate.css">
    
   
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.js"></script>
    <script src="//code.jquery.com/jquery-2.1.3.min.js"></script>

    <script src="interaction.js"></script>
    
    <script src="pace.min.js"></script>
    
    <!--  <script src="currencyconverstion.min.js"></script> -->
    <script src="modernizr.custom.js"></script>
    <link rel="stylesheet" type="text/css" href="overlaytransition.css">
    <link rel="stylesheet" type="text/css" href="style.css">
    

     

     
</head>
<body>
    <div class="container homepage">
      <div class="layer img1"></div>
      <div class="layer img2"></div>
      <div class="layer img2_5"></div>
      <div class="layer img3"></div>
      <div class="overlaytext">
        <div class="title">
        <!-- <img src="img/catreuslogo.png" height="200px";><br><br> -->
          PRIVATE AVIATION<p style="margin:0;font-size:30px">PRICING BREAKDOWN</p>
          <div class="subtitle">
          Select a manufacturer.<br>
          
            <div class="decowrap">
                <div class="decowraptop1"></div>
                <div class="decowraptop2"></div>
                <div class="decowrapbottom"></div>
            </div>
          </div>
          <div class="brands">
            <img id="trigger-overlay" class="brandimage_N" src="brand1.png" alt="" style="height:30px;opacity: 0.2;">
            <img id="trigger-overlay2" class="brandimage_N" src="brand2.png" alt="" style="height:30px;opacity: 0.2;">
            <img id="trigger-overlay3" class="brandimage_N" src="brand3.png" alt="" style="height:30px;opacity: 0.2;">
            <img id="trigger-overlay5" class="brandimage_N" src="brand5.png" alt="" style="height:40px;opacity: 0.2;">
            <img id="trigger-overlay6" class="brandimage_N" src="brand6.png" alt="" style="height:30px;opacity: 0.2;">
             <br><a style="opacity: 0.6;font-size: 30px;"">></a>  
             <img id="trigger-overlay4" class="brandimage" src="brand4.png" alt="" style="height:30px;">
             <a style="opacity: 0.6;font-size: 30px;""><</a>            
          </div>
        </div>
        <div class="footerdetailshome">
                  Created and Designed by Faysal Mekhid © 2016 for Catreus Ltd. 
        </div>
      </div>

    </div> 
<!--==============================================================================-->
<!--BEGINNING OF ITEMS============================================================ -->
<!--==============================================================================-->


<!--==============================================================================-->
<!--OVERLAY 1 ====================================================================-->
<!--==============================================================================-->
    <div class="overlay overlay-contentscale overlay-1">
      <button type="button" class="overlay-close">Close</button>
        <div class="overlaytext"  style="">
            <div class="topbar"> > BACK TO HOME SCREEN</div>
            <div class="topbg">
              <div class="topbgleft"></div>
              <div class="topbgright"></div>
            
            <img class="brandimage" src="brand1_w.png" alt="" style="height:50px;opacity:1;z-index:3;margin-top:60px;"><br>
            <p style="font-size:15px;color:#F0F0EF;margin-bottom:10px;"></p>
            <ul class="modelselectwrap" style="width:500px;">
              <li id="" class="modelselectlist active" style="width:20%;">2000s</li>
              <li id="" class="modelselectlist" style="width:20%;">900lx</li>
              <li id="" class="modelselectlist" style="width:20%;">5x</li>
              <li id="" class="modelselectlist" style="width:20%;">7x</li>
              <li id="" class="modelselectlist" style="width:20%;">8x</li>
            </ul>
            </div>
            <br><br>
      </div>
    </div>
<!--==============================================================================-->
<!--OVERLAY 2 ====================================================================-->
<!--==============================================================================-->
    <div class="overlay overlay-contentscale overlay-2">
      <button type="button" class="overlay-close-2">Close</button>

        
    </div>
<!--==============================================================================-->
<!--OVERLAY 3 ====================================================================-->
<!--==============================================================================-->
    <div class="overlay overlay-contentscale overlay-3">
      <button type="button" class="overlay-close-3">Close</button>
        
    </div>
<!--==============================================================================-->
<!--OVERLAY 5 ====================================================================-->
<!--==============================================================================-->    
    <div class="overlay overlay-contentscale overlay-5">
      <button type="button" class="overlay-close-5">Close</button>
        
    </div>
<!--==============================================================================-->
<!--OVERLAY 6 ====================================================================-->
<!--==============================================================================-->
    <div class="overlay overlay-contentscale overlay-6">
      <button type="button" class="overlay-close-6">Close</button>
        
    </div>

<!--==============================================================================-->
<!--OVERLAY 4 ====================================================================-->
<!--==============================================================================-->
    <div class="overlay overlay-contentscale overlay-4">
        <button type="button" class="overlay-close-4">Close</button>
        <?php require("m_gulfstream.php"); ?>

    <!-- Content End -->
    </div>


   


      
        
        
     

    <script src="classie.js"></script>
    <script src="overlayfunction.js"></script>
    <script src="currency.js"></script>
    <script src="grid.js"></script>
    <script>
      $(function() {
        Grid.init();
      });
    </script>

</body>
</html>