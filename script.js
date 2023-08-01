var  res = fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>{
for (var i = 0; i < data1.length; i++) {
   //console.log(data1) ;
   var div = document.createElement("div");
   div.innerHTML=`<div class="card" style="width: 18rem;">
   <h2>${data1[i].name}</h2>
   <img src="${data1[i].flag}" class="card-img-top" alt="...">
   <div class="card-body">
     <h4>Capital: ${data1[i].capital}</h4>
     <h5>Region: ${data1[i].region}</h5>
     <h6>Country Code: ${data1[i].cioc}</h6>
     <h6>latlng: ${data1[i].latlng}</h6>
     
    
     <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
       Click for Weather
     </button>
     
    
     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog">
         <div class="modal-content">
           <div class="modal-header">
             <h5 class="modal-title" id="exampleModalLabel"> Weather</h5>
             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              

             </button>
           </div>
           <div class="modal-body">
            
           </div>
           <div class="modal-footer">
             <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
             <button type="button" class="btn btn-primary">Save changes</button>
           </div>
         </div>
       </div>
     </div>
   
     </div>
 </div>`

  
 document.body.append(div)
}}
);
