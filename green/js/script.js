$("li a").click(function(event){
	event.preventDefault()

	var elem=$("#"+$(this).attr("name"))
$(window).scrollTop(elem.offset().top)
console.log(elem.offset().top)
	
})