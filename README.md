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

What scene does is that it defines a coordinate system called **World Space**.

**World Space** is a 3D Cartesian coordinate system.

Whenever we create or import a new object to our scene, it will be placed at the **origin** point (0, 0, 0).
