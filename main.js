// Setting Project Name in Main title


function changeTitle(){
var project = document.getElementById("titleInput").value;
localStorage.setItem("title", project);
let x = localStorage.getItem("titleInput");
document.getElementById("title").innerHTML = x;

}

function setDate() {

    var x = document.getElementById("dateInput").value;
    localStorage.setItem("dateInput", x);
    let date = localStorage.getItem("dateInput");
    document.getElementById("date").innerHTML = date;

}

function setDateButton() {
    var day = new Date().getDate(); //To get the Current Date
    var month = new Date().getMonth() + 1; //To get the Current Month
    var year = new Date().getFullYear(); //To get the Current Year
    var date = day + '/' + month + '/' + year;
    document.getElementById("date").innerHTML = date;

    localStorage.setItem("dateInput", date);
    document.getElementById("date").innerHTML = date;
}

function setAccount() {
    var x = document.getElementById("accountInput").value;
    localStorage.setItem("accountInput", x);

    let date = localStorage.getItem("accountInput");
    document.getElementById("account").innerHTML = date;
}

function incFO() {
    var x = document.getElementById("FO").innerHTML;
    var num = parseInt(x);
    num++;
    x = num.toString();
    document.getElementById("FO").innerHTML = x;
    localStorage.setItem("FO", x);

}

function decFO() {
    var x = document.getElementById("FO").innerHTML;
    var num = parseInt(x);
    num--;
    x = num.toString();
    document.getElementById("FO").innerHTML = x;
    localStorage.setItem("FO", x);

}

function incOrg() {
    var x = document.getElementById("Organic").innerHTML;
    var num = parseInt(x);
    num++;
    x = num.toString();
    document.getElementById("Organic").innerHTML = x;
    localStorage.setItem("Organic", x);

}

function decOrg() {
    var x = document.getElementById("Organic").innerHTML;
    var num = parseInt(x);
    num--;
    x = num.toString();
    document.getElementById("Organic").innerHTML = x;
    localStorage.setItem("Organic", x);

}

function incDel() {
    var x = document.getElementById("Delivered").innerHTML;
    var num = parseInt(x);
    num++;
    x = num.toString();
    document.getElementById("Delivered").innerHTML = x;
    localStorage.setItem("Delivered", x);

}

function decDel() {
    var x = document.getElementById("Delivered").innerHTML;
    var num = parseInt(x);
    num--;
    x = num.toString();
    document.getElementById("Delivered").innerHTML = x;
    localStorage.setItem("Delivered", x);

}

function incRev() {
    var x = document.getElementById("Reviews").innerHTML;
    var num = parseInt(x);
    num++;
    x = num.toString();
    document.getElementById("Reviews").innerHTML = x;
    localStorage.setItem("Reviews", x);

}

function decRev() {
    var x = document.getElementById("Reviews").innerHTML;
    var num = parseInt(x);
    num--;
    x = num.toString();
    document.getElementById("Reviews").innerHTML = x;
    localStorage.setItem("Reviews", x);

}

function incCancel() {
    var x = document.getElementById("Cancelled").innerHTML;
    var num = parseInt(x);
    num++;
    x = num.toString();
    document.getElementById("Cancelled").innerHTML = x;
    localStorage.setItem("Cancelled", x);

}

function decCancel() {
    var x = document.getElementById("Cancelled").innerHTML;
    var num = parseInt(x);
    num--;
    x = num.toString();
    document.getElementById("Cancelled").innerHTML = x;
    localStorage.setItem("Cancelled", x);

}

function incDispute() {
    var x = document.getElementById("Dispute").innerHTML;
    var num = parseInt(x);
    num++;
    x = num.toString();
    document.getElementById("Dispute").innerHTML = x;
    localStorage.setItem("Dispute", x);

}

function decDispute() {
    var x = document.getElementById("Dispute").innerHTML;
    var num = parseInt(x);
    num--;
    x = num.toString();
    document.getElementById("Dispute").innerHTML = x;
    localStorage.setItem("Dispute", x);

}

function incResolve() {
    var x = document.getElementById("Resolved").innerHTML;
    var num = parseInt(x);
    num++;
    x = num.toString();
    document.getElementById("Resolved").innerHTML = x;
    localStorage.setItem("Resolved", x);

}

function decResolve() {
    var x = document.getElementById("Resolved").innerHTML;
    var num = parseInt(x);
    num--;
    x = num.toString();
    document.getElementById("Resolved").innerHTML = x;
    localStorage.setItem("Resolved", x);

}

