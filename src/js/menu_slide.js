function main() {
  $('.menu-toggle').on('click',function(){
    $(this).parent().parent().prev().slideToggle(400);
	var menuOpen= $(this)[0].innerHTML.includes("down")
	if (menuOpen)
	$(this).html('<span class="fontawesome-chevron-up"></span>');
	else {
	$(this).html('<span class="fontawesome-chevron-down"></span>');
	}
	}
  );
}

$(document).ready(main);




