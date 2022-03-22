function quanti1() {
    var c = document.getElementById("pan").value;
    var total = c * 10;
    document.getElementById("total1").innerHTML = "R$ " + total ;
}
function quanti2() {
    var f = document.getElementById("coel").value;
    var total = f * 9.9;
    document.getElementById("total2").innerHTML = "R$ " + total ;
}
function quanti3() {
    var h = document.getElementById("fre").value;
    var total = h * 4.9;
    document.getElementById("total3").innerHTML = "R$ " + total ;
}
function quanti4() {
    var s = document.getElementById("incr").value;
    var total = s * 7.93;
    document.getElementById("total4").innerHTML = "R$ " + total ;
}
function quanti5() {
    var na = document.getElementById("med").value;
    var total = na * 4;
    document.getElementById("total5").innerHTML = "R$ " + total ;
}
function quanti6() {
    var hb = document.getElementById("ter").value;
    var total = hb *9.9;
    document.getElementById("total6").innerHTML = "R$ " + total ;
}
function quanti7() {
    var sc = document.getElementById("papel").value;
    var total = sc * 3;
    document.getElementById("total7").innerHTML = "R$ " + total ;
}
function quanti8() {
    var nd = document.getElementById("pol").value;
    var total = nd * 3;
    document.getElementById("total8").innerHTML = "R$ " + total ;
}
function quanti9() {
    var ne = document.getElementById("palha").value;
    var total = ne * 5.49;
    document.getElementById("total9").innerHTML = "R$ " + total ;
}


function calculartotal() {
    var a = document.getElementById("pan").value||0;
    var b = document.getElementById("coel").value||0;
    var c = document.getElementById("fre").value||0;
    var d = document.getElementById("incr").value||0;
    var e = document.getElementById("med").value||0;
    var f = document.getElementById("ter").value||0;
    var g = document.getElementById("papel").value||0;
    var h = document.getElementById("pol").value||0;
    var i = document.getElementById("palha").value||0;

    total = (parseFloat(a) * 10) + (parseFloat(b) *9.9) + (parseFloat(c) * 5) + (parseFloat(d) * 4.9) + (parseFloat(e) * 7.93) + (parseFloat(f) * 4) + (parseFloat(g) * 9.9) + (parseFloat(h) * 3) + (parseFloat(i) * 5.49);
    document.getElementById("totalfinal").innerHTML = "R$ " + total + ",00";
}
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
        var forms = document.getElementsByClassName('needs-validation');
        // Faz um loop neles e evita o envio
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
       