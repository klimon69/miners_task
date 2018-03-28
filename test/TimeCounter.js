
var remain_bv   = 196456;
function parseTime_bv(timestamp){
    if (timestamp < 0) timestamp = 0;
    var day = Math.floor( (timestamp/60/60) / 24);
    var hour = Math.floor(timestamp/60/60);
    var mins = Math.floor((timestamp - hour*60*60)/60);
    var secs = Math.floor(timestamp - hour*60*60 - mins*60);
    var left_hour = Math.floor( (timestamp - day*24*60*60) / 60 / 60 );

    if(String(day).length > 1) { $('.days').text(day); }
    else  { $('.days').text("0" + day); }
    
    if(String(left_hour).length > 1) { $('.hours').text(left_hour); }
    else  { $('.hours').text("0" + left_hour); }

    if(String(mins).length > 1) { $('.minutes').text(mins); }
    else { $('.minutes').text("0" + mins); }

    if(String(secs).length > 1) { $('.seconds').text(secs); }
    else { $('.seconds').text("0" + secs);}
}

$(document).ready(function(){
    setInterval(function()  {
        remain_bv = remain_bv - 1;
        parseTime_bv(remain_bv);

        if(remain_bv <= 0){ alert('TimeUp!'); } 
                            }, 1000);
});

