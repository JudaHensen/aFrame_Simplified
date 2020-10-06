function Setup() {
  // add aFrame to the html
  let aFrame = document.createElement(`script`);
  aFrame.type = `text/javascript`;
  aFrame.src = `https://aframe.io/releases/1.0.4/aframe.min.js`;
  document.querySelector(`head`).appendChild(aFrame);

  aFrame.onload = ()=>{
    // Create a-scene
    let scene = document.createElement(`a-scene`);
    // Standard disable movement
    scene.removeAttribute(`wasd-controls`);

    document.querySelector(`body`).appendChild(scene);

    // Disable movement
    setTimeout( ()=>{
      document.querySelector('[camera]').removeAttribute('wasd-controls');
    }, 50);
  }
}

class Controls {
  constructor(speed) {
    this.speed = speed;
    this.camera = document.querySelector('[camera]');
    this.disableMovement();
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  enableMovement() {
    this.camera.setAttribute(`wasd-controls`, `acceleration:${speed}`);
  }

  disableMovement() {
    this.camera.removeAttribute('wasd-controls');
  }
}

class VRElement {
  setup() {
    // Set scene
    this.scene = document.querySelector(`a-scene`);

    this.witdh = 1;
    this.height = 1;
    this.position = {x: 0, y: 0, z: 0};
    this.rotation = {x: 0, y: 0, z: 0};
    this.scale = {x: 1, y: 1, z: 1};
    this.elem.setAttribute(`width`, this.width);
    this.elem.setAttribute(`height`, this.height);
    this.elem.setAttribute(`position`, this.position);
    this.elem.setAttribute(`rotation`, this.rotation);
    this.elem.setAttribute(`scale`, this.scale);

    this.scene.appendChild(this.elem);
  }

  setWidth(w) {
    this.width = w;
    this.elem.setAttribute(`width`, this.width);
  }

  setHeight(h) {
    this.height = h;
    this.elem.setAttribute(`width`, this.height);
  }

  setPosition(x, y, z) {
    this.position.x = x;
    this.position.y = y;
    this.position.z = z;

    this.elem.setAttribute(`position`, this.position);
  }

  addPosition(x, y, z) {
    this.position.x += x;
    this.position.y += y;
    this.position.z += z;

    this.elem.setAttribute(`position`, this.position);
  }

  setRotation(x, y, z) {
    this.rotation.x = x;
    this.rotation.y = y;
    this.rotation.z = z;

    this.elem.setAttribute(`rotation`, this.rotation);
  }

  addRotation(x, y, z) {
    this.rotation.x += x;
    this.rotation.y += y;
    this.rotation.z += z;

    this.elem.setAttribute(`rotation`, this.rotation);
  }

  setScale(x, y, z) {
    this.scale.x = x;
    this.scale.y = y;
    this.scale.z = z;

    this.elem.setAttribute(`scale`, this.scale);
  }

  addScale(x, y, z) {
    this.scale.x += x;
    this.scale.y += y;
    this.scale.z += z;

    this.elem.setAttribute(`scale`, this.scale);
  }

  setVisible(input) {
    if(input) this.elem.setAttribute(`visible`, true);
    else this.elem.setAttribute(`visible`, false);
  }

}

class VRText extends VRElement {
  constructor(text) {
    super();
    // Create element
    this.elem = document.createElement(`a-text`);
    this.color = `black`;
    this.setColor(this.color);

    // Set visibility
    this.setVisible(true);

    // Set align to center
    this.elem.setAttribute(`align`, `center`);

    // Save text if text is given
    if(text !== null) {
      this.setText(text);
    } else console.warn(`Your VR_Text has been created.\nYou still need to set it's text by using: .setText(text)`);

    // Call parent inheritance constructor
    super.setup();
  }

  setText(text) {
    this.text = text;
    this.elem.setAttribute(`value`, this.text);
  }

  setColor(color) {
    this.color = color;
    this.elem.setAttribute(`color`, color);
  }

}


class VRImage extends VRElement {
  constructor(path) {
    super();
    // Create element
    this.elem = document.createElement(`a-image`);

    // Set visibility
    this.setVisible(true);

    // Check if image path is set correctly
    if(path !== null) { this.setImage(path) }
    else { console.warn(`Your VR_Image has been created.\nYou still need to set the image's path by using: .setImage(pathToImage)`); }

    // Call parent inheritance constructor
    super.setup();
  }

  setImage(path) {
    this.elem.setAttribute(`src`, path);
  }

}
