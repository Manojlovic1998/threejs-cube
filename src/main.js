import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxBufferGeometry,
  MeshBasicMaterial,
  Color,
  Mesh,
} from "../vendor/three/build/three.module.js";

// canvas-container node

let container = document.getElementById("scene-container");

// Create Scene
const scene = new Scene();

// Set Scene Background color
scene.background = new Color("#000000");

// Perspective Camera Config
const fov = 35; // Field of View
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

// Create Camera
const camera = new PerspectiveCamera(fov, aspect, near, far);

// Set Camera position
camera.position.set(0, 0, 10);

// BoxBufferGeometry Config
const boxLength = 2;
const boxWidth = 2;
const boxDepth = 2;

// Create Geometry
const boxGeometry = new BoxBufferGeometry(boxLength, boxWidth, boxDepth);

// Create Material for box geo..
const material = new MeshBasicMaterial();

// Create Mesh
const mesh = new Mesh(boxGeometry, material);

// Add mesh to the scene
scene.add(mesh);

// Create WebGL2 Renderer
const renderer = new WebGLRenderer();

// Set the renderer to the same size as our container element
renderer.setSize(container.clientWidth, container.clientHeight);

// Make renderer aware of device's pixel ratio
renderer.setPixelRatio(window.devicePixelRatio);

// Add the <canvas> element to the page
container.append(renderer.domElement);
