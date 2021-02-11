 // input range

 AOS.init();

 var input = document.querySelector("input[type=range]");
input.style.setProperty("--value", input.value);
input.addEventListener("input", function(evt) {
   input.style.setProperty("--value", input.value);
  },false);

    $(document).ready(function () {
      //init DateTimePickers
      materialKit.initFormExtendedDatetimepickers();

      // Sliders Init
      materialKit.initSliders();
    });

 function scrollToDownload() {
   if ($('.section-download').length != 0) {
     $("html, body").animate({
       scrollTop: $('.section-download').offset().top
     }, 1000);
   }
 }

 var acc = document.getElementsByClassName("accordion");
 var i;

 for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function () {
     this.classList.toggle("active");
     var panel = this.nextElementSibling;
     if (panel.style.maxHeight) {
       panel.style.maxHeight = null;
     } else {
       panel.style.maxHeight = panel.scrollHeight + "px";
     }
   });
 }



 function calcular() {

   let deuda = parseFloat(document.querySelector("input[name=importe]").value);
   let anos = parseInt(document.querySelector("input[name=anos]").value);
   let interes = (179.6 / 100) / 12;
   const resultado = document.getElementById("resultado");

   const m = (deuda * interes * (Math.pow((1 + interes), (anos * 1)))) / ((Math.pow((1 + interes), (anos * 1))) - 1);

   resultado.innerHTML = " $" + m.toLocaleString("es-ES", {
     minimumFractionDigits: 2,
     maximumFractionDigits: 2
   }) + "</div>";
 }

 var slider = document.getElementById("myRange");
 var output = document.getElementById("demo");
 output.innerHTML = slider.value;

 slider.oninput = function () {
   output.innerHTML = this.value;
 }

 var slider2 = document.getElementById("myRange2");
 var output2 = document.getElementById("demo2");
 output2.innerHTML = slider2.value;

 slider2.oninput = function () {
   output2.innerHTML = this.value;
 }