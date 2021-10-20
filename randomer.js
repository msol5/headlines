function randomize() {
    document.open()
    document.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>headlines</title><link rel="stylesheet" href="style.css"><body><script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script><script type="text/javascript" src="randomer.js"></script><button onclick="randomize()">randomize</button><div class="grid-container">')
    var picList = new Array()
        picList[0]='<div class="grid-item"><img src="cope/1.gif"></img></div>'
        picList[1]='<div class="grid-item"><img src="cope/2.png"></img></div>'
        picList[2]='<div class="grid-item"><img src="cope/3.png"></img></div>'
        picList[3]='<div class="grid-item"><img src="cope/4.gif"></img></div>'
        picList[4]='<div class="grid-item"><img src="cope/5.jpg"></img></div>'
        picList[5]='<div class="grid-item"><img src="cope/6.png"></img></div>'
        picList[6]='<div class="grid-item"><img src="cope/7.jpg"></img></div>'
        picList[7]='<div class="grid-item"><img src="cope/8.png"></img></div>'
        picList[8]='<div class="grid-item"><img src="cope/9.png"></img></div>'
        picList[9]='<div class="grid-item"><img src="cope/10.png"></img></div>'
        picList[10]='<div class="grid-item"><img src="cope/11.png"></img></div>'
        picList[11]='<div class="grid-item"><img src="cope/12.png"></img></div>'
        picList[12]='<div class="grid-item"><img src="cope/13.png"></img></div>'
        picList[13]='<div class="grid-item"><img src="cope/14.png"></img></div>'
        picList[14]='<div class="grid-item"><img src="cope/15.png"></img></div>'
        picList[15]='<div class="grid-item"><img src="cope/16.jpg"></img></div>'
        picList[16]='<div class="grid-item"><img src="cope/17.jpg"></img></div>'
        picList[17]='<div class="grid-item"><img src="cope/18.png"></img></div>'
        picList[18]='<div class="grid-item"><img src="cope/19.jpg"></img></div>'
        picList[19]='<div class="grid-item"><img src="cope/20.png"></img></div>'
        picList[20]='<div class="grid-item"><img src="cope/21.png"></img></div>'
        picList[21]='<div class="grid-item"><img src="cope/22.png"></img></div>'
        picList[22]='<div class="grid-item"><img src="cope/23.gif"></img></div>'
        picList[23]='<div class="grid-item"><img src="cope/24.png"></img></div>'
        picList[24]='<div class="grid-item"><img src="cope/25.png"></img></div>'
        picList[25]='<div class="grid-item"><img src="cope/26.png"></img></div>'
        picList[26]='<div class="grid-item"><img src="cope/27.jpg"></img></div>'
        picList[27]='<div class="grid-item"><img src="cope/28.jpg"></img></div>'
        picList[28]='<div class="grid-item"><img src="cope/29.png"></img></div>'
        picList[29]='<div class="grid-item"><img src="cope/30.jpg"></img></div>'
        picList[30]='<div class="grid-item"><img src="cope/31.jpg"></img></div>'

    var picList2 = new Array()
        for(i=0; i<picList.length; i++){
        var pic = picList[Math.floor(Math.random()*picList.length)]
        if (picList2.includes(pic)) {
            ;
        }
        else {
            picList2.push(pic)
            document.write(pic)}}}
