
# A-FrameSimplified

### Documentation

* [Master](https://github.com/JudaHensen/aFrame_Simplified/blob/main/documentation/aFrameSimplified_master.pdf) - Contains functions & descriptions.

* [Mini](https://github.com/JudaHensen/aFrame_Simplified/blob/main/documentation/aFrameSimplified_functionsOnly.pdf) - Only contains functions.

### Examples
##### *Create a 3D model*
	// Create variables
	let model, material, car;

	// Create strings with paths to files
	model = "models/sampleCar/Shelby.obj";
	material = "models/sampleCar/Shelby.mtl";

	// Create the 3D model
	car = new VRElement(model, material);
##### *Create a 3D model by setting the model and material separately*
	// Create variables
	let model, material, car;

	// Create strings with paths to files
	model = "models/sampleCar/Shelby.obj";
	material = "models/sampleCar/Shelby.mtl";

	// Create the 3D model
	car = new VRElement();

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
