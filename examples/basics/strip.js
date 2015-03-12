
var count = 0;

// create an new instance of a pixi stage
var stage = new PIXI.Container();

// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0xace455});

var target = new PIXI.Point();

// add the renderer view element to the DOM
document.getElementById('example').appendChild(renderer.view);


// build a rope!
var length = 918 / 20;

var points = [];

    for (var i = 0; i < 20; i++) {

        var segSize = length;
        points.push(new PIXI.Point(i * length, 0));
    };

strip = new PIXI.Rope(PIXI.Texture.fromImage("_assets/snake.png"), points);
strip.x = -459;

var snakeContainer = new PIXI.DisplayObjectContainer();
snakeContainer.position.x = 400;
snakeContainer.position.y = 300;

snakeContainer.scale.set( 800 / 1100)
stage.addChild(snakeContainer);

snakeContainer.addChild(strip);


// start animating
requestAnimationFrame(animate);

    function animate() {

        count += 0.1;

        var length = 918 / 20;

        // make the snake
        for (var i = 0; i < points.length; i++) {

            points[i].y = Math.sin(i *0.5  + count) * 30;

            points[i].x = i * length + Math.cos(i *0.3  + count) * 20;

        };

        // render the stage
        renderer.render(stage);

        requestAnimationFrame(animate);
    }


