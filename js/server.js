var json = '{"name": "FSMP", "goal": 69, "currentp": "0%", "currentv": 0}';

// Converting JSON-encoded string to JS object
var obj = JSON.parse(json);

// Accessing individual value from JS object
document.getElementById("pBar").innerHTML = obj.currentv + "/" + obj.goal; 
document.getElementById("pBar").style.width = obj.currentp; 
