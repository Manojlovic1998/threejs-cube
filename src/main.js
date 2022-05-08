import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxBufferGeometry,
} from "three";

// canvas-container node

let container = document.getElementById("scene-container");

// Create Scene
const scene = new Scene();

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

// Create WebGL2 Renderer
const renderer = new WebGLRenderer();
