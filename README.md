# 3D Cube

This project showcases the basic setup for ThreeJS scene. It was built as proof of concept, showcasing the basic use of ThreeJS classes to render a simple scene.

## The Components of Real-Time 3D App

![Diagram with components that make up a real-time 3d app](assets/readme/The%20Components%20of%20a%20Real-Time%203D%20App.jpg)

The basic components that make up every three.js app are _scene_, _camera_ and _render_. These three make the basic scaffolding of the application.

The _canvas_ element is where we see the end result and _mesh_ is the visible object that is rendered.

### Scene

The _scene_ is holder for everything that you see.

```JavaScript
import { Scene } from "three";

const scene = new Scene();
```

What scene does is that it defines a coordinate system called _World Space_.

_World Space_ is a 3D Cartesian coordinate system.

Whenever we create or import a new object to our scene, it will be placed at the _origin_ point (0, 0, 0). The objects are also placed into the _scene graph_ which is a tree structure with the scene at the top.

![Scene graph tree diagram](assets/readme/Scene%20Tree%20Graph.jpg)

### Camera

There are several ways you can use to convert the scene graph into a human vision friendly format, using techniques called _projections_.

**Perspective Projection**

Perspective projection is the most important type of projection, as it is designed to match the way our eyes see the world.

ThreeJS has a _PerspectiveCamera_ that we can use to view the scene. This camera is the 3D equivalent of a camera in the real world. It uses many of the same concepts such as **field of view** & **aspect ratio**.

```JavaScript
import { PerspectiveCamera } from "three";

const fov = 35; // AKA Field of View
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

// Create Perspective Camera :obj
const camera = new PerspectiveCamera(fov, aspect, near, far)
```

### Renderer

Renderer renders what is seen by the camera and draws it onto a `<canvas>` _incredibly fast_.

For this project we will use _WebGLRenderer_ which renders our scenes using _WebGL2_ and if WebGL2 is not available it falls back to _WebGL V1_.

```JavaScript
import { WebGLRenderer} from "three";

const renderer = new WebGLRenderer();
```

### Mesh

Meshes are the most common kind of visible objects used in 3D computer graphics. They are used to display all kinds of 3D objects.

A mesh consists out of a geometry and a material.

![Mesh components diagram](assets/readme/Mesh%20Composition.jpg)

```JavaScript
import { Mesh } from "three";

// Consequently :geometry and :material also have to be
// created before you pass them as parameters to Mesh
const mesh = new Mesh(geometry, material);
```
