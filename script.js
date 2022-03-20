let xhr=new XMLHttpRequest();
let source="bbc-news";
let key="3be891350fc243a1acbffed40e29b22b";
let place=document.getElementById("accordionExample");
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${key}`,true);

xhr.onload = function(){
    if(this.status===200){
         let json=JSON.parse(this.responseText);
         console.log(json);
         let MyHtml="";
         json.articles.forEach((element,index) => {
             console.log(index)
             let newHTML =`<div class="card">
             <div class="card-header" id="heading${index}">
               <h2 class="mb-0">
                 <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                  <b> BREAKING NEWS  :  </b>${element["title"]}
                 </button>
               </h2>
             </div>
         
             <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordionExample">
               <div class="card-body">
               ${element["content"]} <a href="${element["url"]}" target="_blank">Read More Here</a> 
               </div>
             </div>
           </div>`;
           MyHtml=MyHtml + newHTML;
         });
         place.innerHTML=MyHtml;
    }else{
        console.log("Some error occoured");
  }  
}
xhr.send();