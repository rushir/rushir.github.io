(function(){

var messages = [
	'Tinkerer',
  	'Designer',
  	'Maker',
	'Student',
	'16',
	'India',
	'Thinker',
  	'Writer',
	'Doer',
];

var current = 0;

function animate(){
	$("#iam")
		.css({position:"relative"})
		.animate({left:"+=60px", opacity:0}, 300, function(){ $("#iam").html( messages[current] ) })
		.animate({left:"-=120px"}, 10)
		.animate({left:"+=60px", opacity:1}, 300)
		
	current = (current+Math.floor(Math.random()*3)) % messages.length;
}

setTimeout( function(){
  animate();
  setInterval( animate, 7500 );
}, 2500 );


})();