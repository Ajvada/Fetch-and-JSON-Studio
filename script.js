window.addEventListener("load", function(){ 
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {  
        response.json().then(function(json) {
        const container = document.getElementById("container"); 
        function astros(index){
            let astro = `<div class="astronaut">
        <div class="bio">
           <h2>${json[index].firstName} ${json[index].lastName}</h2>
           <ul>
              <li>Hours in space:${json[index].hoursInSpace}</li>
              <li>Active:${json[index].active}</li>
              <li>Skills:${json[index].skills}</li>
           </ul>
        </div>
        <img  class="avatar" src=${json[index].picture}>
     </div>` 
    return astro;
    }
    let astronautsHTML = ""; 
            
            for (let i = 0; i < json.length; i++) {
                astronautsHTML += astros(i); 
            }
            
            container.innerHTML = astronautsHTML;
        
        }); 
        
    });
});

// container.innerHTML = [astros(0),astros(1),astros(2),astros(3),astros(4),astros(5),astros(6)]
