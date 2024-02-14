

function calcualteTriangleArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleText= triangleBaseInput.value ; 
    const base = parseFloat(triangleText);
    

    const triangleHeightInput= document.getElementById('triangle-height') ;
    const triangleHeightText= triangleHeightInput.value ;
    const height= parseFloat(triangleHeightText);
    
     const area = 0.5 * base * height ;
      
     console.log('area of the triangle is:', area)

     const triangleArea=document.getElementById('trianle-area') ;
     triangleArea.innerText= area;

}