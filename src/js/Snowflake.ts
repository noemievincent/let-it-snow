import {settings} from "./settings";
import {random} from "./helpers/math";

export class Snowflake {
    private readonly canvasElement: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private center: { x: number, y: number };
    private position: { x: number, y: number };
    private speedX: number;
    private speedY: number;
    private radius: number;
    private hasFell: boolean;
    private opacity: number;
    private color: string;
    private gradient: CanvasGradient;


    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D, center: { x: number, y: number }) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.center = center;
        this.generate();
        this.generateRadialGradient();
    }

    generate() {
        this.radius = random(settings.snowflake.radius.min, settings.snowflake.radius.max);
        this.speedX = random(settings.snowflake.speedX.min, settings.snowflake.speedX.max);
        this.speedY = random(settings.snowflake.speedY.min, settings.snowflake.speedY.max);
        this.position = {x: this.radius + Math.random() * (this.canvasElement.width - this.radius), y: -this.radius * 2};
        this.opacity = random(settings.snowflake.opacity.min, settings.snowflake.opacity.max);
        this.color = 'white';
        this.hasFell = false;
    }

    generateRadialGradient() {
        this.gradient = this.ctx.createRadialGradient(this.position.x, this.position.y, this.radius/2, this.position.x, this.position.y, this.radius);
        this.gradient.addColorStop(0, 'red');
        this.gradient.addColorStop(1, 'white');
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.gradient;
        this.ctx.fill();
    }

    update() {
        if (!this.hasFell) {
            this.position.x += this.speedX;
            this.position.y += this.speedY;
        }

        this.draw();

        if (this.position.y > this.canvasElement.height - this.radius) {
            this.hasFell = true;
            this.position.y = this.canvasElement.height - this.radius;

        }
    }
}