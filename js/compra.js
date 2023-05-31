const words = ["10", "25", "50", "100"];
const link1 = "https://f.s2.rip"
const param = window.location.search;
const urlpa = new URLSearchParams(param); 
if (urlpa.has('valor')) {
    const usr = urlpa.get('valor');
    document.title = "Doar R$" + usr;
    document.getElementById('qrimg').src = 'img/' + usr + '.png'
    if (words.includes(usr)) {
        document.getElementById("pd").innerHTML = "Doação R$" + usr;
        document.getElementById("tp").innerHTML = "R$"+usr;
    } else {
        window.location.replace(link1);
    }
} else {
    window.location.replace(link1);
}

function getv() {
    document.getElementById("pm").style.display = "none";
    document.getElementById("qrimg").style.display = "initial";
}