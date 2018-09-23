let i = 0;

function follow() {
    if (i == 0) {
        document.getElementById("button-follow").firstChild.data="Followed";
        document.getElementById("button-follow").style.background="#3333ff";
        i = 1;
    } else {
        document.getElementById("button-follow").firstChild.data="Follow";
        document.getElementById("button-follow").style.background="#71BD82";
        i = 0;
    }
}