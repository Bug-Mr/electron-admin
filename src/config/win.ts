export function changeWin() {
    window.onresize = (val) => {
        console.log(document.getElementById("content-el")?.clientHeight, "content-el")
    }
}