

function pentagonAreaInput(){
    const pentagonArea= document.getElementById('pentagon-p');
    const pentagonAreaText= pentagonArea.value ;
    const p= parseFloat(pentagonAreaText);
    console.log(p)

    const pentagonAreaB=document.getElementById('pentagon-b');
    const pentagonTextB=pentagonAreaB.value ;
    const b = parseFloat(pentagonTextB);
    console.log(b)

    const area = 0.5 * p * b ;
    console.log('Area of the pentagon is:', area)

    const pentagonValue= document.getElementById('pentagon-area');
     pentagonValue.innerText= area ;
}