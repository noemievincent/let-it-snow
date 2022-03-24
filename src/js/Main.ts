import {Sky} from "./Sky";
import {Snowflake} from "./Snowflake";
import {settings} from "./settings";
import {Animation} from "./Animation";

class Main {
    private readonly canvasElement: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly sky: Sky;
    private readonly center: { x: number, y: number };
    private readonly snowflakes: Snowflake[];
    private animation: Animation;
    private oldX: number;
    private newX: number;

    constructor() {
        this.canvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvasElement.getContext('2d');
        this.sky = new Sky(this.canvasElement, this.ctx);
        this.center = {
            x: this.canvasElement.width / 2,
            y: this.canvasElement.height / 2
        };
        this.newX = this.center.x;
        this.addEventListeners();
        this.snowflakes = [];
        this.animation = new Animation(this.ctx, this.canvasElement, this.center, this.snowflakes, this.sky);
    }

    addEventListeners() {
        window.addEventListener('mousemove', (event: MouseEvent) => {
            this.oldX = this.newX;
            this.newX = event.x;
            console.log(this.newX, this.oldX);
        })
    }
}

new Main();