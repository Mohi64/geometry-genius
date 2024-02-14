

function rectangleAreaInput(){
    const rectangleLength=document.getElementById('rectangle-length') ;
    const rectangleText= rectangleLength.value ;
    const length= parseFloat(rectangleText);
    console.log( length) 

    const rectangleWidthInput= document.getElementById('rectangle-width') ;
    const rectangleWidthText=rectangleWidthInput.value ;
    const width= parseFloat( rectangleWidthText)
    console.log( width)
     
    const area = length * width ;

    console.log('Area of the rectangle is:', area) ; 

    const valueOfArea = document.getElementById('area-field') ;
       valueOfArea.innerText= area ;
    
}