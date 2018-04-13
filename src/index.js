import * as Rxjs from 'rxjs'
import {interval} from 'rxjs/observable/interval'


const bazaItemi = Rxjs.Observable.fromPromise(
    fetch('http://localhost:3000/Stovariste_itemi')
        .then(odgovor => odgovor.json())
)
var div=document.createElement("div")
document.body.appendChild(div)
var div1=document.createElement("div")
div1.style.height=30+"%";
div1.style.width=100+"%";
div1.innerHtml="Stovariste"
div1.align="center"
div.appendChild(div1);
var div2=document.createElement("div");
div2.style.height=70+"%";
div2.style.width=100+"%";
div.appendChild(div2);
var div21=document.createElement("div");
div21.style.height=100+"%";
div21.style.width=50+"%";
div2.appendChild(div21);
var div22=document.createElement("div");
div22.style.height=100+"%";
div22.style.width=50+"%";
div2.appendChild(div22);

var div211=document.createElement("div")
div21.appendChild(div211)
var div212=document.createElement("div")
div21.appendChild(div212)
var div213=document.createElement("div")
div21.appendChild(div213)
var div214=document.createElement("div")
div21.appendChild(div214)
var div215=document.createElement("div")
div21.appendChild(div215)
const select1=document.createElement("select")
select1.id="selekt1"


bazaItemi.subscribe(itemi=> {
itemi.forEach(el => {
    var op=document.createElement("option")
    op.text=el.ime
    op.value=el.id
    select1.add(op)
});
})
const select2=document.createElement("select")
select2.id="selekt2"



bazaItemi.subscribe(itemi=> {
itemi.forEach(el => {
    var op=document.createElement("option")
    op.text=el.ime
    op.value=el.id
    select2.add(op)
});
});
const select3=document.createElement("select")
select3.id="selekt3"


bazaItemi.subscribe(itemi=> {
itemi.forEach(el => {
    var op=document.createElement("option")
    op.text=el.ime
    op.value=el.id
    select3.add(op)
});
})
const select4=document.createElement("select")
select4.id="selekt4"


bazaItemi.subscribe(itemi=> {
itemi.forEach(el => {
    var op=document.createElement("option")
    op.text=el.ime
    op.value=el.id
    select4.add(op)
});
})
const select5=document.createElement("select")
select5.id="selekt1"



bazaItemi.subscribe(itemi=> {
itemi.forEach(el => {
    var op=document.createElement("option")
    op.text=el.ime
    op.value=el.id
    select5.add(op)
})
})
var ispis=document.createElement("div");
ispis.innerHTML="Unesite kolicine materijala(kg)"



div211.appendChild(ispis)
div211.appendChild(select1)
div212.appendChild(select2)
div213.appendChild(select3)
div214.appendChild(select4)
div215.appendChild(select5)

var unos1 = document.createElement("input")
div211.appendChild(unos1)
var potvrdi1 = document.createElement("button")
div211.appendChild(potvrdi1)
potvrdi1.innerHTML = 'Potvrdi'
potvrdi1.align="center"

var unos2 = document.createElement("input")
div212.appendChild(unos2)


var unos3 = document.createElement("input")
div213.appendChild(unos3)


var unos4 = document.createElement("input")
div214.appendChild(unos4)


var unos5 = document.createElement("input")
div215.appendChild(unos5)

Rxjs.Observable.fromEvent(potvrdi1, 'click')
    .map(event => ({a: select1.selectedIndex, b:select2.selectedIndex, c:select3.selectedIndex, d:select4.selectedIndex, e:select5.selectedIndex}))
    .subscribe(num => {
       // console.log(num)
        div22.innerHTML=racunica(num)+"000 dinara"
       
    })


function racunica(vred)
{
    var konacno=0;
    if(unos1.value!=null)
        konacno+=vred.a*unos1.value
    if(unos2.value!=null)
        konacno+=vred.b*unos2.value
    if(unos3.value!=null)
        konacno+=vred.c*unos3.value
    if(unos4.value!=null)
        konacno+=vred.d*unos4.value
    if(unos5.value!=null)
        konacno+=vred.e*unos5.value
    console.log(konacno)
    return konacno
}