function inc1Star() {
    var x = document.getElementById("Rating1").innerHTML;
    var num = parseInt(x);
    num++;
    x = num.toString();
    document.getElementById("Rating1").innerHTML = x;
    localStorage.setItem("Rating1", x);

}

function dec1Star() {
    var x = document.getElementById("Rating1").innerHTML;
    var num = parseInt(x);
    num--;
    x = num.toString();
    document.getElementById("Rating1").innerHTML = x;
    localStorage.setItem("Rating1", x);

}

function inc2Star() {
    var x = document.getElementById("Rating2").innerHTML;
    var num = parseInt(x);
    num++;
    x = num.toString();
    document.getElementById("Rating2").innerHTML = x;
    localStorage.setItem("Rating2", x);

}

function dec2Star() {
    var x = document.getElementById("Rating2").innerHTML;
    var num = parseInt(x);
    num--;
    x = num.toString();
    document.getElementById("Rating2").innerHTML = x;
    localStorage.setItem("Rating2", x);

}

function inc3Star() {
    var x = document.getElementById("Rating3").innerHTML;
    var num = parseInt(x);
    num++;
    x = num.toString();
    document.getElementById("Rating3").innerHTML = x;
    localStorage.setItem("Rating3", x);

}

function dec3Star() {
    var x = document.getElementById("Rating3").innerHTML;
    var num = parseInt(x);
    num--;
    x = num.toString();
    document.getElementById("Rating3").innerHTML = x;
    localStorage.setItem("Rating3", x);

}

function inc4Star() {
    var x = document.getElementById("Rating4").innerHTML;
    var num = parseInt(x);
    num++;
    x = num.toString();
    document.getElementById("Rating4").innerHTML = x;
    localStorage.setItem("Rating4", x);

}

function dec4Star() {
    var x = document.getElementById("Rating4").innerHTML;
    var num = parseInt(x);
    num--;
    x = num.toString();
    document.getElementById("Rating4").innerHTML = x;
    localStorage.setItem("Rating4", x);

}

function inc5Star() {
    var x = document.getElementById("Rating5").innerHTML;
    var num = parseInt(x);
    num++;
    x = num.toString();
    document.getElementById("Rating5").innerHTML = x;
    localStorage.setItem("Rating5", x);

}

function dec5Star() {
    var x = document.getElementById("Rating5").innerHTML;
    var num = parseInt(x);
    num--;
    x = num.toString();
    document.getElementById("Rating5").innerHTML = x;
    localStorage.setItem("Rating5", x);

}

function reset() {
    document.getElementById("Rating1").innerHTML = 0
    document.getElementById("Rating2").innerHTML = 0
    document.getElementById("Rating3").innerHTML = 0
    document.getElementById("Rating4").innerHTML = 0
    document.getElementById("Rating5").innerHTML = 0

    localStorage.setItem("Rating1", 0);
    localStorage.setItem("Rating2", 0);
    localStorage.setItem("Rating3", 0);
    localStorage.setItem("Rating4", 0);
    localStorage.setItem("Rating5", 0);


}





// Reading all info from local storage on page load
document.getElementById("title").innerHTML = localStorage.getItem("title");
document.getElementById("date").innerHTML = localStorage.getItem("dateInput");
document.getElementById("account").innerHTML = localStorage.getItem("accountInput") || 0;
document.getElementById("FO").innerHTML = parseInt(localStorage.getItem("FO")) || 0;
document.getElementById("Organic").innerHTML = parseInt(localStorage.getItem("Organic")) || 0;
document.getElementById("Delivered").innerHTML = parseInt(localStorage.getItem("Delivered")) || 0;
document.getElementById("Reviews").innerHTML = parseInt(localStorage.getItem("Reviews")) || 0;
document.getElementById("Cancelled").innerHTML = parseInt(localStorage.getItem("Cancelled")) || 0;
document.getElementById("Dispute").innerHTML = parseInt(localStorage.getItem("Dispute")) || 0;
document.getElementById("Resolved").innerHTML = parseInt(localStorage.getItem("Resolved")) || 0;
document.getElementById("Rating1").innerHTML = parseInt(localStorage.getItem("Rating1")) || 0;
document.getElementById("Rating2").innerHTML = parseInt(localStorage.getItem("Rating2")) || 0;
document.getElementById("Rating3").innerHTML = parseInt(localStorage.getItem("Rating3")) || 0;
document.getElementById("Rating4").innerHTML = parseInt(localStorage.getItem("Rating4")) || 0;
document.getElementById("Rating5").innerHTML = parseInt(localStorage.getItem("Rating5")) || 0;







