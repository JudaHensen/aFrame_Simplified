

# A-FrameSimplified

### Documentation

* [Master](https://github.com/JudaHensen/aFrame_Simplified/blob/main/documentation/aFrameSimplified_master.pdf) - Contains functions & descriptions.

* [Mini](https://github.com/JudaHensen/aFrame_Simplified/blob/main/documentation/aFrameSimplified_functionsOnly.pdf) - Only contains functions.

### Things to know before you start.
If you need create & load text, images or 3D models when the scene loads, use the Setup function in app.js to create those elements. If you don't use the Setup function you might get errors that the scene is not being recognized or does not exist.

Creating text, images or 3D models after the Setup function in app.js has been called works fine. \(The Setup function gets called on it's own. You should never have to call it yourself.\)

You should also use a server to run this software. You can use your ma-cloud for this or you can try local server software, such as MAMP, WAMP or XAMPP servers.

### Examples
##### *Create a 3D model*
	// Create variables
	let model, material, car;

	// Create strings with paths to files
	model = "models/sampleCar/Shelby.obj";
	material = "models/sampleCar/Shelby.mtl";

	// Create the 3D model
	car = new VRModel(model, material);
##### *Create a 3D model by setting the model and material separately*
	// Create variables
	let model, material, car;

	// Create strings with paths to files
	model = "models/sampleCar/Shelby.obj";
	material = "models/sampleCar/Shelby.mtl";

	// Create the 3D model
	car = new VRModel();

	// Set the model and material
	car.setModel(model);
	car.setMaterial(material);
##### *Add a click event to the car with reusable function*
	function ClickedOnCar() {
	  console.log(`Someone clicked the car.`);
	}

	car.addEventListener("click", ClickedOnCar);
##### *Add a click event to the car with a stand alone function*
	car.addEventListener("click", ()=>{
	  console.log(`Someone clicked the car.`);
	});
