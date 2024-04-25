import { BufferGeometry } from 'three';

declare module 'three' {
    export class PolyhedronBufferGeometry extends BufferGeometry {
        constructor(vertices: number[], indices: number[], radius: number, detail: number);
    }

    export class IcosahedronBufferGeometry extends PolyhedronBufferGeometry {
        constructor(radius: number, detail: number);
    }
}
