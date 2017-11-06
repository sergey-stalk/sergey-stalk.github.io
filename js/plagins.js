$(document).ready(function(){
  $('.sl').slick({
    		infinite: true,
			slidesToShow: 1,
			arrows:true,
			dots:false,
			fade:false,
			autoplay:false,
			autoplaySpeed:5000,
			prevArrow: '<button type="button" class="arrow prev"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAABvCAYAAACXSCLDAAADcUlEQVR4XtXci1FTQRiGYU8F0oFYgVCBUAGkA6wArMDYgVYAVCBUIFYgVoB2oBXE/2N2M8vmXPby35KZDBLJyTPrZt8kZ2V45fyy2WwOhmH4G5mDZy9hj8j3ja6fCX0Dq3fwTzICjQvAH92CaXS/EPAymwErl2DCnoepkHrvaVqcuwPjSUbKJ7ria7z8wdTAk88j+DvhTrKpcEzYR3dPOhrdNaE+ZVisELj9+eJmhMMShlUhvfwg7IvRdgEO8xbYw0T7D9+n0XAzwgRGHLAypJcVYe+y2+ynBGEvCHWdwb4S9irHmo9wmLdYFdIl7BdhY912zKZzmMBpeoHDvD2JS5irEZ5I74f4ImcMazYl5tI7BY23q0+JpfR6BM+m1xW4JL1uwKXpdQGuSa8XcHF6zcG16TUFt6TXGlydXjNwa3pNwD3pVQf3ptcC3JVeVTBHetXAXOlVAXOmVwvMll5xMHd6RcES6ZUGs6dXDCyVXhGwZHrZwdLplQCLppcVrJFeNrBWelnAmunlAqultxusnd4usEV6e8Hq6W0GW6W3CWyZ3mqwdXpbwKbprQJ7SG8x2Et6i8Ce0rsIDlicOi0617t0QOm/Hybm7c5pf2lI6fEBxnneG7qeZXcaPZteemCpn3s+sRjQ2KLyJnkgbG57m+9XkIKUHnd7JnRilXgg8GnpwTR+7sWp271ah+PoEPqB/vw+G63triaNUZx7jJ2T42E+/6Y7vU7uiO+B3m7atIKPns2feLV2R+CVFTQ+7uT2g716PZzMZyx177Kl7nRui4v0v8DsBo+w1OFJmM7nRwIfS8Omjr+4I2Wv3jUnUwMb3lyke3GEgfaU7iJwQGPzW76ZUz3dxeCAXtPX2e2y0k/GKnBAm6a7BYzXz2bprgaHUR7bVK+S7iZwQI/9t4XFvZO9c7wZHNDq6e4FY6lTTXcXOIzyBX0t3mFtOiUs0t09wtrpZgFrppsNrJVuVrBGuiXAoulmB0unWwQsmW4xsFS6pcHs6RYFS6RbHBzQbO+6tcBY6lg+MFcBc6ZbDcyVblUwR7otwF3pVgf3ptsE3JNuM3Bruq3B1ek2Bbek2xxcm24v4OJ0uwDXpNsNuDTdrsAl6fYInk23O/BSul2CZ9Lt8/f8JJ+Kph+Y39LtV25HOFnq8H5wvRe/qyp+lJtuLPkPMBBEQnj9BkoAAAAASUVORK5CYII="></button>',
			nextArrow: '<button type="button" class="arrow next"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAABtCAYAAAA4XJixAAAETElEQVR4Xs2cgZUTIRCGTQVqBcYK9CpwU4FeBeYqUCswVqBW4F0FnhUYK/CuAmMHWkGcP07yCAs7wAIzvLePvfAufEwGfhjYXTzgtN/v39Pt48Vi8fb4mbV8QZCPCOorXQPDXRLwrTVQ8AB2S/kLB+4P3T8lYOSmEmCfE9FPj2pLsCtTpLAsgAgYfvrRg/tAwBtLwAdYBoafvvTgLgj4zgqwC4uOtqProQOHvwFswn9PsGzdgfLvniVvCfbSgnXPYBn4E+VvPLgrAr7WBh7BMjD89JkDBzeAO8At1FIMdklEAHb9945gL9RIqeIgLFt3TfkXD+6zphxHYRkYfvraA14R8FbDwhIshjO4wxPPf1XkeBKWrWtGjkVYBg7J8TtyBwxz3VISLAPDT93ZGT7uKsc5sOpynAzL1h0o9+X4mtzhqocvZMEysJocZ8MysIocl8JiOEOH6yrHRbBs3TXlXeW4GJaBQ6uLZnI8F7arHM+CnZDjJquL2bAMvKEcER03VZfjKrC95LgmbEiOMR6jw1VZHVeDZeu+ohxxMzdVk+OqsBNyXCXYVx22pRy3gm0ix01gJ+R4VrCvGWwLOW4NW1WOm8KydQfKqwT7msPWlOMusBE5hqpB3ZKD1T1hlwQ3CvblyHE32Ak5Tg72dYWdK8casBjOtnRlB6u7w7J1Q3Is7r2pwDJw9t6bGmyJHGvDhuR4Rw0J7r2pwubKsTpsjhybgJ1YXZzJsSXYoBy7e29mYFPk2BQsA19T7u+9HVbHFmFjcrwyBzux2NyZg+XTUFgGYf5wTH/pZrAIi2j62gHFrT2fJauGYmWnybkZyxIoxlkc2UIHO6Z7GgVO7mAJFqBjP3UWlCZgyaobAvUj56NzOeqwBDoQqB8E+UY/P/z3LKnC8jCFnx/+eky/4Q6haLk2LKLkvgWj+2hqsCXnH1Vg+WQp/NQdpn7QTw//jabusBNyCj/dWYMNnVdI2iDpallJTqesirJusDE5JYYhdVOvJyw6lNuB/k/7rMVnI3KavRHd3LI5cqrqs7lyqg2bJadqsGTVNVXuH/ixt8MYkdOzWb9kxVB5kw5GsKFZvyinUgOqwxJosZx2hY3I6Q0N/PDf2amaZXmY+uVN++5z5FRqTU1YX05Rd9XDwFVga8lpc8tGnicLrk4lGKl8lmUjcorZ1DJ12icBuuVzYavKqQReDNtCTpvAtpLTVrBN5LQ6bEROR0E0qeKS8iyfjcz6q8mp1IBk2IicRoNoUsUl5TmwzeVUakASbCSIlr06lWCkchE2IqdiEE2quKR8Era3nEoNkGBDe1LNHpooho3IafKBManikvKgZVP2pEoqm/s/MVgVOZUaM4LVlNMs2JpBNKnikvKTZS3IqdQAFzY066+6OpVgpPIDbMmelPTFLcpjbztRkVOpgaH3yDRbnUowUvnxDT14FvH4aHXSnpT0xS3K3Q6G86xY7yM3mf4BGgM9wm4YgCcAAAAASUVORK5CYII="></button>',

  });
});


