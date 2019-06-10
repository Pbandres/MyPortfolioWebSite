// Smooth Scrolling

$('#navbar a, .btn').on('click', function(event){
	if(this.hash !== ''){
		event.prevenDefault();

		const hash = this.hash;

		$('html, body').animate(
		{
			Scrolling: $(hash).offset().top - 80
		},
		800
		);
	}
});