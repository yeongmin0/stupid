


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


// function 탭열기(구멍){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(구멍).addClass('orange'); /*-----for 반복문------*/
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(구멍).addClass('show');
// }
$('.list').click(function(e){
    탭열기(e.target.dataset.id)
})

var car2 ={name : '소나타', price :[50000, 20000 ,4000] };

// document.querySelector('.price').innerHTML =car2.price[0]; 
for (let i = 0; i <3; i++){
var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];
  
document.querySelectorAll('.card-body h5')[i].innerHTML = '상품명 : ' + products[i].title;
  document.querySelectorAll('.card-body p')[i].innerHTML = '가격:'+ products[i].price;


  document.querySelectorAll('.card-body h5')[i].innerHTML = '상품명 : ' +products[i].title;
   document.querySelectorAll('.card-body p')[i].innerHTML = '가격:'+ products[i].price;
}

var pants = [ 29,32,33];
var form = [33,31,32]

$('.form-select').eq(0).on('input',function(){
  var value = $('.form-select').eq(0).val();
if(value == '셔츠'){
  $('.form-select').eq(1).removeClass('form-hide');
  }else if(value == '바지'){
    $('.form-select').eq(2).removeClass('form-hide');
    $('.form-select').eq(2).html('');
    // for (var i = 0; i< pants.length; i++){
  // }
  pants.forEach((a) => {
    $('.form-select').eq(2).append(`<option>${a}</option>`);
  });
  form.forEach(function(b){
    $('.form-select').eq(1).append(`<option>${b}</option>`);
  });
  }
})

var obj = { name :'kim', age : 23}

for ( var key in obj){
  console.log(obj[key]);
}
