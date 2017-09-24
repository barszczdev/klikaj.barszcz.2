    function klikbae() {
	var snd = new Audio("zasoby/barszcz.mp3");
	snd.play();
	snd.currentTime=0; 
        barszcz = barszcz + mockliku;
        document.getElementById('barszcze').value = barszcz;
    }
		 function kupmilitia() {
	 if (barszcz >= 10) { 
	var snd = new Audio("zasoby/militia.mp3");
	snd.play();
	snd.currentTime=0; 
        barszcz = barszcz - 10;
		wojsko = wojsko + 1;
		document.getElementById('wojskoo').value = wojsko;
		};
    }
		 function kupmilitia2() {
	 if (barszcz >= 100) { 
	var snd = new Audio("zasoby/boar.mp3");
	snd.play();
	snd.currentTime=0; 
        barszcz = barszcz - 100;
		wojsko = wojsko + 10;
		document.getElementById('wojskoo').value = wojsko;
		};
    }
		 function kupmilitia3() {
	 if (barszcz >= 1000) { 
	var snd = new Audio("zasoby/studenci.mp3");
	snd.play();
	snd.currentTime=0; 
        barszcz = barszcz - 1000;
		wojsko = wojsko + 100;
		document.getElementById('wojskoo').value = wojsko;
		};
    }
		 function kupmilitia4() {
	 if (barszcz >= 10000) { 
	var snd = new Audio("zasoby/ochroniarz.mp3");
	snd.play();
	snd.currentTime=0; 
        barszcz = barszcz - 10000;
		wojsko = wojsko + 1000;
		document.getElementById('wojskoo').value = wojsko;
		};
    }
		 function kupmilitia5() {
	 if (barszcz >= 100000) { 
	var snd = new Audio("zasoby/catapult.mp3");
	snd.play();
	snd.currentTime=0; 
        barszcz = barszcz - 100000;
		wojsko = wojsko + 10000;
		document.getElementById('wojskoo').value = wojsko;
		};
    }
		 function kupmilitia6() {
	 if (barszcz >= 1000000) { 
	var snd = new Audio("zasoby/catapult.mp3");
	snd.play();
	snd.currentTime=0; 
        barszcz = barszcz - 1000000;
		wojsko = wojsko + 100000;
		document.getElementById('wojskoo').value = wojsko;
		};
    }
		 function kupmilitia7() {
	 if (barszcz >= 10000000) { 
	var snd = new Audio("zasoby/trebuchet.mp3");
	snd.play();
	snd.currentTime=0; 
        barszcz = barszcz - 10000000;
		wojsko = wojsko + 1000000;
		document.getElementById('wojskoo').value = wojsko;
		};
    }
		 function kupmilitia8() {
	 if (barszcz >= 100000000) { 
	var snd = new Audio("zasoby/rekrut.mp3");
	snd.play();
	snd.currentTime=0; 
        barszcz = barszcz - 100000000;
		wojsko = wojsko + 10000000;
		document.getElementById('wojskoo').value = wojsko;
		};
    }
		 function kupmilitia9() {
	 if (barszcz >= 1000000000) { 
	var snd = new Audio("zasoby/hussar.mp3");
	snd.play();
	snd.currentTime=0; 
        barszcz = barszcz - 1000000000;
		wojsko = wojsko + 100000000;
		document.getElementById('wojskoo').value = wojsko;
		};
    }
	
	var wyd1 = false;
