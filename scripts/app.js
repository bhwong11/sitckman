const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const game = {
    standingStick: document.querySelector('#standing'),
    jumpingStick: document.querySelector('#jumping'),
    dubButton: document.querySelector('#dub'),
    dubButtonX: (canvas.width / 2) - 50 / 2,
    dubButtonY: (canvas.height / 2) - 50 / 2,
    dubButtonHeight: 50,
    dubButtonWidth: 50,
    isJumping: false,
    time: 0,
}
console.log('canvas width over 2', canvas.width / 2);
console.log('over 2', (document.querySelector('#dub').getAttribute('width') / 2))
console.log(game.dubButtonX)

const player1 = {
    stickX: 0,
    stickY: (canvas.height / 2) - (200 / 2),
    stickmanHeight: 200,
    stickManWidth: 150,
}

const cpu = {
    stickX: canvas.width - 150,
    stickY: (canvas.height / 2) - (200 / 2),
    stickmanHeight: 200,
    stickManWidth: 150,
}

console.log(player1.stickY)


alert('start game?')




function drawplayer1Stickman() {
    if (game.time % 50 === 0) {
        console.log(game.time)
    }

    if (game.time % 50 === 0) {
        game.isJumping = !game.isJumping;
    }
    ctx.beginPath();
    if (game.isJumping) {
        ctx.drawImage(game.standingStick, player1.stickX, player1.stickY, player1.stickManWidth, player1.stickManWidth)

    } else {
        ctx.drawImage(game.jumpingStick, player1.stickX, player1.stickY, player1.stickManWidth, player1.stickManWidth)
    }
    //ctx.rect(birdX, birdY, birdWidth, birdHeight);
    ctx.fill();
    ctx.closePath();
}
function drawCpuStickMan() {
    if (game.time % 10 === 0) {
        cpu.stickX -= 2;
    }
    ctx.beginPath();
    if (game.isJumping) {
        ctx.drawImage(game.standingStick, cpu.stickX, cpu.stickY, cpu.stickManWidth, cpu.stickManWidth)

    } else {
        ctx.drawImage(game.jumpingStick, cpu.stickX, cpu.stickY, cpu.stickManWidth, cpu.stickManWidth)
    }
    //ctx.rect(birdX, birdY, birdWidth, birdHeight);
    ctx.fill();
    ctx.closePath();
}

function drawDub() {
    ctx.drawImage(game.dubButton, game.dubButtonX, game.dubButtonY, game.dubButtonHeight, game.dubButtonWidth)
    ctx.fill();
    ctx.closePath();

}



canvas.addEventListener('click', (e) => {
    //console.log(birdStatus)
    player1.stickX += 5;
    //console.log(birdStatus)

})
function dubDetect() {
    console.log('player1.stickX', player1.stickX)
    console.log('player1.stickManWidth', player1.stickManWidth)
    console.log('game.dubButtonX', game.dubButtonX)
    if (player1.stickX + player1.stickManWidth - (player1.stickManWidth / 3) >= game.dubButtonX) {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#000000";
        ctx.fillText('Winner', (canvas.width * (2 / 8)), 20);
        clearInterval(internal)

    }
    else if (cpu.stickX <= game.dubButtonX) {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#000000";
        ctx.fillText('Winner', (canvas.width * (6 / 8)), 20);
        clearInterval(internal)
    }
}

function draw() {
    game.time += 1
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawplayer1Stickman()
    drawCpuStickMan();
    drawDub();
    dubDetect()

}



const internal = setInterval(draw, 10)