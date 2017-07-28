$("li a").click(function(event){
	event.preventDefault()

	var elem=$("#"+$(this).attr("about"))
$(window).scrollTop(elem.offset().top)
console.log(elem.offset().top)
	
})