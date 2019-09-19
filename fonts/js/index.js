$(function(){
	// 导航条顶部文字轮播
	var num=0;
	var timer;
	function textbanner(){
		clearInterval(timer);
		timer=setInterval(function(){
			num++;
			if(num>=2){
				num=0;
			}
			$('.ljm_navtop li').eq(num).css('opacity', '1').siblings('li').css('opacity', '0');
		},3000);
	}
	textbanner();
	$('.ljm_navtop').hover(function() {
		clearInterval(timer);
	}, function() {
		textbanner();
	});
	// 顶部导航条轮播关闭
	$('.ljm_navtop li span').click(function(event) {
		$('.ljm_navtop').hide();
		$('.ljm_slide').css('top', '14px');
	});
	// 导航条滚动顶部定位
	$(window).scroll(function(event) {
		var heg=$(window).scrollTop();
		if(heg>120){
			$('.ljm_nav').slideDown('500', function() {
				$('.ljm_nav').css({
					position: 'fixed',
					top: '0',
				});
				$('.ljm_navcon').css('backgroundColor', 'rgba(255,255,255,0.6)');
			});
			// 护肤
			$('.ljm_navbar li:nth-of-type(2)').hover(function() {
					$('section .skincare').css({
						position: 'fixed',
						display: 'block',
						top: '122px'
					}).siblings('div').css('display', 'none');
			}, function() {
				$('section .skincare').css('display', 'none');
			});
			$('section .skincare').hover(function() {
				$(this).css('display', 'block').siblings('div').css('display', 'none');
			}, function() {
				$(this).css('display', 'none');
			});
			
			// 彩妆
			$('.ljm_navbar li:nth-of-type(3)').hover(function() {
				$('section .makeup').css({
						position: 'fixed',
						display: 'block',
						top: '122px'
					}).siblings('div').css('display', 'none');
			}, function() {
				$('section .makeup').css('display', 'none');
			});
			$('section .makeup').hover(function() {
					$(this).css('display', 'block').siblings('div').css('display', 'none');
				}, function() {
					$(this).css('display', 'none');
			});
			// 护肤彩妆关闭按钮
			$('section .skincare span').click(function(event) {
				$('section .skincare').css('display', 'none');
			});
			$('section .makeup span').click(function(event) {
				$('section .makeup').css('display', 'none');
			});
		}
		if(heg<120){
			$('.ljm_nav').css({'position': 'relative',});
			$('.ljm_navcon').css('backgroundColor', 'rgba(255,255,255,0)');
			
		}
	});
	
	// 最小屏内容下滑按键
	$('.ljm_slide').click(function(event) {
		$(this).css('backgroundColor', 'rgba(0,0,0,0)');
	});

	// 护肤
	$('.ljm_navbar li:nth-of-type(2)').hover(function() {
			$('section .skincare').css('display', 'block');
	}, function() {
		$('section .skincare').css('display', 'none');
	});
	$('section .skincare').hover(function() {
		$(this).css('display', 'block').siblings('div').css('display', 'none');
	}, function() {
		$(this).css('display', 'none');
	});

	// 彩妆
	$('.ljm_navbar li:nth-of-type(3)').hover(function() {
		$('section .makeup').css('display', 'block').siblings('div').css('display', 'none');
	}, function() {
		$('section .makeup').css('display', 'none');
	});
	$('section .makeup').hover(function() {
			$(this).css('display', 'block').siblings('div').css('display', 'none');
		}, function() {
			$(this).css('display', 'none');
	});
	// 护肤彩妆关闭按钮
	$('section .skincare span').click(function(event) {
		$('section .skincare').css('display', 'none');
	});
	$('section .makeup span').click(function(event) {
		$('section .makeup').css('display', 'none');
	});

	//底部
	$('.ft1 a:nth-of-type(1)').hover(function() {
		$('.brand').slideDown('500', function() {
			$('.brand').show();
		}).siblings('.limited').slideUp(500);
	}, function() {
		clearInterval(timer);
		timer=setTimeout(function(){
			clearInterval(timer);
			$('.brand').slideUp('500', function() {
				$('.brand').hide();
			});
		},1000);	
	});
	$('.brand').hover(function() {
		clearInterval(timer);
		$(this).show();
	}, function() {
		$('.brand').slideUp('500', function() {
			$(this).hide();
		});
	});

	$('.ft1 a:nth-of-type(2)').hover(function() {
		$('.limited').slideDown('500', function() {
			$('.limited').show();	
		}).siblings('.brand').slideUp(500);
	}, function() {
		clearInterval(timer);
		timer=setTimeout(function(){
			clearInterval(timer);
			$('.limited').slideUp('500', function() {
				$('.limited').hide();
				
			});
		},1000);		
	});
	$('.limited').hover(function() {
		clearInterval(timer);
			$(this).show();
		}, function() {
			$('.limited').slideUp('500', function() {
				$('.limited').hide();
				
			});
		});
	
	$('.brand span').click(function(event) {
		$('.brand').slideUp('500', function() {
			$('.brand').hide();
		});
	});
	$('.limited span').click(function(event) {
		$('.limited').slideUp('500', function() {
			$('.limited').hide();
		});
	});
	
	$(window).scroll(function(event){
		var heg=$(window).scrollTop();
		var footerheg=$('.footer_fix').offset().top;
		var menuheg=$('.menu').offset().top;
		console.log(footerheg);
		if(heg>=0&&heg<menuheg-800){
				$('.footer_fix').css({
					position: 'fixed',
					bottom: '0px'
				});
				$('.brand').css({
					position: 'fixed',
					bottom: '45px'
				});
				$('.limited').css({
					position: 'fixed',
					bottom: '45px'
				});
				$('.fix_left').css('opacity','1');
				if(heg>120){
					$('.fixed_right span').css('opacity', '1');
					$('.small_window').css('opacity','1');
				}else if(heg<120){
					$('.fixed_right span').css('opacity', '0');
					$('.small_window').css('opacity','0');
				}
				
			}else{
				$('.footer_fix').css({
					position: 'relative',
					bottom: '0px'
				});
				$('.brand').css({
					position: 'absolute',
					bottom: '496px'
				});
				$('.limited').css({
					position: 'absolute',
					bottom: '496px'
				});
				$('.fixed_right span').css('opacity', '0');
				$('.small_window').css('opacity','0');
				$('.fix_left').css('opacity','0');
			}	
	})

	// 登陆注册模态框
	$('.user_login_state span').click(function(event) {
		$('.ljm_modal').show();
	});
	$('.login_modal span').click(function(event) {
		$('.ljm_modal').hide();
	});

	// 返回顶部
	$('.fixed_right span').click(function(event) {
		$('html,body').animate({'scrollTop':0}, 500);

	});

})