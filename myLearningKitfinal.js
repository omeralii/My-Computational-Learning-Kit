function p01Func() {

  /* in Ex2, add a getElementById here to get the "probelm" div and
     set its innerHTML to <p>I'm looking for a type of ...</p>
  */
document.getElementById('problem').innerHTML="<p> Receive two numbers as sides of a rectangle and output the rectangle’s perimeter.</p>"


document.getElementById('js').setAttribute('src','images/prob1.png');
document.getElementById('js').style.display="none";


document.getElementById('flowchart').setAttribute('src','images/img1.jpg');
document.getElementById('flowchart').style.display="none";

document.getElementById('another').setAttribute('src','images/dosa/dosa2.jpg');
document.getElementById('another').style.display="none";



  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
}


function zoomIn(){
document.getElementById("flowchart").style.width="200%";
}

function zoomOut(){
  document.getElementById("flowchart").style.width="100%";
}




function checkUncheck1(){
  if (document.getElementById("check1").checked==true) {

document.getElementById("flowchart").style.display="inline";
  }
  else {

document.getElementById("flowchart").style.display="none";
  }
}


function checkUncheck2(){
  if (document.getElementById("check2").checked==true) {
     // add a getElementById here to get "js" img and
     // set the display property of its style to "inline"
document.getElementById("js").style.display="inline";

  }
  else {
     // add a getElementById here to get "js" img and
     // set the display property of its style to "none"
document.getElementById("js").style.display="none";

  }
}


/* in Ex4, or step 4 of Ex2, you need to create function
   checkUncheck3, which is similar to checkUncheck 1 and 2
*/



/* in Ex4, create function p02Func similar to p01Func */
function p02Func() {
  document.getElementById('problem').innerHTML="<p>receive three numbers and store them in memory spaces called a, b, and c as three semi-axes of an ellipsoid, and calculate and output the volume of this ellipsoid</p>"


  document.getElementById('js').setAttribute('src','images/prob2.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/img2.jpg');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}


function checkUncheck3(){
  if (document.getElementById("check3").checked==true) {
     // add a getElementById here to get "js" img and
     // set the display property of its style to "inline"
document.getElementById("another").style.display="inline";

  }
  else {
     // add a getElementById here to get "js" img and
     // set the display property of its style to "none"
document.getElementById("another").style.display="none";

  }
}

function p03Func() {
  document.getElementById('problem').innerHTML="<p>receive three numerical coefficients of a quadratic equation (store them in memory spaces called a, b, and c) and calculate and output its roots.</p>"


  document.getElementById('js').setAttribute('src','images/prob3.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/img3.jpg');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}

function p04Func() {
  document.getElementById('problem').innerHTML="<p> receive three numerical coefficients of a quadratic equation and determine if it has two distinct real roots, one root, or no roots in real numbers.</p>"


  document.getElementById('js').setAttribute('src','images/prob4.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/img4.jpg');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}

function p05Func() {
  document.getElementById('problem').innerHTML="<p> receive a number and map it to a letter grade based on York standard</p>"


  document.getElementById('js').setAttribute('src','images/prob5.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/img5.jpg');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}

function p06Func() {
  document.getElementById('problem').innerHTML="<p> outputs whether the input is positive or negative until a zero is received. When a zero is received, the button is disabled </p>"


  document.getElementById('js').setAttribute('src','images/prob6.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/img6.jpg');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}

function p07Func() {
  document.getElementById('problem').innerHTML="<p> receive a positive number and output each digit separately. For instance, if the input is 692, the program should output 2, 9, 6</p>"


  document.getElementById('js').setAttribute('src','images/prob7.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/img7.jpg');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}
function p08Func() {
  document.getElementById('problem').innerHTML="<p> receive a positive number and output how many of its digits are equal to 7. For instance, if the input is 772, the program should output 2, because there are two sevens there.</p>"


  document.getElementById('js').setAttribute('src','images/prob8.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/img8.jpg');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/img8.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}
function p09Func() {
  document.getElementById('problem').innerHTML="<p> receive a positive number and output sum of its digits. For instance, if the input is 63932, the program should output 23, because 6+3+9+3+2 is 23.</p>"


  document.getElementById('js').setAttribute('src','images/prob9.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/img9.jpg');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}
function p10Func() {
  document.getElementById('problem').innerHTML="<p> receive a positive number and output yes if it's equal to its reverse; otherwise, output no</p>"


  document.getElementById('js').setAttribute('src','images/prob10.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/img10.jpg');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}
function p11Func() {
  document.getElementById('problem').innerHTML="<p> receive a positive number, as n, and output n! (n Factorial)</p>"


  document.getElementById('js').setAttribute('src','images/prob11.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/img11.jpg');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}
function p12Func() {
  document.getElementById('problem').innerHTML="<p> input an integer greater than 1, as n, and output the first n values of the Fibonacci sequence.</p>"


  document.getElementById('js').setAttribute('src','images/prob12.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/img12.jpg');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}
