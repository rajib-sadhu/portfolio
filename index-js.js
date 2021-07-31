//pageloader


const pageLoader=document.getElementById('page_loader');

function pageLoad(){
    pageLoader.style.display= 'none';
}


// Design Photos


const centerId= document.getElementById('designId');


fetch("https://jsonplaceholder.typicode.com/photos?_limit=26").then((apiData) =>{ // "?_limit=20 for" limited data



 return apiData.json();

}).then((jsonData) =>{ 


  
    jsonData.map((DesignVal) => {

        key=DesignVal.id;
        let Designimg = document.createElement("img");
        Designimg.src=`content/graphics/${DesignVal.id}.jpg `;
        Designimg.title='API Photos - Site Under Development';
   
        centerId.appendChild(Designimg);

    });



});
