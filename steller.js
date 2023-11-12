// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});

// map live location 
const liveLocation=()=>{
	function showLocation(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	
	const mapElement = document.getElementById('map');
	mapElement.innerHTML = `<iframe src="https://maps.google.com/maps?q=${latitude},${longitude}&output=embed"></iframe>`;
}

function showError(error) {
	console.log(error);
	alert('Unable to retrieve your location.');
}

if ("geolocation" in navigator) {
	navigator.geolocation.getCurrentPosition(showLocation, showError);
} else {
	alert('Geolocation is not available in your browser.');
}

}

function updateDateTime() {
	const dateTimeElement = document.getElementById('liveDateTime');
	const currentTime = new Date();
	const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
	dateTimeElement.innerText =currentTime.toLocaleString('en-US', options);
}

// Update the current year
document.getElementById('liveDateTime').innerText = new Date().getFullYear();

// Update the date and time every second
setInterval(updateDateTime, 1000);


// smooth behaviour on hireme button;
document.getElementById("hireMeButton").addEventListener('click',(()=>{
	document.getElementById("contact").scrollIntoView({behavior:'smooth'})
}))


const getValues=(e)=>{
	e.preventDefault(); 
	let name = document.getElementById("exampleInputName1").value;
	let email = document.getElementById("exampleInputEmail1").value;
	let message = document.getElementById("exampleInputMessage1").value;
	let data = {
		name:name,
		email:email,
		message:message,
	}
emailjs.init("TXHEMOYIluGn5IfaP");
	emailjs.send("service_4yn2e7g", "template_7nkmob3", data)
  .then(function(response) {
    console.log("Email sent successfully", response);
	document.getElementById("succuessAlert").innerHTML = "Email Send SuccessFully"
	setTimeout(()=>{[
	document.getElementById("succuessAlert").innerHTML = ""
	]},5000)

  }, function(error) {
    console.error("Email could not be sent", error);
  });
}

document.getElementById("downloadButton").addEventListener("click", function() {
    // Replace 'your_cv.docx' with the actual file path to your DOCX file.
    var fileURL = 'Editable resume.docx';

    var a = document.createElement('a');
    a.href = fileURL;
    a.download = 'my_cv.docx'; // You can change the downloaded file name here.
    document.body.appendChild(a);
    a.style.display = 'none';
    a.click();
    document.body.removeChild(a);
});
document.getElementById("downloadButton1").addEventListener("click", function() {
    // Replace 'your_cv.docx' with the actual file path to your DOCX file.
    var fileURL = 'Editable resume.docx';

    var a = document.createElement('a');
    a.href = fileURL;
    a.download = 'my_cv.docx'; // You can change the downloaded file name here.
    document.body.appendChild(a);
    a.style.display = 'none';

    a.click();

    document.body.removeChild(a);
});