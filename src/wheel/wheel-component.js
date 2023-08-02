import React from 'react';

export const WheelComponent = function WheelComponent(_ref) {
  var segments = _ref.segments,
    winningSegment = _ref.winningSegment,
    onFinished = _ref.onFinished,
    _ref$primaryColor = _ref.primaryColor,
    primaryColor = _ref$primaryColor === void 0 ? 'black' : _ref$primaryColor,
    _ref$contrastColor = _ref.contrastColor,
    contrastColor = _ref$contrastColor === void 0 ? 'white' : _ref$contrastColor,
    _ref$buttonText = _ref.buttonText,
    buttonText = _ref$buttonText === void 0 ? 'SPIN' : _ref$buttonText,
    _ref$isOnlyOnce = _ref.isOnlyOnce,
    isOnlyOnce = _ref$isOnlyOnce === void 0 ? true : _ref$isOnlyOnce,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 290 : _ref$size,
    _ref$upDuration = _ref.upDuration,
    upDuration = _ref$upDuration === void 0 ? 100 : _ref$upDuration,
    _ref$downDuration = _ref.downDuration,
    downDuration = _ref$downDuration === void 0 ? 1000 : _ref$downDuration,
    _ref$fontFamily = _ref.fontFamily,
    fontFamily = _ref$fontFamily === void 0 ? 'proxima-nova' : _ref$fontFamily;
  var currentSegment = '';
  var lastSegment = '';
  // eslint-disable-next-line no-unused-vars
  var isStarted = false;

  var _useState = React.useState(false),
    isFinished = _useState[0],
    setFinished = _useState[1];

  var timerHandle = 0;
  var timerDelay = segments.length;
  var angleCurrent = 0;
  var angleDelta = 0;
  var canvasContext = null;
  var maxSpeed = Math.PI / ("" + segments.length);
  var upTime = segments.length * upDuration;
  var downTime = segments.length * downDuration;
  var spinStart = 0;
  var frames = 0;
  var centerX = size / 2;
  var centerY = size / 2;
  var logo = new Image();
  logo.src = require('../assets/igs.png')
  new Audio('/spin.mp3')

  React.useEffect(function () {
    wheelInit();
    setTimeout(function () {
      window.scrollTo(0, 1);
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var wheelInit = function wheelInit() {
    initCanvas();
    draw();
    logo.onload = draw;
  };

  var initCanvas = function initCanvas() {
    var canvas = document.getElementById('canvas');
    console.log(navigator);

    if (navigator.userAgent.indexOf('MSIE') !== -1) {
      canvas = document.createElement('canvas');
      canvas.setAttribute('width', size);
      canvas.setAttribute('height', size);
      canvas.setAttribute('id', 'canvas');
      document.getElementById('wheel').appendChild(canvas);
    }

    canvas.addEventListener('click', spin, false);
    canvasContext = canvas.getContext('2d');
  };

  var spin = function spin() {
    isStarted = true;

    if (timerHandle === 0) {
      spinStart = new Date().getTime();
      maxSpeed = Math.PI / segments.length;
      frames = 0;
      timerHandle = setInterval(onTimerTick, timerDelay);
    }
  };

  var onTimerTick = function onTimerTick() {
    frames++;
    draw();
    var duration = new Date().getTime() - spinStart;
    var progress = 0;
    var finished = false;

    if (duration < upTime) {
      progress = duration / upTime;
      angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2);
    } else {
      if (winningSegment) {
        if (currentSegment === winningSegment && frames > segments.length) {
          progress = duration / upTime;
          angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);
          progress = 1;
        } else {
          progress = duration / downTime;
          angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);
        }
      } else {
        progress = duration / downTime;
        angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);
      }

      if (progress >= 1) finished = true;
    }

    angleCurrent += angleDelta;

    while (angleCurrent >= Math.PI * 2) {
      angleCurrent -= Math.PI * 2;
    }

    if (finished) {
      setFinished(true);
      onFinished(currentSegment);
      clearInterval(timerHandle);
      timerHandle = 0;
      angleDelta = 0;
    }
  };

  var logoDraw = function logoDraw() {
    if (!logo.complete) {
      return;
    }
    var ctx = canvasContext;
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(angleCurrent);
    ctx.drawImage(logo, -centerX, -centerY, size, size)
    ctx.restore();
  }

  var draw = function draw() {
    clear();
    logoDraw();
    drawWheel();
    drawNeedle();
  };

  var drawSegment = function drawSegment(key, lastAngle, angle) {
    var ctx = canvasContext;
    var value = segments[key];
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, size / 2, lastAngle, angle, false);
    ctx.lineTo(centerX, centerY);
    ctx.closePath();
    ctx.stroke();
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((lastAngle + angle) / 2);
    ctx.fillStyle = 'black';
    ctx.font = 'bold 1em ' + fontFamily;
    ctx.fillText(value.substr(0, 20), size / 4 + 20, 0);
    ctx.restore();
  };

  var drawWheel = function drawWheel() {
    var ctx = canvasContext;
    var lastAngle = angleCurrent;
    var len = segments.length;
    var PI2 = Math.PI * 2;
    ctx.lineWidth = 1;
    ctx.strokeStyle = primaryColor;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.font = '1em ' + fontFamily;

    for (var i = 1; i <= len; i++) {
      var angle = PI2 * (i / len) + angleCurrent;
      drawSegment(i - 1, lastAngle, angle);
      lastAngle = angle;
    }

    ctx.beginPath();
    ctx.arc(centerX, centerY, 50, 0, PI2, false);
    ctx.closePath();
    ctx.fillStyle = contrastColor;
    ctx.lineWidth = 10;
    ctx.strokeStyle = primaryColor;
    ctx.fill();
    ctx.font = 'bold 1em ' + fontFamily;
    ctx.fillStyle = primaryColor;
    ctx.textAlign = 'center';
    ctx.fillText(buttonText, centerX, centerY + 3);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(centerX, centerY, size / 2 - 2, 0, PI2, false);
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = primaryColor;
    ctx.stroke();
  };

  var drawNeedle = function drawNeedle() {
    var ctx = canvasContext;
    ctx.lineWidth = 1;
    ctx.strokeStyle = primaryColor;
    ctx.fillStyle = primaryColor;
    ctx.beginPath();
    ctx.moveTo(centerX + 20, centerY - 50);
    ctx.lineTo(centerX - 20, centerY - 50);
    ctx.lineTo(centerX, centerY - 70);
    ctx.closePath();
    ctx.fill();
    var change = angleCurrent + Math.PI / 2;
    var i = segments.length - Math.floor(change / (Math.PI * 2) * segments.length) - 1;
    if (i < 0) i = i + segments.length;
    lastSegment = currentSegment;
    currentSegment = segments[i];
    if (currentSegment !== lastSegment && isStarted) {
      var tickSound = new Audio('/spin.mp3')
      tickSound.play();
    };
  };

  var clear = function clear() {
    var ctx = canvasContext;
    ctx.clearRect(0, 0, size, size);
  };

  return (
    <div id='wheel'>
      <canvas
        id='canvas'
        width={size}
        height={size}
        style={
          { pointerEvents: isFinished && isOnlyOnce ? 'none' : 'auto' }
        }
      />
    </div>
  )
};

export default WheelComponent
