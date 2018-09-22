let i = 0;

function follow() {
    if (i == 0) {
        document.getElementById("button-follow").firstChild.data="Followed";
        i = 1;
    } else {
        document.getElementById("button-follow").firstChild.data="Follow";
        i = 0;
    }
}