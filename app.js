var count = 0;
let a1=0;
let a2 = 0;
let a3 = 0;
let a4 = 0;
let a5 = 0;



function rotate(id) //function to rotate
{
    
    var audio = document.getElementById("audio"); // audio 
    audio.play(); // autoplay function
    count++;
    var img = document.getElementById(id);
    console.log(count);
    img.style.transform = 'rotate(' + 90 * count + 'deg)'; // changing the direction of image
    console.log(img.style.transform);
    if (id == 1) // cell id
    { 
        a1++;
        img.style.transform = 'rotate(' + 90 * a1 + 'deg)';
        
    }
    if (id == 2) {
        a2++;
        img.style.transform = 'rotate(' + 90 * a2 + 'deg)';

    }
    if (id == 3) {
        a3++;
        img.style.transform = 'rotate(' + 90 * a3 + 'deg)';

    }
    if (id == 4) {
        a4++;
        img.style.transform = 'rotate(' + 90 * a4 + 'deg)';

    }
    if (id == 5) {
        a5++;
        img.style.transform = 'rotate(' + 90 * a5 + 'deg)';

    }

    console.log("D1--" + a1);
    console.log("D2--" + a2);
    console.log("D3--" + a3);
    console.log("D4--" + a4); 
    console.log("D5--" + a5);
    if(a1%2==1 && a2%2==1 && a4%2==1 && a3%4==3  && a5%4==2) // checking whether the path is correct
    {
        var trmp = "<img src='./Group 12 (1).png'>";
        document.getElementById('Win1').innerHTML=trmp;
        var btn3 = document.createElement("button"); //  create dynamic button
        btn3.setAttribute("type", "submit");
        btn3.innerHTML = "Next Level";
        btn3.id = "div5";
        btn3.onclick = false;
        document.body.appendChild(btn3); // adding the button for the body
        btn3.addEventListener("click", function () {
            window.location.href = "./Index1.html"; // navigating for the next level
        });

 

    }

}
var b1=0;
var b2 = 0;
var b3 = 0;
var b4 = 0;
var b5 = 0;
var b6 = 0;
var b7 = 0;
var b8 = 0;
var b9 = 0;
var b10 = 0;
var b11 = 0;
var b12 = 0;
var b13 = 0;
var count2=0;
function rotate1(id) {
 
    var audio = document.getElementById("audio");
    audio.play();
    count2++;
    var img = document.getElementById(id);
    console.log(id);
    img.style.transform = 'rotate(' + 90 * count2 + 'deg)';
    console.log(img.style.transform);
    if(count2==5)
    {
        count2=0;
    }
    if (id == 1) {
        b1++;
        img.style.transform = 'rotate(' + 90 * b1 + 'deg)';

    }
    if (id == 2) {
        b2++;
        img.style.transform = 'rotate(' + 90 * b2 + 'deg)';

    }
    if (id == 3) {
        b3++;
        img.style.transform = 'rotate(' + 90 * b3 + 'deg)';

    }
    if(id==53){
        b53++;
        img.style.transform = 'rotate(' + 90 * b53 + 'deg)';
    }
    if (id == 4) {
        b4++;
        img.style.transform = 'rotate(' + 90 * b4 + 'deg)';

    }

    if (id == 6) {
        b6++;
        img.style.transform = 'rotate(' + 90 * b6 + 'deg)';

    }
    if (id == 7) {
        b7++;
        img.style.transform = 'rotate(' + 90 * b7 + 'deg)';

    }
    if (id == 8) {
        b8++;
        img.style.transform = 'rotate(' + 90 * b8 + 'deg)';

    }
    if (id == 9) {
        b9++;
        img.style.transform = 'rotate(' + 90 * b9 + 'deg)';

    }
    if (id == 10) {
        b10++;
        img.style.transform = 'rotate(' + 90 * b10 + 'deg)';

    }
    if (id == 11) {
        b11++;
        img.style.transform = 'rotate(' + 90 * b11 + 'deg)';

    }
    if (id == 12) {
        b12++;
        img.style.transform = 'rotate(' + 90 * b12 + 'deg)';

    }
    if (id == 13) {
        b13++;
        img.style.transform = 'rotate(' + 90 * b13 + 'deg)';

    }
   
    if(b1%4 == 1 && b2%4 == 0 && b3%2==1 && b4%2==1 &&  b6%2==0 && b7%4==2 && b8%2==1 && b9%4==2 && b10%4==2 && b11%4==2 && b12%2==1 && b13%4==2)
    {
        var rs = b1 + b2 + b3 + b4 + b5+b6+b7+b8+b9+b10+b11+b12+b13;
        document.getElementById('sc').innerHTML=rs;
        // var trmp = "<img src='./congrats_final.png'>";
        // document.getElementById('Win1').innerHTML = trmp;
        document.getElementById('a1').style.visibility = "visible";
        var btn3 = document.createElement("button"); //  create dynamic button
        btn3.setAttribute("type", "submit");
        btn3.innerHTML = "Next Level";
        btn3.id = "div5";
        btn3.onclick = false;
        document.body.appendChild(btn3); // adding the button for the body
        btn3.addEventListener("click", function () {
            window.location.href = "./Intex2.html"; // navigating for the next level
        });
    }
    console.log("D1--" + b1);
    console.log("D2--" + b2);
    console.log("D3--" + b3);
    console.log("D4--" + b4);
    console.log("D5--" + b5);
    console.log("D6--" + b6);
    console.log("D7--" + b7);
    console.log("D8--" + b8);
    console.log("D9--" + b9);
    console.log("D10--" + b10);
    console.log("D11--" + b11);
    console.log("D12--" + b12);
    console.log("D13--" + b13);

   
}


