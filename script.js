
const Home = document.getElementById('Button1');
Home.addEventListener('click', function() {
	var contents = document.getElementsByClassName("content");
	for (var i = 0; i < contents.length; i++) {
		contents[i].style.display = "none";
	}
	document.getElementById('Home').style.display = "block";
});

const Applications = document.getElementById('Button2');
Applications.addEventListener('click', function() {
	var contents = document.getElementsByClassName("content");
	for (var i = 0; i < contents.length; i++) {
		contents[i].style.display = "none";
	}
	document.getElementById('Applications').style.display = "block";
});


const Contact = document.getElementById('Button3');
Contact.addEventListener('click', function() {
	var contents = document.getElementsByClassName("content");
	for (var i = 0; i < contents.length; i++) {
		contents[i].style.display = "none";
	}
	document.getElementById('Contact').style.display = "block";
});


const Other = document.getElementById('Button4');
Other.addEventListener('click', function() {
	var contents = document.getElementsByClassName("content");
	for (var i = 0; i < contents.length; i++) {
		contents[i].style.display = "none";
	}
	document.getElementById('Other').style.display = "block";
});


// text for the different sections
var home = "Ich Bin Jan Saenger, Geboren am 08.04.2004, und das ist meine Webseite.<br>Hier finden Sie Informationen über mich und meine Projekte.";
document.getElementById("HomeText").innerHTML = home;

var app = "Hier finden Sie einige meiner Projekte bzw. Applikationen.<br>Oder drücken Sie auf das Github Logo um alle Projekte zu sehen.";
document.getElementById("AppText").innerHTML = app;

var contact = "Kontaktieren Sie mich gerne bei Fragen oder Anfragen<br> per Email oder Telefon";
document.getElementById("ContactText").innerHTML = contact;

var other = "Hier finden Sie Informationen über mich und meine Projekte.";
document.getElementById("OtherText").innerHTML = other;
