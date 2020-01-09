$(document).ready(function(){

  document.getElementById('area').width = 450;
  document.getElementById('area').height = 450;
  
  let xcenter = document.getElementById('area').width / 2;
  let ycenter = document.getElementById('area').height / 2;

  //рамка
  // $('#area').drawLine({
  //   groups: ['constpart'],
  //   layer: true,
  //   strokeStyle: '#959595',
  //   strokeWidth: 5,
  //   rounded: true,
  //   closed: true,
  //   x1: 0, y1: 0,
  //   x2: document.getElementById('area').width, y2: 0,
  //   x3: document.getElementById('area').width, y3: document.getElementById('area').height,
  //   x4: 0, y4: document.getElementById('area').height
  // });

  //зона
  $('#area').drawRect({
    groups: ['constpart'],
    layer: true,
    fillStyle: 'steelblue',
    x: xcenter - xcenter * 0.4, y: ycenter - ycenter * 0.4,
    fromCenter: true,
    width: xcenter * 0.8,
    height: ycenter * 0.8
  });
  $('#area').drawArc({
    groups: ['constpart'],
    layer: true,
    fillStyle: 'steelblue',
    x: xcenter, y: ycenter,
    radius: ycenter * 0.4,
    start: 90, end: 180
  });
  $('#area').drawLine({
    groups: ['constpart'],
    layer: true,
    fillStyle: 'steelblue',
    strokeStyle: 'steelblue',
    strokeWidth: 1,
    closed: true,
    x1: xcenter, y1: ycenter,
    x2: xcenter + xcenter * 0.4, y2: ycenter,
    x3: xcenter, y3: ycenter * 1.4
  });
  $('#area').drawLine({
    groups: ['constpart'],
    layer: true,
    fillStyle: 'steelblue',
    strokeStyle: 'steelblue',
    strokeWidth: 1,
    closed: true,
    x1: xcenter, y1: ycenter,
    x2: xcenter, y2: ycenter * 1.4,
    x3: xcenter - xcenter * 0.4, y3: ycenter
  })

  //coordinate system
  $('#area').drawPath({
    groups: ['constpart'],
    layer: true,
    strokeStyle: '#000000',
    strokeWidth: 3,
    x: 0, y: 0,
    p1: {
      type: 'line',
      rounded: true,
      endArrow: true,
      arrowRadius: 12,
      arrowAngle: 75,
      x1: 3, y1: ycenter ,
      x2: xcenter * 2 - 6, y2: ycenter 
    },
    p2: {
      type: 'line',
      rounded: true,
      endArrow: true,
      arrowRadius: 12,
      arrowAngle: 75,
      x1: xcenter , y1: ycenter * 2 - 3,
      x2: xcenter , y2: 6
    }
  }).drawLine({
    groups: ['constpart'],
    layer: true,
    strokeStyle: '#000000',
    strokeWidth: 3,
    x1: xcenter - 4, y1: ycenter * 0.2,
    x2: xcenter + 4, y2: ycenter * 0.2
  }).drawText({
    groups: ['constpart'],
    layer: true,
    text: 'R',
    fontFamily: 'system-ui',
    fontSize: 14,
    x: xcenter + 10, y: ycenter * 0.2,
    fillStyle: '#000000',
  }).drawLine({
    groups: ['constpart'],
    layer: true,
    strokeStyle: '#000000',
    strokeWidth: 3,
    x1: xcenter - 4, y1: ycenter * 0.6,
    x2: xcenter + 4, y2: ycenter * 0.6
  }).drawText({
    groups: ['constpart'],
    layer: true,
    text: 'R/2',
    fontFamily: 'system-ui',
    fontSize: 14,
    x: xcenter + 16, y: ycenter * 0.6,
    fillStyle: '#000000',
  }).drawLine({
    groups: ['constpart'],
    layer: true,
    strokeStyle: '#000000',
    strokeWidth: 3,
    x1: xcenter + xcenter * 0.4, y1: ycenter - 4,
    x2: xcenter + xcenter * 0.4, y2: ycenter + 4
  }).drawText({
    groups: ['constpart'],
    layer: true,
    text: 'R/2',
    fontFamily: 'system-ui',
    fontSize: 14,
    x: xcenter + xcenter * 0.4, y: ycenter - 12,
    fillStyle: '#000000',
  }).drawLine({
    groups: ['constpart'],
    layer: true,
    strokeStyle: '#000000',
    strokeWidth: 3,
    x1: xcenter - 4, y1: ycenter * 1.4,
    x2: xcenter + 4, y2: ycenter * 1.4
  }).drawText({
    groups: ['constpart'],
    layer: true,
    text: 'R/2',
    fontFamily: 'system-ui',
    fontSize: 14,
    x: xcenter + 16, y: ycenter * 1.4,
    fillStyle: '#000000',
  }).drawLine({
    groups: ['constpart'],
    layer: true,
    strokeStyle: '#000000',
    strokeWidth: 3,
    x1: xcenter - xcenter * 0.4, y1: ycenter - 4,
    x2: xcenter - xcenter * 0.4, y2: ycenter + 4
  }).drawText({
    groups: ['constpart'],
    layer: true,
    text: 'R/2',
    fontFamily: 'system-ui',
    fontSize: 14,
    x: xcenter - xcenter * 0.4, y: ycenter - 12,
    fillStyle: '#000000',
  }).drawLine({
    groups: ['constpart'],
    layer: true,
    strokeStyle: '#000000',
    strokeWidth: 3,
    x1: xcenter - xcenter * 0.8, y1: ycenter - 4,
    x2: xcenter - xcenter * 0.8, y2: ycenter + 4
  }).drawText({
    groups: ['constpart'],
    layer: true,
    text: 'R',
    fontFamily: 'system-ui',
    fontSize: 14,
    x: xcenter - xcenter * 0.8, y: ycenter - 12,
    fillStyle: '#000000',
  }).drawText({
    groups: ['constpart'],
    layer: true,
    text: 'Y',
    fontFamily: 'system-ui',
    fontSize: 14,
    x: xcenter + 12, y: 10,
    fillStyle: 'steelblue',
  }).drawText({
    groups: ['constpart'],
    layer: true,
    text: 'X',
    fontFamily: 'system-ui',
    fontSize: 14,
    x: xcenter * 2 - 12, y: ycenter - 14,
    fillStyle: 'steelblue',
  });

  //добавим слои

  $('#area').setLayerGroup('constpart',{}).drawLayers();

  //получаем координаты клика и рисуем точку
  let clickX;
  let clickY;
  let onareaRx = xcenter * 0.8;
  let onareaRy = ycenter * 0.8;
  let dotcoordinateX;
  let dotcoordinateY;

  let el = document.getElementById('area');
  el.addEventListener('click', drawClickXY, false);

  let rzone = document.getElementById('rvalue');

  function drawClickXY(event)
  {
    clickX = event.offsetX ;
    clickY = event.offsetY ;

    //если удалить нужно предыдущие точки, то убираем коммент ниже : - )
    //$('#area').removeLayerGroup('dots');

    if(rzone.value !== ''){
      $('#area').drawArc({
        groups: ['dots'],
        layer: true,
        x: clickX, y: clickY,
        radius: 4
      });

      clickX -= xcenter;
      clickY *= -1;
      clickY += ycenter;
      
      dotcoordinateY = clickY * rzone.value.replace(",",".") / onareaRy;
      document.getElementById('yvalue').value = dotcoordinateY.toFixed(6).replace(".",",");

      dotcoordinateX = clickX * rzone.value.replace(",",".") / onareaRx;
      document.getElementById('xvalue').value = dotcoordinateX.toFixed(6).replace(".",",");

      let element = document.getElementById("errormessager");
      element.hidden = "true";
    }else{
      let element = document.getElementById("errormessager");
      element.hidden = ""; 
    }

    $('#area').setLayerGroup('dots',{
      fillStyle: '#FF00D1',
      strokeStyle: '#000000',
      strokeWidth: 1,
    }).drawLayers();
    sendData();
  }

});