var box = document.getElementsByClassName("key");
var left = document.getElementById("left");
var right = document.getElementById("right");
var up = document.getElementById("up");
var bottom = document.getElementById("bottom");
        
function pressDown(e){
    if (e.key == "Tab"){
        box[14].style.backgroundColor = "white";
        box[14].style.color = "black";
    } if (e.key != "Tab"){
        box[14].style.backgroundColor = "black";
        box[14].style.color = "white";
    } if (e.key == "CapsLock"){
        box[28].style.color = "greenyellow";
        box[28].getElementsByClassName("led")[0].style.background = "linear-gradient(to bottom right, yellow ,green , yellow)";
    } if (e.key + e.location == "Control1"){
        box[54].style.backgroundColor = "white";
        box[54].style.color = "black";
    } if (e.key + e.location == "Alt2"){
        box[59].style.backgroundColor = "white";
        box[59].style.color = "black";
    } if (e.key + e.location == "Shift2"){
        box[52].style.backgroundColor = "white";
        box[52].style.color = "black";
    } if (e.key == "ArrowLeft"){
        left.style.backgroundColor = "white";
        left.style.color = "black";
    } if (e.key == "ArrowRight"){
        right.style.backgroundColor = "white";
        right.style.color = "black";
    } if (e.key == "ArrowDown"){
        bottom.style.backgroundColor = "white";
        bottom.style.color = "black";
    } if (e.key == "ArrowUp"){
        up.style.backgroundColor = "white";
        up.style.color = "black";
    } else {
        var i = e.which + e.location + "i";
        i = change(i);
        box[i].style.backgroundColor = "white";
        box[i].style.color = "black";
    }
}
function pressUp(e){
    if (e.key == "CapsLock"){
        box[28].style.backgroundColor = "black";
        box[28].getElementsByClassName("led")[0].style.background = "white";
        box[28].style.color = "white";
    } if (e.key + e.location == "Control1"){
        box[54].style.backgroundColor = "black";
        box[54].style.color = "white";
    } if (e.key + e.location == "Alt2"){
        box[59].style.backgroundColor = "black";
        box[59].style.color = "white";
    } if (e.key + e.location == "Shift2"){
        box[52].style.backgroundColor = "black";
        box[52].style.color = "white";
    } if (e.key == "ArrowLeft"){
        left.style.backgroundColor = "black";
        left.style.color = "white";
    } if (e.key == "ArrowRight"){
        right.style.backgroundColor = "black";
        right.style.color = "white";
    } if (e.key == "ArrowDown"){
        bottom.style.backgroundColor = "black";
        bottom.style.color = "white";
    } if (e.key == "ArrowUp"){
        up.style.backgroundColor = "black";
        up.style.color = "white";
    } else {
        var i = e.which + e.location + "i";
        i = change(i);
        box[i].style.backgroundColor = "black";
        box[i].style.color = "white";
    }
}
function change(i){
    var i = i;
    i = i.replace("192i",0);i = i.replace("49i",1);i = i.replace("50i",2);i = i.replace("51i",3);i = i.replace("52i",4);
    i = i.replace("53i",5);i = i.replace("54i",6);i = i.replace("55i",7);i = i.replace("56i",8);i = i.replace("57i",9);
    i = i.replace("48i",10);i = i.replace("189i",11);i = i.replace("187i",12);i = i.replace("8i",13);

    i = i.replace("81i",15);i = i.replace("87i",16);i = i.replace("69i",17);i = i.replace("82i",18);i = i.replace("84i",19);
    i = i.replace("89i",20);i = i.replace("85i",21);i = i.replace("73i",22);i = i.replace("79i",23);i = i.replace("80i",24);
    i = i.replace("219i",25);i = i.replace("221i",26);i = i.replace("220i",27);

    i = i.replace("65i",29);i = i.replace("83i",30);i = i.replace("613",31);i = i.replace("70i",32);
    i = i.replace("71i",33);i = i.replace("72i",34);i = i.replace("74i",35);i = i.replace("75i",36);i = i.replace("76i",37);
    i = i.replace("186i",38);i = i.replace("222i",39);i = i.replace("13i",40);

    i = i.replace("17i",41);i = i.replace("90i",42);i = i.replace("813",43);i = i.replace("67i",44);i = i.replace("86i",45);
    i = i.replace("66i",46);i = i.replace("713",47);i = i.replace("77i",48);i = i.replace("143",49);i = i.replace("142",50);
    i = i.replace("191i",51);

    i = i.replace("19i",55);i = i.replace("92i",56);i = i.replace("32i",57);i = i.replace("95i",58);

    return i;
}