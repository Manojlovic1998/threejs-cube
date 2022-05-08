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

// Create WebGL2 Renderer
const renderer = new WebGLRenderer();
