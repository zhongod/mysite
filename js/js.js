$(function(){ 
		//������ƶ���zhongod�ϵ�ʱ�л���һ����Ƭ������ie6��
	$('#right_content').hover(function(){
		$('#right_content_inner').stop(true,true).slideDown('slow');
	},function(){
		$('#right_content_inner').stop(true,true).slideUp('fast');	
	});   
	
		//about��link�е�������ַ�ղ�����ƶ���Ч��������ie6��
	$('.zhongod li,.music li,.address li').hover(function(){
		$(this).addClass('hover');			
			},function(){		
		$(this).removeClass('hover');		
		});
		//nva��theemes����ƶ���Ч��������ie6��
	$('#nav li#themes').hover(function(){									  
		$(this).children('ul').addClass('hover');		
			}, function(){
		$(this).children('ul').removeClass('hover');	
		});
		
	//��ʾ�б��м����dd
    $('.list .show dd').show('slow');
	$('.list dl').click(function(){
		//���dl�ҵ���Ԫ���е�ddִ�ж�����ʾ��ͬʱ�ֵܽ��Ҳִ�ж�������
		//dt�ϵ�ͼ��Ҳ��Ӧ�ĸı�
		//Ϊ�����dd��������class
		$(this).children('dd').slideDown().end().siblings().children('dd').slideUp();
		$(this).children('dt').addClass('icon').end().siblings().children('dt').removeClass();
		$('.list .show').children('dt').addClass('show-A');
	});
	$('.list .show').click(function(){
		$(this).children('dt').addClass('show-B');
	});
	$('.all-show-btn').click(function(){
		$('.list dl dd').slideDown();
		$('.list dl dt').addClass('icon');
		$('.list .show dt').addClass('show-B');
	});
	$('.all-hide-btn').click(function(){
		$('.list dl dd').slideUp();
		$('.list dl dt').removeClass();
		$('.list .show dt').addClass('show-A');		
	});
	
	//���ص�һ��div�����������
	//���li��ʾ��Ӧ��div��li��divͨ��index���������
	$('#box_content div:gt(0)').hide();
		var tabfirst_li=$('.tabfirst li');
		tabfirst_li.click(function(){
			$(this).addClass('tabin').siblings().removeClass();
		   var tabfirst_li_index = tabfirst_li.index(this);
		   $('#box_content div').eq(tabfirst_li_index).show().siblings().hide();
		},function(){});
});
