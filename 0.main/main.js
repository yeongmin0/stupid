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


document.getElementById('mainons').addEventListener('click',function(){
  let chios = prompt("추천을 골라보세요 연습입니다");

  switch(chios){
    case "서울" :
      alert("");
    case "경기도" :
      alert("서울시 입니다 (연습)");
    case "인천" :
        alert("서울시 입니다 (연습)");
    case "강원도" :
        alert("서울시 입니다 (연습)");
    case "대전" :
        alert("서울시 입니다 (연습)");
    case "청주" :
        alert("서울시 입니다 (연습)");  
    case "천안" :
        alert("서울시 입니다 (연습)"); 
    case "대구" :
        alert("서울시 입니다 (연습)");
    case "부산" :
        alert("서울시 입니다 (연습)"); 
    case "경남" :
        alert("서울시 입니다 (연습)");           
  }
})



function nightchinge(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
    self.value = 'day';

    let list = document.querySelectorAll('a');
    let i = 0;
    while(i < list.length){
      list[i].style.color = 'powderblue';
      i = i + 1;
    }
  }else{
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    self.value = 'night';

    let list = document.querySelectorAll('a');
    let i = 0;
    while(i < list.length){
      list[i].style.color = 'blue';
      i = i + 1;
    }
  }
}



// let war = document.querySelector('body');

// $('travel').on('click',function(){
//   if(war === 'night'){
//     $('body').css("backgroundColor" ,'black');
//     $('body').css("color" ,"white");
//     $('travel').val('day');
//   }else{
//     $('body').css("backgroundColor" ,'white');
//     $('body').css("color" ,"black");
//     $('travel').val('night');
//   }
// });



// let chgin = () => {

// var taget = document.querySelector('body');
//   if(this.value === 'night'){
//     taget.style.backgroundColor = 'black';
//     taget.style.colro = 'white';
//     this.value = 'day';
//   }else{
//     taget.style.backgroundColor = 'white';
//     taget.style.colro = 'white';
//     this.value = 'night';
//   }
// }


// function chgin(){
//   let tager = document.querySelector("#travel")
  
//     if(this.tager === 'night'){
//       $('body').css("backgroundColor" ,'black');
//       $('body').css("color" ,"white");
//       $("#travel").text("day");
//       this.tager = 'day';
//     }else{
//       $('body').css("backgroundColor" ,'white');
//       $('body').css("color" ,"black");
//       $("#travel").text("night");
//       this.tager = 'night';
//     }
//   }
  


// function night() {
//     $('body').css("backgroundColor" ,'black');
//     $('body').css("color" ,"white");
//   }
  
// function day() {
//     $('body').css("backgroundColor" ,'white');
//     $('body').css("color" ,"black");
// }

function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
    
    mapLink.href = '';
    mapLink.textContent = '';
    
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
    
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }
    
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
    
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
    
    }
    
    document.querySelector('#find-me').addEventListener('click', geoFindMe);