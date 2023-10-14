window.addEventListener("load", () => {
	console.log("Page loaded");  // This should appear in the console when the page loads
	const preload = document.querySelector(".preload");
	preload.classList.add("preload_finish");
});
window.onload = function () {
	// Hide the preloader
	document.getElementById('preloader').style.display = 'none';

	// Display the "logo and moon" elements
	document.getElementById('logo').style.display = 'block';
	document.getElementById('moon').style.display = 'block';
};
