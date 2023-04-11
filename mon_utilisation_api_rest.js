//API Key : cfh7C/Gv+GoA7366bd3Y3w==qmpI53AKqm4YWYkk

rafraichirChien()
document.querySelector('#fetch-dog').addEventListener('click', async () =>{
    rafraichirChien()
})
async function rafraichirChien(){    
    let fetchResult = await fetch('https://random.dog/woof.json');
    console.log(fetchResult);
    let data = await fetchResult.json();
    console.log(data);
    if(data.url.includes('.mp4')){
        rafraichirChien()
    }
    document.querySelector('#image-chien').src = data.url;
}