var count = 0;
let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;
let c5 = 0;
let c6 = 0;
let c7 = 0;
let c8 = 0;
let c9 = 0;
let c10 = 0;
let c11 = 0;
let c12 = 0;
let c13 = 0;
let c14 = 0;
let c15 = 0;
let c16 = 0;
let c17 = 0;
function rotate3(id) // function to rotate
{
    // var audio = document.getElementById("audio"); // storing the audio id in the variable called audio
    // // audio.play(); // auto play
    // // count++;
    var img = document.getElementById(id);
    console.log(count);
    img.style.transform = 'rotate(' + 90 * count + 'deg)' // Changing the direction of image
    console.log(img.style.transform);
    if (id == 1)  // first cell id
    {
        c1++;
        img.style.transform = 'rotate(' + 90 * c1 + 'deg)';

    }
    if (id == 2)  // Second cell id
    {
        c2++;
        img.style.transform = 'rotate(' + 90 * c2 + 'deg)';
    }
    if (id == 3) // Third cell id
    {
        c3++;
        img.style.transform = 'rotate(' + 90 * c3 + 'deg)';
    }
    if (id == 4) //Fourth cell id
    {
        c4++;
        img.style.transform = 'rotate(' + 90 * c4 + 'deg)';
    }
    if (id == 5) //Fifth cell id
    {
        c5++;
        img.style.transform = 'rotate(' + 90 * c5 + 'deg)';
    }
    if (id == 6) //Fifth cell id
    {
        c6++;
        img.style.transform = 'rotate(' + 90 * c6 + 'deg)';
    }
    if (id == 7) //Fifth cell id
    {
        c7++;
        img.style.transform = 'rotate(' + 90 * c7 + 'deg)';
    }
    if (id == 8) //Fifth cell id
    {
        c8++;
        img.style.transform = 'rotate(' + 90 * c8 + 'deg)';
    }
    if (id == 9) //Fifth cell id
    {
        c9++;
        img.style.transform = 'rotate(' + 90 * c9 + 'deg)';
    }
    if (id == 10) //Fifth cell id
    {
        c10++;
        img.style.transform = 'rotate(' + 90 * c10 + 'deg)';
    }
    if (id == 11) //Fifth cell id
    {
        c11++;
        img.style.transform = 'rotate(' + 90 * c11 + 'deg)';
    }
    if (id == 12) //Fifth cell id
    {
        c12++;
        img.style.transform = 'rotate(' + 90 * c12 + 'deg)';
    }
    if (id == 13) //Fifth cell id
    {
        c13++;
        img.style.transform = 'rotate(' + 90 * c13 + 'deg)';
    }
    if (id == 14) //Fifth cell id
    {
        c14++;
        img.style.transform = 'rotate(' + 90 * c14 + 'deg)';
    }
    if (id == 15) //Fifth cell id
    {
        c15++;
        img.style.transform = 'rotate(' + 90 * c15 + 'deg)';
    }
    if (id == 16) //Fifth cell id
    {
        c16++;
        img.style.transform = 'rotate(' + 90 * c16 + 'deg)';
    }
    if (id == 17) //Fifth cell id
    {
        c17++;
        img.style.transform = 'rotate(' + 90 * c17 + 'deg)';
    }

    
    console.log("D1--" + c1);
    console.log("D2--" + c2);
    console.log("D3--" + c3);
    console.log("D4--" + c4);
    console.log("D5--" + c5);
    console.log("D6--" + c6);
    console.log("D7--" + c7);
    console.log("D8--" + c8);
    console.log("D9--" + c9);
    console.log("D10--" + c10);
    console.log("D11--" + c11);
    console.log("D12--" + c12);
    console.log("D13--" + c13);
    console.log("D14--" + c14);
    console.log("D15--" + c15);
    console.log("D16--" + c16);
    console.log("D17--" + c17);
    if (c16%2==1 && c17%2==1 && c11%4==2 && c12%4==3 && c7%2==1 && c3%4==3 && c1%4==1 && c2%4==3 && c5%4==3 && c10%2==1 && c9%2==1 && c8%2==1 && c13%2==1 &&c15%4==3) // Checking whether the path is correct
    {
        alert("Win");
        var btn3 = document.createElement("button"); //  create dynamic button
        btn3.setAttribute("type", "submit");
        btn3.innerHTML = "Next Level";
        btn3.id = "div5";
        btn3.onclick = false;
        document.body.appendChild(btn3); // adding the button for the body
        btn3.addEventListener("click", function () {
            window.location.href = "./Index.html"; // navigating for the next level
        });

    }
}