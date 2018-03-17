
        var canvas=document.getElementById('canvas');
        //console.log(canvas)
        var ctx = canvas.getContext('2d');
        ctx.lineWidth=4
        
        var painting=false;
        var lastPoint={x:undefined,y:undefined}


        autoSetCanvasSize(canvas)

        listenUser(canvas)
        function autoSetCanvasSize(canvas){
            setCanvasSize();
            window.onresize=function(){
            setCanvasSize();
           

            }
         function setCanvasSize(){
                var pageWidth = document.documentElement.clientWidth
                var pageHeight = document.documentElement.clientHeight

                canvas.width = pageWidth
                canvas.height = pageHeight

        }

    }
        function listenUser(canvas){
            //ctx.lineWidth=this.lineWidth;
            if(document.body.ontouchstart!==undefined){
                
                //alert("hi")
                canvas.ontouchstart=function(a){
                        var x=a.touches[0].clientX;
                        var y=a.touches[0].clientY;
                        //console.log(x,y);
                        painting=true
                        
                        if(earaserEnabled){
                            ctx.clearRect(x-5,y-5,10,10);
                        }
                        else{
                            lastPoint={"x":x,"y":y};
                            //ctx.lineWidth=this.lineWidth;
                            drawCirle(x,y,this.lineWidth/2);
                       }

                }
                canvas.ontouchmove=function(a){
                    var x=a.touches[0].clientX;
                    var y=a.touches[0].clientY;
                    if(!painting){return}
                    if(earaserEnabled){
                         ctx.clearRect(x-5,y-5,10,10);
                     }
                    else{
               
                        var newPoint={"x":x,"y":y};
                        //ctx.lineWidth=this.lineWidth;
                        drawCirle(x,y,this.lineWidth/2);
                        drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
                        lastPoint=newPoint;
                    }
                 }
                canvas.ontouchend=function(a){
                    painting=false;
                     //earaserEnabled=false
                }

            }
            else{
                canvas.onmousedown=function(a){
           
                var x=a.clientX;
                var y=a.clientY;
                painting=true
          
                 if(earaserEnabled){
                    ctx.clearRect(x-5,y-5,10,10);


                 }
                else{
              
                    lastPoint={"x":x,"y":y};
                    //ctx.lineWidth=this.lineWidth;
                    drawCirle(x,y,this.lineWidth/2);

                 }
          
            }
                canvas.onmousemove=function(a){
                var x=a.clientX;
                var y=a.clientY;
                if(!painting){return}
            
                if(earaserEnabled){
                 ctx.clearRect(x-5,y-5,10,10);

                }
                else{
                var newPoint={"x":x,"y":y};
                //ctx.lineWidth=this.lineWidth;
                drawCirle(x,y,this.lineWidth/2);
                drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
                lastPoint=newPoint;
                }
             }
             canvas.onmouseup=function(a){
                painting=false;
                //earaserEnabled=false

                }

            }
    }


       
      function drawCirle(x,y,radius){
           ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI*2)
            ctx.fill()
            ctx.closePath();

    }
        
        function drawLine(x1,y1,x2,y2){
            ctx.beginPath();
           // ctx.strokeStyle="black";
            ctx.moveTo(x1,y1)
            ctx.lineTo(x2,y2)
            ctx.lineWidth=this.lineWidth;
            
            ctx.stroke();
            ctx.closePath();


        }
       

        var earaserEnabled=false;
           
        brush.onclick=function(){
            //alert("hi")
            earaserEnabled=false;
            brush.classList.add('active');
           //brush.addClassList='active'
           earaser.classList.remove('active')
            


        }    
        earaser.onclick=function(){
            //alert("hi")
        earaserEnabled=true;
        earaser.classList.add('active');
        brush.classList.remove('active');

    } 
    black.onclick=function(){
        ctx.fillStyle="black"
        ctx.strokeStyle="black";
        black.classList.add('active')
        blue.classList.remove('active')
        yellow.classList.remove('active')
        green.classList.remove('active')
        red.classList.remove('active')
        

    }
    red.onclick=function(){
        ctx.fillStyle="red"
        ctx.strokeStyle="red";
        red.classList.add('active')
        blue.classList.remove('active')
        yellow.classList.remove('active')
        green.classList.remove('active')
        black.classList.remove('active')

    }
    
    yellow.onclick=function(){
        ctx.fillStyle="yellow"
        ctx.strokeStyle="yellow";
        yellow.classList.add('active')
        blue.classList.remove('active')
        red.classList.remove('active')
        green.classList.remove('active')
        black.classList.remove('active')


    }  
    green.onclick=function(){
        ctx.fillStyle="green"
        ctx.strokeStyle="green";
       green.classList.add('active')
        blue.classList.remove('active')
        yellow.classList.remove('active')
        red.classList.remove('active')
        black.classList.remove('active')


    }
    delet.onclick=function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);

    }   
    thin.onclick=function(){
        ctx.lineWidth=4

    } 
    thick.onclick=function(){
        ctx.lineWidth=10;

    }   
    save.onclick=function(){
        var url = canvas.toDataURL("image/jpeg", 1.0);
        var a=document.createElement('a')
        document.body.appendChild(a);
        a.href=url
        a.download='xxx'
        a.click();

    }
        


   