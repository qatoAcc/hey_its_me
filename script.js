        // set up text to print, each item in array is new line
var aText = new Array(
"it's me - braden", 
"how have you guys been?",
"good, probably :)",
"i have a few things to say:", 
" (.1) im moving in like a week :>",
"(.2) i have no idea how to ask friends to meet somewhere or come to a place or whatever because of my complete lack of social skills lmao (please help)",
"(.3) this follows with the last one, but like WHEN can i visit or meet somewhere or something where i can see you guys :D",
"(.4) when i do move, its not going to be like 'omg im so sad bc im never going to see you guys ever again boohoo', i can visit (more often than you think).",
"(.5) i feel like thiccy ricky is the name of a gay male stripper"
);
var iSpeed = 88; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 8; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex+iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();
