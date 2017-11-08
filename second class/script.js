  onload=function(){
      var list=document.getElementById('list');
        var prev=document.getElementById('prev');
        var next=document.getElementById('next');
     }
     function move(num){
       var newleft=parseInt(list.style.left)+num;
       list.style.left=newleft+'px';
       if(newleft<-4800){
        list.style.left=-960+'px';
       }
       if(newleft>-960){
        list.style.left=-4800+'px';
       }
     }
     prev.onclick=function(){
      move(960);
     }
     next.onclick=function(){
      move(-960);
     }
     var timer;
     function play(){
        timer=setInterval(function(){ next.onclick()},1500)
     }
     play();
     var container=document.getElementById(container);
     function stop(){
      clearInterval(timer);
     }  



      var buttons = document.getElementById('buttons').getElementsByTagName('span');
            var index = 1;

            function buttonsShow() {
                //这里需要清除之前的样式
                for (var i = 0; i < buttons.length; i++) {
                    if (buttons[i].className == 'on') {
                        buttons[i].className = '';
                    }
                }
                //数组从0开始，故index需要-1
                buttons[index - 1].className = 'on';
            }

            prev.onclick = function() {
                index -= 1;
                if (index < 1) {
                    index = 5;
                }
                buttonsShow();
               move(960);
            }
            next.onclick = function() {
                //由于上边定时器的作用，index会一直递增下去，我们只有5个小圆点，所以需要做出判断
                index += 1;
                if (index > 5) {
                    index = 1;
                }
                buttonsShow();
                move(-960);
            }
              