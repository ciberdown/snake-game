document.querySelector("#rightbtn").addEventListener("click",rightClickFunc);
document.querySelector("#leftbtn").addEventListener("click",leftClickFunc);
document.querySelector("#downbtn").addEventListener("click",downClickFunc);
document.querySelector("#upbtn").addEventListener("click",upClickFunc);

let hr_counter = 0 ,vr_counter = 0;
let hr_position , vr_posiotion;


function rightClickFunc(){
    hr_counter<21?hr_counter++:hr_counter;
    hr_position = 40 * hr_counter;
    document.getElementById("squareid").style.marginLeft = hr_position+"px";
    document.getElementById("lenSquareid").style.marginLeft = hr_position+"px";
}
function leftClickFunc(){
    hr_counter>0?hr_counter--:hr_counter;
    hr_position = 40 * hr_counter;
    document.getElementById("squareid").style.marginLeft = hr_position+"px";

}
function downClickFunc(){
    vr_counter++;
    vr_posiotion = 40*vr_counter;
    document.getElementById("squareid").style.marginTop = vr_posiotion+"px";
}
function upClickFunc(){
    vr_counter>0? vr_counter--:vr_counter;
    vr_posiotion = 40 * vr_counter;
    document.getElementById("squareid").style.marginTop = vr_posiotion+"px";
}