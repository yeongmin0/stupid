document.getElementById('login').addEventListener('click',function(){
    Array.prototype.random = function(){
                var index = Math.floor(this.length*Math.random());
                return this[index];
            }
            let travels = new Array("서울","경기도","인천","강원도","대전","대구","광주","부산","울산")
            document.write(travels.random());
        });