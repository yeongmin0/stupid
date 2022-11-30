// document.getElementById('login').addEventListener('click',function(){
//     Array.prototype.random = function(){
//                 var index = Math.floor(this.length*Math.random());
//                 return this[index];
//             }
//             let travels = new Array("서울","경기도","인천","강원도","대전","대구","광주","부산","울산")
//             document.write(travels.random());
//         });


//  $('.form-select').eq(0).on('input' ,function(){

// var value = $('.form-select').eq(0).val();

//     if(value == '아시아' ){
//         $('.form-select').eq(1).removeClass('form-hide');
//     }
// })

for (let i = 0; i <10; i++){
    $('.tab-button').eq(i).on('click',() =>{
        $('.tab-button').removeClass('red');
        $('.tab-button').eq(i).addClass('red'); /*for 반복문*/
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(i).addClass('show');
});
}

document.getElementById('button').addEventListener('click',function(){
    alert('프로젝트 입니다');
});

function night() {
    $('body').css("backgroundColor" ,'black');
    $('body').css("color" ,"white");
  }
  
function day() {
    $('body').css("backgroundColor" ,'white');
    $('body').css("color" ,"black");
}
