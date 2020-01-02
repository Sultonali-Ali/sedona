var button = document.getElementById("search-button");
var form = document.getElementById("search-form");

if (!form.classList.contains("visually-hidden")) {
	form.classList.add("visually-hidden");
}


button.addEventListener("click" , function (evt) {
	evt.preventDefault();
	form.classList.toggle("visually-hidden");
	if (!form.classList.contains("visually-hidden")) {
		form.classList.add("modal-animation");
	} else {
		form.classList.remove("modal-animation");
	}
});