var wyd2 = false;
var wyd3 = false;
var wyd4 = false;
var wyd5 = false;
var wyd6 = false;
var wyd7 = false;
var wyd8 = false;
window.setInterval(function(){
        zdarzenia1()
		zdarzenia2()
		zdarzenia3()
		zdarzenia4()
		zdarzenia5()
		zdarzenia6()
		zdarzenia7()
		zdarzenia8()
}, 1000);
function zdarzenia1() {
     if (wyd1 != true && barszcz >= 1){
	     window.alert("Nor:Gdzie ja jestem? Halo! Dlaczego jestem w jakimś średniowiecznym sklepie?");
		 window.alert("Ktoś: Witaj mój czeladniku! Od teraz oddaję ci na własność mój sklep. Teraz możesz stąd inwestować w różne budynki. Niestety nie dam ci nic na początek, abyś zrozumiał że pieniądz nie przychodzi łatwo.");
         window.alert("Musisz najpierw popracować aby zarobić jakiś pieniądz. Dopiero później możesz rozszerzyć swoje 'strefy wpływów' wysyłając armię dyplomatów na swoich oponentów. Wtedy możesz dopiero zabrać się za inwestowanie. Powodzenia!");
		 window.alert("Jeszcze jedna rzecz o której zapomniałem. Pamiętaj żeby dobrze się wyspać!");
		 wyd1 = true;
	 }
	 else {
	 }
};
function zdarzenia2() {
     if (wyd2 != true && barszcz >= 1000){
	     window.alert("Otrzymujesz subsydia dla młodych, początkujących sprzedawców w wysokości 500 barszczów.");
         barszcz = barszcz + 500;
         wyd2 = true;
var snd = new Audio("zasoby/suchar.mp3");
snd.play();
snd.currentTime=0;	
	 }
	 else {
	 }
};
function zdarzenia3() {
     if (wyd3 != true && barszcz >= 10000){
	     window.alert("Ktoś cię okradł w nocy. Tracisz 5000 barszczów. ");
		 barszcz = barszcz - 5000;
		 wyd3 = true;
		 var snd = new Audio("zasoby/pod.mp3");
	snd.play();
	snd.currentTime=0;	
	 }
}
function zdarzenia4() {
     if (wyd4 != true && barszcz >= 100000){
	     window.alert("Remont biura. Płacisz 20000 za każde biuro które posiadasz.");
		 barszcz = barszcz - 20000;
		 wyd4 = true;
	var snd = new Audio("zasoby/prawa.mp3");
	snd.play();
	snd.currentTime=0;	
	 }
}
function zdarzenia5() {
     if (wyd5 != true && barszcz >= 1000000){
	     window.alert("Nie chlej tyle cydru!");
		 wyd5 = true;
		 		 	var snd = new Audio("zasoby/cydr.mp3");
	snd.play();
	snd.currentTime=0;		
	 }
}
function zdarzenia6() {
     if (wyd6 != true && barszcz >= 10000000){
	     window.alert("Kazimierz III podziwia twoje wyczyny i udzielił ci małej pożyczki w wysokości miliona barszczów.");
		 barszcz = barszcz + 1000000;
		 wyd6 = true;
		 	var snd = new Audio("zasoby/poz.mp3");
	snd.play();
	snd.currentTime=0;		
	 }
}
function zdarzenia7() {
     if (wyd7 != true && barszcz >= 100000000){
	     window.alert("Obrońcy praw trebuszy z nieznanego powodu wygrali nieznaną ci sprawę w sądzie, która zakończyła się zmuszeniem cię do grzywny o wysokości całego twojego majątku na rzecz trebuszy.");
		 barszcz = barszcz - 100000000;
		 wyd7 = true;
		 	var snd = new Audio("zasoby/obroncy.mp3");
	snd.play();
	snd.currentTime=0;		
	 }
}
function zdarzenia8() {
     if (wyd8 != true && barszcz >= 1000000000){
	     window.alert("Jakiś ptak ukradł ci bardzo cenny klejnot. Teraz masz tylko jeden.");
		 barszcz = barszcz - 500000000;
		 wyd8 = true;
		 	var snd = new Audio("zasoby/ptak.mp3");
	snd.play();
	snd.currentTime=0;		
	 }
}



    var barszcz = 0;
	var wojsko = 0;
    var mockliku = 1;
	var kosztkliku = 50;
	var kosztklikuu = 50;
	var plusklik = 50;
	var maxunrest = 2500;
	var unrest = 0;
	function plusklik1() {
	if(barszcz >= kosztkliku){ 
	var snd = new Audio("zasoby/barszcz.mp3");
	snd.play();
	snd.currentTime=0;
        barszcz = barszcz - kosztkliku;
        mockliku = mockliku * 2;                                      
        kosztkliku = kosztkliku	* 2;
        document.getElementById('plusklik').innerHTML = kosztkliku;  
        document.getElementById('barszcze').innerHTML = barszcz;  
		document.getElementById('mockliku').innerHTML = mockliku;  
		};
    }
