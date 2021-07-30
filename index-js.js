//pageloader


const pageLoader=document.getElementById('page_loader');

function pageLoad(){
    pageLoader.style.display= 'none';
}


// Design Photos


const centerId= document.getElementById('designId');


fetch("https://jsonplaceholder.typicode.com/photos?_limit=50").then((apiData) =>{ // "?_limit=20 for" limited data



 return apiData.json();

}).then((jsonData) =>{ 


 jsonData.map((DesignVal) => {

     key=DesignVal.id;
     let Designimg = document.createElement("img");
     Designimg.src=` https://picsum.photos/250/300?random=1${DesignVal.id} `;
     Designimg.title='API Photos - Site Under Development';

     centerId.appendChild(Designimg);


 });

});
