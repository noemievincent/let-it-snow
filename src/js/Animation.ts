import {Snowflake} from "./Snowflake";
import {settings} from "./settings";
import {Sky} from "./Sky";

export class Animation {
    private readonly ctx: CanvasRenderingContext2D;
    private readonly canvasElement: HTMLCanvasElement;
    private readonly center: { x: number, y: number };
    private snowflakes: Snowflake[];
    private sky: Sky;
    private randomNumber: number;

    constructor(ctx: CanvasRenderingContext2D, canvasElement: HTMLCanvasElement, center: { x: number, y: number }, snowflakes: Snowflake[], sky: Sky) {
        this.ctx = ctx;
        this.canvasElement = canvasElement;
        this.center = center;
        this.snowflakes = snowflakes;
        this.sky = sky;
        this.animate();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        this.sky.draw();
        this.snowflakes.forEach((snowflake: Snowflake) => {
            snowflake.update();
        })

        window.requestAnimationFrame(() => {
            this.snowflakes.push(new Snowflake(this.canvasElement, this.ctx, this.center));
            this.randomNumber = Math.random();
            if (this.randomNumber > 0.5) {
                // Générer un nouveau flocon
            } else {
                // Effacer un des flocons au sol
            }
            this.animate();
        })
    }
}