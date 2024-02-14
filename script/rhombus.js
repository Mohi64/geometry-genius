

function rhombusAreaInput(){
    const rhombusArea=document.getElementById('rhombus-d1');
    const rhombusAreaText=rhombusArea.value ;
    const d1 = parseFloat(rhombusAreaText)
    console.log('d1:', d1)

    const rhombusAreaD2= document.getElementById('rhombus-d2');
    const rhombusD2Text=rhombusAreaD2.value ;
    const d2= parseFloat(rhombusD2Text) 
    console.log('d2:', d2 );

    const area = 0.5 * d1 * d2 ;
    console.log('Area of the Rhombus is:', area)

    const rhombusAreaValue= document.getElementById('rhombus-area');
    rhombusAreaValue.innerText= area ;

}