$(document).ready(function(){
  $('.about-slide').slick({
    		infinite: true,
			slidesToShow: 1,
			arrows:true,
			dots:false,
			fade:false,
			autoplay:true,
			autoplaySpeed:5000,
			prevArrow: '<button type="button" class="arrow prev"><img src="img/about_left.png"></button>',
			nextArrow: '<button type="button" class="arrow next"><img src="img/about_right.png"></button>'

  });
});

$(document).ready(function(){
	$('.work1p').magnificPopup({
		items: {
			src: 'img/work1.jpg'
			},
		type: 'image'
	  });
	$('.work2p').magnificPopup({
		items: {
			src: 'img/work2.jpg'
			},
		type: 'image'
	  });
	$('.work3p').magnificPopup({
		items: {
			src: 'img/work3.jpg'
			},
		type: 'image'
	  });
	$('.work4p').magnificPopup({
		items: {
			src: 'img/work4.jpg'
			},
		type: 'image'
	  });
	$('.work5p').magnificPopup({
		items: {
			src: 'img/work5.jpg'
			},
		type: 'image'
	  });
	$('.work6p').magnificPopup({
		items: {
			src: 'img/work6.jpg'
			},
		type: 'image'
	  });
	$('.work7p').magnificPopup({
		items: {
			src: 'img/work7.jpg'
			},
		type: 'image'
	  });
	$('.work8p').magnificPopup({
		items: {
			src: 'img/work8.jpg'
			},
		type: 'image'
	  });

	$('.full').magnificPopup({
		items: [
		{
			src: 'img/work1.jpg'
			},
		{
			src: 'img/work2.jpg'
			},
		{
			src: 'img/work3.jpg'
			},
		{
			src: 'img/work4.jpg'
			},
		{
			src: 'img/work5.jpg'
			},
		{
			src: 'img/work6.jpg'
			},
		{
			src: 'img/work7.jpg'
			},
		{
			src: 'img/work8.jpg'
			},		
		],
		gallery: {
      		enabled: true
   		 },
    	type: 'image'
	  });
});
