


function changeImage() {
    let photo = document.getElementById('image').getAttribute("src");
    //console.log(photo);
    //console.log("/assets/images/photo-2.webp")
    if (photo == "/assets/images/photo-1.webp") {
    document.getElementById('image').src = "/assets/images/photo-2.webp";
    } 
    else if (photo == "/assets/images/photo-2.webp") {
    document.getElementById('image').src = "/assets/images/photo-3.webp";  
    }
    else {
    document.getElementById('image').src = "/assets/images/photo-1.webp";
     }
        
}
//getAttribute("src") gets the relative path like /assets/images/photo-2.webp 
//if it only document.getElementById('image').src, it should be an absolute path.

//need to use == instead of =, for comparison