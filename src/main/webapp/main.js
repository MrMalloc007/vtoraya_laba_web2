$(function (){
        canvas = document.getElementById("canvas"); // строка сценария извлекает узел в модели DOM, представляющий <canvas>элемент, путем вызова document.getElementById()метода
        var ctx = canvas.getContext("2d"); // Когда у нас есть узел элемента, вы можете получить доступ к контексту рисования, используя его getContext()метод.
        var r = 2;
        draw();

        function windowToCanvas(canvas, x, y) {
            let bbox = canvas.getBoundingClientRect();
            return { x: x - bbox.left * (canvas.width / bbox.width),
                y: y - bbox.top * (canvas.height / bbox.height)
            };
        }

        canvas.onmousedown = function (e) {
            let s = 0;
            let radR = document.getElementById("R");
            if (radR == null) {
                alert("Вы не выбрали R!");
            }else if(radR.value == 1) {
                s = 0.8;
            }
            else if (radR.value == 2) {
                s = 1.5;
            }else if(radR.value == 3) {
                s = 2.3;
            }else if(radR.value == 4) {
                s = 3.1;
            }else if (radR.value == 5) {
                s = 3.9;
            }

            let corArr = windowToCanvas(canvas, e.clientX, e.clientY);
            let x_real = s * ((corArr.x - 254)/175);
            let y_real = (-1) * s * ((corArr.y - 254)/175);

            // let out = document.getElementById("X");
            // out.value = x_real.toFixed(3);

            out = document.getElementById("cordY");
            out.value = y_real.toFixed(3);
            /* пока что коменчу что бы отладить правильный тык */
            // out = document.getElementById("form:but");
            // out.click();
        }

        function draw(){
            ctx.beginPath();

            ctx.moveTo(250,490);
            ctx.lineTo(250,10);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.moveTo(490,250);
            ctx.lineTo(10,250);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.moveTo(250,10);
            ctx.lineTo(257,17);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.moveTo(250,10);
            ctx.lineTo(243,17);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.fillText("X", 247, 8);

            ctx.moveTo(490,250);
            ctx.lineTo(483,257);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.moveTo(490,250);
            ctx.lineTo(483,243);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.fillText("Y", 492, 252);

            ctx.moveTo(360,253);
            ctx.lineTo(360,247);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.fillText("R/2", 353, 262);

            ctx.moveTo(470,253);
            ctx.lineTo(470,247);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.fillText("R", 467, 262);

            ctx.moveTo(140,253);
            ctx.lineTo(140,247);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.fillText("-R/2", 135, 262);

            ctx.moveTo(30,253);
            ctx.lineTo(30,247);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.fillText("-R", 30, 262);

            ctx.moveTo(253,360);
            ctx.lineTo(247,360);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.fillText("-R/2", 262, 363);

            ctx.moveTo(253,470);
            ctx.lineTo(247,470);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.fillText("-R", 262, 473);

            ctx.moveTo(253,140);
            ctx.lineTo(247,140);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.fillText("R/2", 262, 144);

            ctx.moveTo(253,30);
            ctx.lineTo(247,30);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.fillText("R", 262, 34);

            ctx.moveTo(250,140);
            ctx.lineTo(140,250);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.moveTo(30,250);
            ctx.lineTo(30,360);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.moveTo(30,360);
            ctx.lineTo(250,360);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.moveTo(30,360);
            ctx.lineTo(250,360);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.arc(250, 250, 110 * 2, -Math.PI / 2, 0, false);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.stroke();






        }



    }
);