function p13Func() {
  document.getElementById('problem').innerHTML="<p> Devise an algorithm to input a positive integer, n, – and by using XX characters – output the figure below that has n rows and each row k has k pairs of XX. </p>"


  document.getElementById('js').setAttribute('src','images/prob13.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/img13.jpg');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}
function p14Func() {
  document.getElementById('problem').innerHTML="<p> output if a number is prime or not</p>"


  document.getElementById('js').setAttribute('src','images/prob14.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/img14.png');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}
function p15Func() {
  document.getElementById('problem').innerHTML="<p> see if sum 1 and sum 2 are equal to each other</p>"


  document.getElementById('js').setAttribute('src','images/prob15.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/img15.png');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}
function p16Func() {
  document.getElementById('problem').innerHTML="<p>see how many positive and negative numbers are entered if a zero is entered or if the positive numbers are double more than negative numbers stop the program</p>"


  document.getElementById('js').setAttribute('src','images/prob16.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/img16.png');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}
function p17Func() {
  document.getElementById('problem').innerHTML="<p> see if the number of negative and postiive numbers entered are equal to each other</p>"


  document.getElementById('js').setAttribute('src','images/prob17.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/img17.png');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}
function p18Func() {
  document.getElementById('problem').innerHTML="<p>see if number is prime or not in a sub algorithim </p>"


  document.getElementById('js').setAttribute('src','images/prob18.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/img18.png');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}
function p19Func() {
  document.getElementById('problem').innerHTML="<p> receive a positive number, n, and output all prime numbers that are smaller than n and have a digit 7. For example, if n is 100, the program should output 7, 17, 37, 47, 67, 71, 73, 79, and 97.</p>"


  document.getElementById('js').setAttribute('src','images/prob19.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/img19.png');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}
function p20Func() {
  document.getElementById('problem').innerHTML="<p> press the button flip and see if the output is heads or tails</p>"


  document.getElementById('js').setAttribute('src','images/prob20.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/img20.png');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}
function p21Func() {
  document.getElementById('problem').innerHTML="<p> click the button to see the value of the city clicked</p>"


  document.getElementById('js').setAttribute('src','images/prob21.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/img21.png');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}
function p22Func() {
  document.getElementById('problem').innerHTML="<p> click the amount and the numbers will add up in coins</p>"


  document.getElementById('js').setAttribute('src','images/prob22.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/img22.png');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}
function p23Func() {
  document.getElementById('problem').innerHTML="<p> roll two dice three times and see the average of every roll</p>"


  document.getElementById('js').setAttribute('src','iimages/prob23.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/img23.png');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}
function p24Func() {
  document.getElementById('problem').innerHTML="<p> output todays date</p>"


  document.getElementById('js').setAttribute('src','images/prob24.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/img24.png');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";


    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}
function p25Func() {
  document.getElementById('problem').innerHTML="<p> click the button 20 times to countdown and then output liftoff.</p>"


  document.getElementById('js').setAttribute('src','images/prob25.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/img25.png');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}
function p26Func() {
  document.getElementById('problem').innerHTML="<p> enter number in the input and recieve the string version of the number</p>"


  document.getElementById('js').setAttribute('src','images/prob26.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/jujeh/jujehDesign.jpg');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}
function p27Func() {
  document.getElementById('problem').innerHTML="<p> receive three numerical coefficients of a quadratic equation and determine if it has two distinct real roots, one root, or no roots in real numbers.</p>"


  document.getElementById('js').setAttribute('src','images/prob27.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/jujeh/jujehDesign.jpg');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}
function p28Func() {
  document.getElementById('problem').innerHTML="<p> receive three numerical coefficients of a quadratic equation and determine if it has two distinct real roots, one root, or no roots in real numbers.</p>"


  document.getElementById('js').setAttribute('src','images/prob28.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/jujeh/jujehDesign.jpg');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}
function p29Func() {
  document.getElementById('problem').innerHTML="<p> receive three numerical coefficients of a quadratic equation and determine if it has two distinct real roots, one root, or no roots in real numbers.</p>"


  document.getElementById('js').setAttribute('src','images/prob29.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/jujeh/jujehDesign.jpg');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}
function p30Func() {
  document.getElementById('problem').innerHTML="<p> receive three numerical coefficients of a quadratic equation and determine if it has two distinct real roots, one root, or no roots in real numbers.</p>"


  document.getElementById('js').setAttribute('src','images/prob30.png');
  document.getElementById('js').style.display="none";


  document.getElementById('flowchart').setAttribute('src','images/jujeh/jujehDesign.jpg');
  document.getElementById('flowchart').style.display="none";

  document.getElementById('another').setAttribute('src','images/jujeh/jujeh2.jpg');
  document.getElementById('another').style.display="none";



    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}
/* in Ex5, create functions zoomIn() and zoomOut() */