window.setInterval(function(){
 doddom()
 dodlaka()
 dodlasa()
 dodpodstawa()
 dodtechnika()
 doduni()
 dodcharon()
 dodshrek()
 dodszatan()
 dodpepe()
 dodwizardpepe()
 dodkon()
 dodwoza()
 dodtransportkoni()
 dodadept()
 dodabsolwenta()
 dodprofesor()
 unrestcheck()
}, 1000);
    function doddom() {
	if (dom != 0) {
		dodatekzdomu = dom;
        barszcz = barszcz + dodatekzdomu;
        document.getElementById('barszcze').value = barszcz;
		};
    };
	    function dodlaka() {
	if (laka != 0) {
		dodatekzlaki = laka * 5;
        barszcz = barszcz + dodatekzlaki;
        document.getElementById('barszcze').value = barszcz;
		};
    };
		    function dodlasa() {
	if (las != 0) {
		dodatekzlasi = las * 30;
        barszcz = barszcz + dodatekzlasi;
        document.getElementById('barszcze').value = barszcz;
		};
    };
	    function dodpodstawa() {
	if (podstawa != 0) {
		dodatekzpodstawa = podstawa * 100;
        barszcz = barszcz + dodatekzpodstawa;
        document.getElementById('barszcze').value = barszcz;
		};
    };
	    function dodtechnika() {
	if (technika != 0) {
		dodatekztechnika = technika * 500;
        barszcz = barszcz + dodatekztechnika;
        document.getElementById('barszcze').value = barszcz;
		};
    };
		    function doduni() {
	if (uni != 0) {
		dodatekzuni = uni * 3000;
        barszcz = barszcz + dodatekzuni;
        document.getElementById('barszcze').value = barszcz;
		};
    };
		    function dodcharon() {
	if (charon != 0) {
		dodatekzcharon = charon * 20000;
        barszcz = barszcz + dodatekzcharon;
        document.getElementById('barszcze').value = barszcz;
		};
    };
	    function dodshrek() {
	if (shreka != 0) {
		dodatekzshreka = shreka * 400000;
        barszcz = barszcz + dodatekzshreka;
        document.getElementById('barszcze').value = barszcz;
		};
    };
			    function dodszatan() {
	if (szatan != 0) {
		dodatekzszatana = szatan * 2500000;
        barszcz = barszcz + dodatekzszatana;
        document.getElementById('barszcze').value = barszcz;
		};
    };
	
		    function dodpepe() {
	if (pepe != 0) {
		dodatekzpepe = pepe * 5000000;
        barszcz = barszcz + dodatekzpepe;
        document.getElementById('barszcze').value = barszcz;
		};
    };
	    function dodwizardpepe() {
	if (wizardpepe != 0) {
		dodatekzwpepe = wizardpepe * 7500000;
        barszcz = barszcz + dodatekzwpepe;
        document.getElementById('barszcze').value = barszcz;
		};
    };
	
		    function dodkon() {
	if (kon != 0) {
		dodatekzkonia = kon * 15000000;
        barszcz = barszcz + dodatekzkonia;
        document.getElementById('barszcze').value = barszcz;
		};
    };
	    function dodwoza() {
	if (woza != 0) {
		dodatekzwoza = woza * 75000000;
        barszcz = barszcz + dodatekzwoza;
        document.getElementById('barszcze').value = barszcz;
		};
    };
		    function dodtransportkoni() {
	if (transportkoni != 0) {
		dodatekztransportu = transportkoni * 600000000;
        barszcz = barszcz + dodatekztransportu;
        document.getElementById('barszcze').value = barszcz;
		};
    };
	function dodadept() {
	if (adept != 0) {
		dodatekzadepta = adept * 1500000000;
        barszcz = barszcz + dodatekzadepta;
        document.getElementById('barszcze').value = barszcz;
		};
    };
	    function dodabsolwenta() {
	if (absolwenta != 0) {
		dodatekzabsolwenta = absolwenta * 7500000000;
        barszcz = barszcz + dodatekzabsolwenta;
        document.getElementById('barszcze').value = barszcz;
		};
    };
		    function dodprofesor() {
	if (profesor != 0) {
		dodatekzprofesor = profesor * 999999999999999999;
        barszcz = barszcz + dodatekzprofesor;
        document.getElementById('barszcze').value = barszcz;
		};
    };
		    function unrestcheck(){
	if (unrest > maxunrest) {
		window.alert("Niewyspanie to unrest. xaxaxaxa 'Twoi' obywatele są bardzo źli. Aż tak, że wszystkie budynki strajkują! ");
        barszcz = barszcz - barszcz;
        document.getElementById('barszcze').value = barszcz;
		document.getElementById('unresty').value = unrest;
		document.getElementById('maxunresty').value = maxunrest;
		};
    };
	
 function pokazostralakefunkcja() {
   if (wojsko > 9){
   wojsko = wojsko - 10;
   document.getElementById('wojskoo').value = wojsko;
   document.getElementById('pokazostralake').style.display = "block";
   document.getElementById('ukryjostralake').style.display = "none";
   }
   else
   {
   window.alert("Nie masz tyle siły!");
   }
};
var dom = 0;
var kosztdoma = 100;
var kosztdomaa = 100;
		function kupdoma(){
    if(barszcz >= kosztdoma){ 
	var snd = new Audio("zasoby/dom.mp3");
	snd.play();
	snd.currentTime=0;		
        dom = dom + 1;         
        unrest = unrest + 1;		
    	barszcz = barszcz - kosztdoma;    
        kosztdoma = kosztdoma	+ 10;
        document.getElementById('domy').innerHTML = dom;  
        document.getElementById('barszcze').innerHTML = barszcz;  
		document.getElementById('kosztdomaa').innerHTML = kosztdoma;  
		document.getElementById('unresty').value = unrest;
    };
};
var laka = 0;
var kosztlaki = 500;
var kosztlakii = 500;
		function kuplake(){
    if(barszcz >= kosztlaki){ 
	var snd = new Audio("zasoby/laka.mp3");
	snd.play();
	snd.currentTime=0;		
        laka = laka + 1;                                   
    	barszcz = barszcz - kosztlaki;  
        unrest = unrest + 20;			
        kosztlaki = kosztlaki + 50;
        document.getElementById('laki').innerHTML = laka;  
        document.getElementById('barszcze').innerHTML = barszcz;  
		document.getElementById('kosztlakii').innerHTML = kosztlaki;  
		document.getElementById('unresty').value = unrest;
    };
};
var las = 0;
var kosztlasi = 3000;
var kosztlasii = 3000;
		function kuplase(){
    if(barszcz >= kosztlasi){ 
	var snd = new Audio("zasoby/las.mp3");
	snd.play();
	snd.currentTime=0;		
        las = las + 1;                                   
    	barszcz = barszcz - kosztlasi;  
        unrest = unrest + 30;			
        kosztlasi= kosztlasi + 100;
        document.getElementById('lasi').innerHTML = las;  
        document.getElementById('barszcze').innerHTML = barszcz;  
		document.getElementById('kosztlasii').innerHTML = kosztlasi;  
		document.getElementById('unresty').value = unrest;
    };
};
	var kosztunrest2 = 250;
	var kosztunrest2i= 250;
		 function kupmaxunrest2() {
	 if (barszcz >= kosztunrest2) { 
	var snd = new Audio("zasoby/sarna.mp3");
	snd.play();
	snd.currentTime=0; 
        barszcz = barszcz - kosztunrest2;
		unrest = unrest - 10;
		kosztunrest2 = kosztunrest2 + 250; 
		document.getElementById('barszcze').value = barszcz;
		document.getElementById('unrest').value = unrest;
		document.getElementById('unresty').value = unrest;
		document.getElementById('kosztunrest2').innerHTML = kosztunrest2; 
		document.getElementById('kosztunrest2i').innerHTML = kosztunrest2; 
		};
    }
	function pokazczarnystokfunkcja() {
   if (wojsko > 999){
   wojsko = wojsko - 1000;
   document.getElementById('wojskoo').value = wojsko;
   document.getElementById('pokazczarnystok').style.display = "block";
   document.getElementById('ukryjczarnystok').style.display = "none";
   }
   else
   {
   window.alert("Nie masz tyle siły!");
   }
};
var podstawa = 0;
var kosztpodstawaa = 7500;
var kosztpodstawaaa = 7500;
		function kuppodstawaa(){
    if(barszcz >= kosztpodstawaa){ 
	var snd = new Audio("zasoby/studenci.mp3");
	snd.play();
	snd.currentTime=0;		
        podstawa = podstawa + 1;         
        unrest = unrest + 40;		
    	barszcz = barszcz - kosztpodstawaa;    
        kosztpodstawaa = kosztpodstawaa	+ 2500;
        document.getElementById('podstaway').innerHTML = podstawa;  
        document.getElementById('barszcze').innerHTML = barszcz;  
		document.getElementById('kosztpodstawaaa').innerHTML = kosztpodstawaa;  
		document.getElementById('unresty').value = unrest;
    };
};
var technika = 0;
var koszttechniki = 30000;
var koszttechnikii = 30000;
		function kuptechnike(){
    if(barszcz >= koszttechniki){ 
	var snd = new Audio("zasoby/studenci.mp3");
	snd.play();
	snd.currentTime=0;		
        technika = technika + 1;                                   
    	barszcz = barszcz - koszttechniki;  
        unrest = unrest + 50;			
        koszttechniki = koszttechniki + 10000;
        document.getElementById('techniki').innerHTML = technika;  
        document.getElementById('barszcze').innerHTML = barszcz;  
		document.getElementById('koszttechnikii').innerHTML = koszttechniki;  
		document.getElementById('unresty').value = unrest;
    };
};
var uni = 0;
var kosztunii = 150000;
var kosztuniii = 150000;
		function kupunie(){
    if(barszcz >= kosztunii){ 
	var snd = new Audio("zasoby/studenci.mp3");
	snd.play();
	snd.currentTime=0;		
        uni = uni + 1;                                   
    	barszcz = barszcz - kosztunii;  
        unrest = unrest + 60;			
        kosztunii= kosztunii + 50000;
        document.getElementById('unii').innerHTML = uni;  
        document.getElementById('barszcze').innerHTML = barszcz;  
		document.getElementById('kosztuniii').innerHTML = kosztunii;  
		document.getElementById('unresty').value = unrest;
    };
};
	var kosztunrest3 = 2500;
	var kosztunrest3i= 2500;
		 function kupmaxunrest3() {
	 if (barszcz >= kosztunrest3) { 
	var snd = new Audio("zasoby/studenci.mp3");
	snd.play();
	snd.currentTime=0; 
        barszcz = barszcz - kosztunrest3;
		unrest = unrest - 10;
		kosztunrest2 = kosztunrest2 + 2500; 
		document.getElementById('barszcze').value = barszcz;
		document.getElementById('unrest').value = unrest;
		document.getElementById('unresty').value = unrest;
		document.getElementById('kosztunrest3').innerHTML = kosztunrest3; 
		document.getElementById('kosztunrest3i').innerHTML = kosztunrest3; 
		};
    }
	function pokazpieklofunkcja() {
   if (wojsko > 9999){
   wojsko = wojsko - 10000;
   document.getElementById('wojskoo').value = wojsko;
   document.getElementById('pokazpieklo').style.display = "block";
   document.getElementById('ukryjpieklo').style.display = "none";
   }
   else
   {
   window.alert("Nie masz tyle siły!");
   }
};
var charon = 0;
var kosztcharona = 1000000;
var kosztcharonaa = 1000000;
		function kupcharona(){
    if(barszcz >= kosztcharona){ 
	var snd = new Audio("zasoby/charon.mp3");
	snd.play();
	snd.currentTime=0;		
        charon = charon + 1;         
        unrest = unrest + 70;		
    	barszcz = barszcz - kosztcharona;    
        kosztcharona = kosztcharona	+ 500000;
        document.getElementById('charony').innerHTML = charon;  
        document.getElementById('barszcze').innerHTML = barszcz;  
		document.getElementById('kosztcharonaa').innerHTML = kosztcharona;  
		document.getElementById('unresty').value = unrest;
    };
};
var shreka = 0;
var kosztshreki = 15000000;
var kosztshrekii = 15000000;
		function kupshreke(){
    if(barszcz >= kosztshreki){ 
	var snd = new Audio("zasoby/shrek.mp3");
	snd.play();
	snd.currentTime=0;		
        shreka = shreka + 1;                                   
    	barszcz = barszcz - kosztshreki;  
        unrest = unrest + 80;			
        kosztshreki = kosztshreki + 2500000;
        document.getElementById('shreki').innerHTML = shreka;  
        document.getElementById('barszcze').innerHTML = barszcz;  
		document.getElementById('kosztshrekii').innerHTML = kosztshreki;  
		document.getElementById('unresty').value = unrest;
    };
};
var szatan = 0;
var kosztszatani = 75000000;
var kosztszatanii = 75000000;
		function kupszatane(){
    if(barszcz >= kosztszatani){ 
	var snd = new Audio("zasoby/ochroniarz.mp3");
	snd.play();
	snd.currentTime=0;		
        szatan = szatan + 1;                                   
    	barszcz = barszcz - kosztszatani;  
        unrest = unrest + 100;			
        kosztszatani= kosztszatani + 15000000;
        document.getElementById('szatani').innerHTML = szatan;  
        document.getElementById('barszcze').innerHTML = barszcz;  
		document.getElementById('kosztszatanii').innerHTML = kosztszatani;  
		document.getElementById('unresty').value = unrest;
    };
};
	var kosztunrest6 = 25000;
	var kosztunrest6i= 25000;
		 function kupmaxunrest6() {
	 if (barszcz >= kosztunrest6) { 
	var snd = new Audio("zasoby/babcia.mp3");
	snd.play();
	snd.currentTime=0; 
        barszcz = barszcz - kosztunrest3;
		unrest = unrest - 10;
		kosztunrest6 = kosztunrest6 + 25000; 
		document.getElementById('barszcze').value = barszcz;
		document.getElementById('unrest').value = unrest;
		document.getElementById('unresty').value = unrest;
		document.getElementById('kosztunrest6').innerHTML = kosztunrest6; 
		document.getElementById('kosztunrest6i').innerHTML = kosztunrest6; 
		};
    }
	function pokazpepelandiafunkcja() {
   if (wojsko > 99999){
   wojsko = wojsko - 100000;
   document.getElementById('wojskoo').value = wojsko;
   document.getElementById('pokazpepelandia').style.display = "block";
   document.getElementById('ukryjpepelandia').style.display = "none";
   }
   else
   {
   window.alert("Nie masz tyle siły!");
   }
};
var pepe = 0;
var kosztpepea = 10000000;
var kosztpepeaa = 10000000;
		function kuppepea(){
    if(barszcz >= kosztpepea){ 
	var snd = new Audio("zasoby/pepe.mp3");
	snd.play();
	snd.currentTime=0;		
        pepe = pepe + 1;         
        unrest = unrest + 110;		
    	barszcz = barszcz - kosztpepea;    
        kosztpepea = kosztpepea	+ 500000;
        document.getElementById('pepey').innerHTML = pepe;  
        document.getElementById('barszcze').innerHTML = barszcz;  
		document.getElementById('kosztpepeaa').innerHTML = kosztpepea;  
		document.getElementById('unresty').value = unrest;
    };
};
var wizardpepe = 0;
var kosztwizardpepei = 750000000;
var kosztwizardpepeii = 750000000;
		function kupwizardpepee(){
    if(barszcz >= kosztwizardpepei){ 
	var snd = new Audio("zasoby/pepe.mp3");
	snd.play();
	snd.currentTime=0;		
        wizardpepe = wizardpepe + 1;                                   
    	barszcz = barszcz - kosztwizardpepei;  
        unrest = unrest + 120;			
        kosztwizardpepei= kosztwizardpepei + 15000000;
        document.getElementById('wizardpepei').innerHTML = wizardpepe;  
        document.getElementById('barszcze').innerHTML = barszcz;  
		document.getElementById('kosztwizardpepeii').innerHTML = kosztwizardpepei;  
		document.getElementById('unresty').value = unrest;
    };
};
	var kosztunrest4 = 100000;
	var kosztunrest4i= 100000;
		 function kupmaxunrest4() {
	 if (barszcz >= kosztunrest4) { 
	var snd = new Audio("zasoby/pepe.mp4");
	snd.play();
	snd.currentTime=0; 
        barszcz = barszcz - kosztunrest4;
		unrest = unrest - 10;
		kosztunrest4 = kosztunrest4 + 100000; 
		document.getElementById('barszcze').value = barszcz;
		document.getElementById('unrest').value = unrest;
		document.getElementById('unresty').value = unrest;
		document.getElementById('kosztunrest4').innerHTML = kosztunrest4; 
		document.getElementById('kosztunrest4i').innerHTML = kosztunrest4; 
		};
    }
	function pokazpieklo2funkcja() {
   if (wojsko > 999999){
   wojsko = wojsko - 1000000;
   document.getElementById('wojskoo').value = wojsko;
   document.getElementById('pokazpieklo2').style.display = "block";
   document.getElementById('ukryjpieklo2').style.display = "none";
   }
   else
   {
   window.alert("Nie masz tyle siły!");
   }
};
var kon = 0;
var kosztkona = 300000000;
var kosztkonaa = 300000000;
		function kupkona(){
    if(barszcz >= kosztkona){ 
	var snd = new Audio("zasoby/kon.mp3");
	snd.play();
	snd.currentTime=0;		
        kon = kon + 1;         
        unrest = unrest + 130;		
    	barszcz = barszcz - kosztkona;    
        kosztkona = kosztkona	+ 50000000;
        document.getElementById('kony').innerHTML = kon;  
        document.getElementById('barszcze').innerHTML = barszcz;  
		document.getElementById('kosztkonaa').innerHTML = kosztkona;  
		document.getElementById('unresty').value = unrest;
    };
};
var woza = 0;
var kosztwozi = 1000000000;
var kosztwozii = 1000000000;
		function kupwoze(){
    if(barszcz >= kosztwozi){ 
	var snd = new Audio("zasoby/woz.mp3");
	snd.play();
	snd.currentTime=0;		
        woza = woza + 1;                                   
    	barszcz = barszcz - kosztwozi;  
        unrest = unrest + 140;			
        kosztwozi = kosztwozi + 250000000;
        document.getElementById('wozi').innerHTML = woza;  
        document.getElementById('barszcze').innerHTML = barszcz;  
		document.getElementById('kosztwozii').innerHTML = kosztwozi;  
		document.getElementById('unresty').value = unrest;
    };
};
var transportkoni = 0;    
var koszttransportkonii = 5000000000;
var koszttransportkoniii = 5000000000;
		function kuptransportkonie(){
    if(barszcz >= koszttransportkonii){ 
	var snd = new Audio("zasoby/woz.mp3");
	snd.play();
	snd.currentTime=0;		
        transportkoni = transportkoni + 1;                                   
    	barszcz = barszcz - koszttransportkonii;  
        unrest = unrest + 150;			
        koszttransportkonii= koszttransportkonii + 500000000;
        document.getElementById('transportkonii').innerHTML = transportkoni;  
        document.getElementById('barszcze').innerHTML = barszcz;  
		document.getElementById('koszttransportkoniii').innerHTML = koszttransportkonii;  
		document.getElementById('unresty').value = unrest;
    };
};
	var kosztunrest5 = 2500000;
	var kosztunrest5i= 2500000;
		 function kupmaxunrest5() {
	 if (barszcz >= kosztunrest5) { 
	var snd = new Audio("zasoby/kon.mp3");
	snd.play();
	snd.currentTime=0; 
        barszcz = barszcz - kosztunrest5;
		unrest = unrest - 10;
		kosztunrest5 = kosztunrest5 + 2500000; 
		document.getElementById('barszcze').value = barszcz;
		document.getElementById('unrest').value = unrest;
		document.getElementById('unresty').value = unrest;
		document.getElementById('kosztunrest5').innerHTML = kosztunrest5; 
		document.getElementById('kosztunrest5i').innerHTML = kosztunrest5; 
		};
    }
	function pokazpieklo3funkcja() {
   if (wojsko > 99999999){
   wojsko = wojsko - 100000000;
   document.getElementById('wojskoo').value = wojsko;
   document.getElementById('pokazpieklo3').style.display = "block";
   document.getElementById('ukryjpieklo3').style.display = "none";
   }
   else
   {
   window.alert("Nie masz tyle siły!");
   }
};
var adept = 0;   
var kosztadepta = 15000000000;
var kosztadeptaa = 15000000000;
		function kupadepta(){
    if(barszcz >= kosztadepta){ 
	var snd = new Audio("zasoby/adept.mp3");
	snd.play();
	snd.currentTime=0;		
        adept = adept + 1;         
        unrest = unrest + 160;		
    	barszcz = barszcz - kosztadepta;    
        kosztadepta = kosztadepta	+ 5000000000;
        document.getElementById('adepty').innerHTML = adept;  
        document.getElementById('barszcze').innerHTML = barszcz;  
		document.getElementById('kosztadeptaa').innerHTML = kosztadepta;  
		document.getElementById('unresty').value = unrest;
    };
};
var absolwenta = 0;
var kosztabsolwenti = 75000000000;
var kosztabsolwentii = 75000000000;
		function kupabsolwente(){
    if(barszcz >= kosztabsolwenti){ 
	var snd = new Audio("zasoby/absolwent.mp3");
	snd.play();
	snd.currentTime=0;		
        absolwenta = absolwenta + 1;                                   
    	barszcz = barszcz - kosztabsolwenti;  
        unrest = unrest + 170;			
        kosztabsolwenti = kosztabsolwenti + 250000000;
        document.getElementById('absolwenti').innerHTML = absolwenta;  
        document.getElementById('barszcze').innerHTML = barszcz;  
		document.getElementById('kosztabsolwentii').innerHTML = kosztabsolwenti;  
		document.getElementById('unresty').value = unrest;
    };
};
var profesor = 0;    
var kosztprofesori = 999999999999;
var kosztprofesorii = 999999999999;
		function kupprofesore(){
    if(barszcz >= kosztprofesori){ 
	var snd = new Audio("zasoby/woz.mp3");
	snd.play();
	snd.currentTime=0;		
        profesor = profesor + 1;                                   
    	barszcz = barszcz - kosztprofesori;  
        unrest = unrest + 200;			
        kosztprofesori= kosztprofesori + 500000000;
        document.getElementById('profesori').innerHTML = profesor;  
        document.getElementById('barszcze').innerHTML = barszcz;  
		document.getElementById('kosztprofesorii').innerHTML = kosztprofesori;  
		document.getElementById('unresty').value = unrest;
		window.alert("NoiR wrócił do swojego mieszkania w Czarnym Stoku. Brawo! Gratulacje! Wygrałeś Barszcz Kliker 2! Nie będę tym razem obiecywał barszcz klikera 3 tak od razu, bo trochę czasu mi zajęło znajdowanie zasobów. W każdym razie dzięki za grę!");
    };
};
	var kosztunrest9 = 25000000;
	var kosztunrest9i= 25000000;
		 function kupmaxunrest9() {
	 if (barszcz >= kosztunrest9) { 
	var snd = new Audio("zasoby/kon.mp3");
	snd.play();
	snd.currentTime=0; 
        barszcz = barszcz - kosztunrest9;
		unrest = unrest - 100000000000;
		kosztunrest9 = kosztunrest9 + 25000000; 
		document.getElementById('barszcze').value = barszcz;
		document.getElementById('unrest').value = unrest;
		document.getElementById('unresty').value = unrest;
		document.getElementById('kosztunrest9').innerHTML = kosztunrest9; 
		document.getElementById('kosztunrest9i').innerHTML = kosztunrest9; 
		};
    }
	
	function zapiszgre() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = barszcz;
			

        } else {
		    localStorage.clickcount = barszcz;
        }
        document.getElementById("result").innerHTML = "Zapisano.";
    } else {
        document.getElementById("result").innerHTML = "Twoja przeglądarka nie obsługuje takich zapisów.";
    }
}
function wczytajgre() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
		   var wczytywanie = parseInt(localStorage.clickcount)
		    barszcz = wczytywanie;
        } else {
            var wczytywanie = parseInt(localStorage.clickcount)
		    barszcz = wczytywanie;
        }
        document.getElementById("result2").innerHTML = "Wczytano.";
    } else {
        document.getElementById("result").innerHTML = "Twoja przeglądarka nie obsługuje takich zapisów.";
    }
}

window.setInterval(function(){
        document.getElementById("result").innerHTML = "Nie zapisano.";
	    document.getElementById("result2").innerHTML = "Nie wczytano.";
}, 5000);

window.setInterval(function(){
        localStorage.clickcount = barszcz + 1;
}, 30000);
