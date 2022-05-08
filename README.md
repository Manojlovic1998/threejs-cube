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

To add mesh to the scene you simply use the member operator and call add method. You pass the mesh :obj to the add method as parameter.

```JavaScript
scene.add(mesh);
```

important takeaways: Once the mesh was added to the scene we call that mesh its child and we call the scene the parent of the mesh. Furthermore, you can remove the mesh child by using `.remove()` method and passing the mesh to it that you want to remove.

### Material

Material defines how the surface of the mesh looks. The simplest kind of material available in ThreeJS is MeshBasicMaterial. It does not require for us to add and use lights in the scene.

```JavaScript
import { MeshBasicMaterial } from "three";

const material = new MeshBasicMaterial();
```

## More About Camera

If the _scene_ is a tiny universe, stretching forever in all directions, the camera's viewing frustum is the part of it that we can se.

**Frustum** is a mathematical term meaning a four-sided rectangular pyramid with the top cut off. When we view the scene through the _Perspectivecamera_ everything inside the frustum is visible, everything outside of it is not.

The area between the **Near Clipping Plane** and **Far Clipping Plane** is the camera's viewing frustum. Hence, the four parameters we pass to the _PerspectiveCamera_ constructor: **field of view**, **aspect ratio**, **near clipping plane**, **far clipping plane**.

Any objects in your scene that are not inside the frustum will not be rendered/drawn on canvas. If object is found on the margin of one or the other it will be chopped of (**clipped**). It is good to use this for the optimization.

**Initial Position of the Camera**
Every object we add to the scene is placed at the origin, this also includes the camera. Hence, positioning the camera first will allow us to better view the scene and what is going on.

```JavaScript
const camera = new PerspectiveCamera(fov, aspect, nearClip, farClip)


// default position (0, 0, 0)
// move the camera back so you can view the rendered objects

camera.position.set(0, 0, 10);
//                  X, Y, Z
```
