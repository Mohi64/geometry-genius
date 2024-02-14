

// function ParallelogramAreaInput(){
//     const ParallelogramBase=document.getElementById('Parallelogram-base') ;
//     const ParallelogramBaseText = ParallelogramBase.value ;
//     const base= parseFloat( ParallelogramBaseText)
//     console.log(base)

//     const parallelogramHeight= document.getElementById('Parallelogram-heigth');
//     const parallelogramHeightText = parallelogramHeight.value ;
//     const height = parseFloat(parallelogramHeightText);
//     console.log(height)
// }

function ParallelogramAreaInput(){
    const parallelogramBase=document.getElementById('Parallelogram-base');
    
    const parallelogramBaseText= parallelogramBase.value ;
    const base= parseFloat(parallelogramBaseText);
    // console.log(base) 

    const parallelogramHeight= document.getElementById ('Parallelogram-heigth');
    // console.log(parallelogramHeight)
    const parallelogramHeightText= parallelogramHeight.value ;
    const height= parseFloat(parallelogramHeightText);
    // console.log(height);

    const area = base * height ;
     
    console.log('Area of the perallelogram is:', area) ;

    const areaReserve= document.getElementById('area-calculation') ;
    areaReserve.innerText= area ;
    



}
    