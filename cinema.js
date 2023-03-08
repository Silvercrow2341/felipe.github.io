function memes(){
    let ticketsid=parseInt(document.getElementById("tickets").value)

    const Zona1=20
    const Zona2=40
    const Zona3=30
    var cupos=0
    if (ticketsid==1){
        while(cupos<Zona1){
            const sillas=Zona1-cupos
            const tik=prompt("cuantos tickets desea, hay "+sillas)
            const tikme=parseInt(tik)
            cupos+=tikme
            if(cupos>=Zona1){
                document.getElementById("muestra").innerHTML=`ya no hay, elija la zona 2 o 3`
            }
        }
    }
    else if(ticketsid==2){
        while(cupos<Zona2){
            const sillas2=Zona2-cupos
            const tiks=prompt("Cuantos tickets desea, hay "+sillas2)
            const tiks2=parseInt(tiks)
            cupos+=tiks2
            if(cupos>=Zona2){
                document.getElementById("muestra").innerHTML=`ya no hay, elijala zona 1 o 3`
            }
        }
    }
    else if(ticketsid==3){
        while(cupos<Zona3){
            const sillas3=Zona3-cupos
            const tisk=prompt("Cuantos tickets desea, hay "+sillas3)
            const tisk1=parseInt(tisk)
            cupos+=tisk1
            if(cupos>=Zona3){
                document.getElementById("muestra").innerHTML=`ya no hay, elija la zona 1 o 2`
            }
        }
    }
}