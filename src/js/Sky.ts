import {settings} from "./settings";

export class Sky {
    private readonly canvasElement: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private gradient: CanvasGradient;

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.resize();
        this.addEventListeners();
        this.generateGradient();
        this.draw();
    }

    resize() {
        this.canvasElement.width = window.innerWidth;
        this.canvasElement.height = window.innerHeight;
        this.generateGradient();
        this.draw();
    }

    addEventListeners() {
        window.addEventListener('resize', () => {
            this.resize();
        })
    }

    generateGradient() {
        this.gradient = this.ctx.createLinearGradient(this.canvasElement.height / 2, 0, this.canvasElement.height / 2, this.canvasElement.height);
        this.gradient.addColorStop(0, settings.sky.gradient[0]);
        this.gradient.addColorStop(1, settings.sky.gradient[1]);
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.gradient;
        this.ctx.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        this.ctx.closePath();
    }
}