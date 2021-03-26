

let displayImage=document.querySelector(".gallery__image--display");
let allImages=Array.from(document.getElementsByClassName("gallery__image--others"));
let coverMain=Array.from(document.getElementsByClassName("cover-main"))

// let imageArray=[...allImages]




// coverMain.forEach(el=>console.log(el.classList[1]=="active"))

function sliderFn(){
    let nextCover;
    const current=coverMain.find(el=>el.classList[1]=="active");

    if(!current.parentElement.nextElementSibling){
        nextCover=coverMain[0];
    }else{
        nextCover=current.parentElement.nextElementSibling.firstElementChild;
    }

    coverMain.forEach(el=>el.classList.remove("active"));
    nextCover.classList.add('active');

    // Update the big display
    displayImage.src=nextCover.nextElementSibling.src
}

let slider=setInterval(sliderFn,5000);

// Click one of the images
for(oneImage of allImages){
    oneImage.addEventListener("click",function(){
        clearInterval(slider)
        slider=setInterval(sliderFn,5000)
        allImages.forEach(el=>(el.previousSibling.previousSibling).classList.remove('active'));
        const cover=this.previousSibling.previousSibling;
        cover.classList.add("active");
        displayImage.src=this.src
    })
}







/*
Algorithm
For every five second check which image is active
Get the position of the current active image
Get the position of the next image
Make the next image active
Display the next image to the big display image 


*/