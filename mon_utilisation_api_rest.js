//API Key : cfh7C/Gv+GoA7366bd3Y3w==qmpI53AKqm4YWYkk

randomChien()
document.querySelector('#random').addEventListener('click', async () =>{
    randomChien()
})
async function randomChien(){    
    let fetchResult = await fetch('https://random.dog/woof.json');
    console.log(fetchResult);
    let data = await fetchResult.json();
    console.log(data);
    if(data.url.includes('.mp4')){
        randomChien()
    }
    else{
        document.querySelector('#image-random-chien').src = data.url;
    }
}


rafraichirChien();
function rafraichirChien(){
    const boutonwouf = document.querySelector("#fetch-dog");
    boutonwouf.addEventListener("click", async function(event){
        // Désactivation du comportement par défaut du navigateur
        event.preventDefault();
        let nameInput = document.getElementById("name_dog").value;
        const chien = {
            name : nameInput,
        };
        //Conversion en JSON
        const chargeUtile = JSON.stringify(chien);
        //Appeler la fonction fetch avec ses 2 arguments (url et objet de config)
        const resultat = await fetch("https://api.api-ninjas.com/v1/dogs?name="+chien.name, {
            method: "GET",
            headers: {'X-Api-Key': 'cfh7C/Gv+GoA7366bd3Y3w==qmpI53AKqm4YWYkk'},
            contentType: 'application/json',
        });
        console.log(resultat);
        let data = await resultat.json();
        console.log(data);
        if(data.length != 0){
            let premierResultat = data[0]
            document.querySelector('#image-chien').src = premierResultat.image_link;
        } 
        else{
            document.querySelector('#mon_container_chien_image').innerHTML = "Aucun chien de cette race n'a été trouvé, veuillez vérifier l'orthographe";
        }
        
    });
}

