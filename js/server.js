var json = '{"name": "FSMP", "goal": 69, "currentp": "80%", "currentv": 50}';

// Converting JSON-encoded string to JS object
var obj = JSON.parse(json);

// Accessing individual value from JS object
document.getElementById("pBar").innerHTML = obj.currentv + "/" + obj.goal; 
document.getElementById("pBar").style.width = obj.currentp; 