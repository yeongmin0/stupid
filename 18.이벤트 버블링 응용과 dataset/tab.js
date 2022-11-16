


// $('.tab-button').eq(0).on('click',function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(0).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(0).addClass('show');
// });
// $('.tab-button').eq(1).on('click',function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');   탭기능 for 사용 전 
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// });
// $('.tab-button').eq(2).on('click',function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
// });

// for (let i = 0; i <3; i++){
//     $('.tab-button').eq(i).on('click',function(){
//         $('.tab-button').removeClass('orange');
//         $('.tab-button').eq(i).addClass('orange'); /*for 반복문*/
//         $('.tab-content').removeClass('show');
//         $('.tab-content').eq(i).addClass('show');
// });
// }

$('.list').click(function(e){
    탭열기(e.target.dataset.id)

    // if(e.target == document.querySelectorAll('.tab-button')[0]){
    //     탭열기(0)
    // }
    // if(e.target == document.querySelectorAll('.tab-button')[1]){
    //     탭열기(1)
    // }
    // if(e.target == document.querySelectorAll('.tab-button')[2]){
    //     탭열기(2)
    // }
    // 지금 누른게 버튼 0 이면 탭열기(1)
    // 지금 누른게 버튼 0 이면 탭열기(2)
})



// function 탭열기(구멍){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(구멍).addClass('orange'); /*-----for 반복문------*/
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(구멍).addClass('show');
// }

