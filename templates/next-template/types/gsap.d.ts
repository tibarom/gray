// types/gsap.d.ts
declare module 'gsap' {
    export class TweenLite {
      static to(target: object, duration: number, vars: any): TweenLite;
    }
  
    export class TweenMax {
      static to(target: object, duration: number, vars: any): TweenMax;
    }
  
    export class Power4 {
      static easeIn: any;
      static easeOut: any;
    }
  }
  