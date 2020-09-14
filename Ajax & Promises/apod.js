var baseUrl = new URL ("https://api.nasa.gov/planetary/apod?api_key=bufEcMoK5PfkGPzyXnFxmwsw2n1iYPZQTWDU1c9V")

function showApod(){
    
    setApodDate();
    displayLoader();
    
    fetch(baseUrl, {method: "GET"})
        .then(
            function(response){
                return response.json();
            }
        ).then(
            function(jsonResp){
                displayApod(jsonResp);  
            }
        ).finally(hideLoader);
}

function displayLoader(){
    var apodImg =  document.getElementById("apodImg");
    var loader = document.getElementsByClassName("loader")[0];
    apodImg.style.display = "none";
    loader.style.display = "block";
}

function hideLoader(){
    var apodImg =  document.getElementById("apodImg");
    var loader = document.getElementsByClassName("loader")[0];
    apodImg.style.display = "block";
    loader.style.display = "none";
}

function setApodDate(){
    var apodDate = document.getElementById("apodDate");
    if(apodDate.value){
        baseUrl.searchParams.set("date", apodDate.value);
    }
}

function displayApod(apod){
    var apodTitle = document.getElementById("apodTitle");
    var apodImg = document.getElementById("apodImg");
    var apodDescription = document.getElementById("apodDescription");
    apodTitle.innerText = apod.title;
    apodImg.src = apod.hdurl;
    apodDescription.innerText = apod.explanation;       
}

