// import 'three';
// import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';
// templates/next-template/types/three.d.ts

import { BufferGeometry } from 'three';

declare module 'three' {
    export class PolyhedronBufferGeometry extends BufferGeometry {
        constructor(vertices: number[], indices: number[], radius: number, detail: number);
    }

    export class IcosahedronBufferGeometry extends PolyhedronBufferGeometry {
        constructor(radius: number, detail: number);
    }
}

//   // 새로운 인터페이스 정의
//   export interface CustomSceneElements {
//     scene: Scene;
//     camera: PerspectiveCamera;
//     renderer: WebGLRenderer;
//     container: HTMLElement | null;
//     start: number;
//     _width: number;
//     _height: number;
//   }
// }
