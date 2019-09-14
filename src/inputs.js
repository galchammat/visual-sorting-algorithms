function setupInputs() {

	//FPS Slider
	var FpsSlider = document.getElementById("fpsRange");
	setFps(FpsSlider.value);
	FpsSlider.oninput = function() {
		setFps(this.value);
	};

	//Array Size Slider
	var ArraySlider = document.getElementById("arrayRange");
	resizeArray(ArraySlider.value);
	ArraySlider.oninput = function() {
		resizeArray(this.value);
	};

	//Play / Pause Button
	var playButton = document.getElementById("playButton");
	playButton.addEventListener("click", clickPlay);

	//Restart Button
	var restartButton = document.getElementById("restartButton");
	restartButton.addEventListener("click", resetAnimation);

}
