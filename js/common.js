$(function(){
    AOS.init({
        // 스크롤의 떨어진 거리
        //offset:200,
        //duration:1000
    });

    $('.gnb_con').on('click',function(){
        $('.dep2').toggleClass('on')
    })

    $('.ham').on('click', function(){
        $('.gnb').toggleClass('on')
    })
    $('.gnb>li').click(function(){
        if ($(this).attr('class') != 'on'){
            $('.gnb>li').children('.dep2').slideUp()
            $(this).children('.dep2').slideToggle()
            $('.gnb>li').removeClass('on')
            $(this).addClass('on')
        }else{
            $(this).children('.dep2').slideToggle()
            $(this).removeClass('on')
        }
    })

    $('.btn_lists>li').eq(0).addClass('on')
    $('.con_list>li').eq(0).addClass('on')
    
    $('.btn_lists>li').on('click',function(){
        let idth = $(this).index()
        console.log(idth)
        $('.btn_lists>li').removeClass('on')
        $(this).addClass('on')
        $('.con').removeClass('on')
        $('.con').eq(idth).addClass('on')      
    })
})