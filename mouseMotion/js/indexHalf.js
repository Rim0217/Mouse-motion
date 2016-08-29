
$(function() {
	var menu = $('.circleNavi');
	var menuItem = $('.circleNavi a');
	var rawMouseX, rawMouseY;
	var dragging = false;
	var isMenuCLick = false;
	$(menu).hover(function(){
		isMenuCLick = true;        
	},function(){
		isMenuCLick = false;
	});

	$('html').on('mousedown', mousedown);
	$('html').on('mouseup', mouseup);
	$('html').on('mousemove', mousemove);

	function mousedown(event){
		event.preventDefault();
		dragging = true;
	}
	function mouseup(event){
		dragging = false;
		event.preventDefault();
		event.stopPropagation();

    if($('.circleNavi').attr('class').indexOf('open')==-1){ // when the menu is being opend
       	MenuOpen();

    }else{  //when the menu is being closed
        mouseItemArray();
    }

  }
      function mousemove(event){
      	rawMouseX = event.pageX;
      	rawMouseY = event.pageY;

      	if(dragging&&isMenuCLick) {

      	}
      }

// When the menu is closed. Becasue the menu items are still positioned where they were when they are spread out,
// they have to be brought to the original position. This function brings the menu items to the center of the circle agian.

      function mouseItemArray(){
      	var items = $('.circleNavi a');
      	for(var i = 0, l = items.length; i < l; i++) {
      		$(items[i]).animate({
      			left:(Math.cos(Math.PI + (1/(l-1))*i*Math.PI)).toFixed(4) + "px",
      			top:(Math.sin(Math.PI + (1/(l-1))*i*Math.PI)).toFixed(4) + "px"
      		});
      	}
      	$(menu).removeClass('open');
      }


// When the menu is opened. It spreads the menu items(animation) around the mouse pointer when right- or left-clicked.
// However, the position around the mouse pointer stays where they are when the class is also 'closed'

      function MenuOpen(){
      	$(menu).offset({left:rawMouseX, top:rawMouseY});
      	var items = $('.circleNavi a');
      	for(var i = 0, l = items.length; i < l; i++) {
      		$(items[i]).animate({
      			left:(-100*Math.cos(Math.PI + (1/(l-1))*i*(Math.PI))).toFixed(4) + "px",
      			top:(100*Math.sin(Math.PI + (1/(l-1))*i*(Math.PI))).toFixed(4) + "px"
      		});
      	}
      	$(menu).addClass('open');
      }
  });



