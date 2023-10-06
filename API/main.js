const apikey = "live_IjTwTMSmTEGQdFqEfYf4tDKzH4haNZSop19q0WoMO46wDdIrMK7ndbHDYLwbWmXL";

const button = document.getElementById("button");
const image = document.getElementById("image");

const getImage = () => {
    fetch("https://api.thecatapi.com/v1/images/search",{
        headers:{
            "x-api-key": apikey,
        },
    })

    .then((response)=> response.json())
    .then((data)=>{
        //gets image
        const imageURL = data[0].url;
        //creates element for image
        const cat = document.createElement('img');
        //gives url
        cat.src = imageURL;
        //clear and append
        image.innerHTML = "";
        image.appendChild(cat);
    })
    .catch((error)=>{
        console.error("Error",error);
    });
};

button.addEventListener("click", getImage);