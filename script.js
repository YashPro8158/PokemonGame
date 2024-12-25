const pokemonsounds = {
    "pikachu" : "gameaudio/pikachusound.mp3",
    "bulbasaur" : "gameaudio/bulbasaurusound.mp3",
  }
  
  // first pokemon code 
  document.getElementById("sprite").style.display="none";
  document.getElementById("compare").style.display="none";
  document.getElementById("vs-sign").style.display="none";
  let comparecount=0;
  document.getElementById("checkresult").style.display="none";
  document.getElementById("secondpokemon-container").style.display="none";
  let frstpokemon;
  let searchInput
  function victorysound() {
    let victorysound = document.getElementById("victorysound");
    victorysound.autoplay=true;
    victorysound.play();
  document.getElementById("winnerbox").style.transform="scale(1)";
  }
  // compare function button logic here 
  
  document.getElementById("compare").addEventListener("click",()=>{
    document.getElementById("secondpokemon-container").style.display="block";
    document.getElementById("compare").style.display="none";
    document.getElementById("vs-sign").style.display="block";
  });
  
  //button function starts here
  document.getElementById('search-button').addEventListener('click', async () => {
  document.getElementById("firstpokemon-container").style.height="350px";
  document.getElementById("secondpokemon-container").style.height="350px";
  
  //display block of compare btn here
  if (document.getElementById("compare").style.display=="none"&& comparecount==0) {
    
  document.getElementById("compare").style.display="block";
  comparecount=1;
  
  
  }
  else{
    document.getElementById("compare").style.display="none";
  }
  // logic of pokemon first here
    searchInput = document.getElementById('search-input').value.trim().toLowerCase();
    document.getElementById("sprite").style.display="block";
  
    document.getElementById('pokemon-name').textContent = '';
    document.getElementById('pokemon-id').textContent = '';
    document.getElementById('weight').textContent = '';
    document.getElementById('height').textContent = '';
    document.getElementById('hp').textContent = '';
    document.getElementById('attack').textContent = '';
    document.getElementById('defense').textContent = '';
    document.getElementById('special-attack').textContent = '';
    document.getElementById('special-defense').textContent = '';
    document.getElementById('speed').textContent = '';
    const typesDiv = document.getElementById('types');
    typesDiv.innerHTML = ''; 
  
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`);
      if (!response.ok) throw new Error('Pokémon not found');
      frstpokemon = await response.json();
      document.getElementById("error").innerText = "";
      document.getElementById('pokemon-name').textContent = frstpokemon.name.toUpperCase();
      document.getElementById('pokemon-id').textContent = `Pokemon-Id: #${frstpokemon.id}`;
      document.getElementById('weight').textContent = `Weight: ${frstpokemon.weight}`;
      document.getElementById('height').textContent = `Height: ${frstpokemon.height}`;
      document.getElementById('hp').textContent = `Hp: ${frstpokemon.stats[0].base_stat}`; // HP
      document.getElementById('attack').textContent = `Attack: ${frstpokemon.stats[1].base_stat}`; // Attack
      document.getElementById('defense').textContent = `Defense: ${frstpokemon.stats[2].base_stat}`; // Defense
      document.getElementById('special-attack').textContent = `Special-attack: ${frstpokemon.stats[3].base_stat}`; // Special Attack
      document.getElementById('special-defense').textContent =`Special-defense: ${frstpokemon.stats[4].base_stat}`; // Special Defense
      document.getElementById('speed').textContent = `Speed: ${frstpokemon.stats[5].base_stat}`; // Speed
  
      // Sound effect when search for any pokemon name
      if (pokemonsounds[searchInput]) {
        
  let audiopokemonsearch = document.getElementById("pokemonsound");
  audiopokemonsearch.src = pokemonsounds[searchInput];
  audiopokemonsearch.play();
  
      }
  
  // console.log(pokemonsounds[searchInput]);
  
      // Add Pokémon types
      frstpokemon.types.forEach(typeInfo => {
        const typeElement = document.createElement('p');
        typeElement.textContent = typeInfo.type.name.toUpperCase();
        typesDiv.appendChild(typeElement);
      });
  
      // Add sprite image
      let spriteImg = document.getElementById('sprite');
      if (!spriteImg) {
        spriteImg = document.createElement('img');
        spriteImg.id = 'sprite';
        document.getElementById('pokemon-details').appendChild(spriteImg);
      }
      spriteImg.src = `https://img.pokemondb.net/sprites/home/normal/2x/avif/${searchInput}.avif`;
      spriteImg.alt = `${frstpokemon.name} Sprite`;
  
    } catch (error) {
      document.getElementById("compare").style.display="none";
      comparecount=0;
      document.getElementById("error").style.color = "red";
      document.getElementById("error").innerText = "Pokemon not Found";
      document.getElementById("sprite").style.display="none";
    }
  });
  
  
  
  // ***********************************************************************************************************************8
  // second pokemon code
  
  // hidding the error message of img before click on button
  document.getElementById("scnd-sprite").style.display="none";
  //button function starts here
  let scndpokemon;
  document.getElementById('scnd-search-button').addEventListener('click', async () => {
    document.getElementById("checkresult").style.display="block";
    searchInput = document.getElementById('scnd-search-input').value.trim().toLowerCase();
    document.getElementById("scnd-sprite").style.display="block";
  
    document.getElementById('scnd-pokemon-name').textContent = '';
    document.getElementById('scnd-pokemon-id').textContent = '';
    document.getElementById('scnd-weight').textContent = '';
    document.getElementById('scnd-height').textContent = '';
    document.getElementById('scnd-hp').textContent = '';
    document.getElementById('scnd-attack').textContent = '';
    document.getElementById('scnd-defense').textContent = '';
    document.getElementById('scnd-special-attack').textContent = '';
    document.getElementById('scnd-special-defense').textContent = '';
    document.getElementById('scnd-speed').textContent = '';
    const typesDiv = document.getElementById('scnd-types');
    typesDiv.innerHTML = ''; 
  
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`);
      if (!response.ok) throw new Error('Pokémon not found');
      scndpokemon = await response.json();
  
      document.getElementById('scnd-pokemon-name').textContent = scndpokemon.name.toUpperCase();
      document.getElementById('scnd-pokemon-id').textContent = `Pokemon-Id: #${scndpokemon.id}`;
      document.getElementById('scnd-weight').textContent = `Weight: ${scndpokemon.weight}`;
      document.getElementById('scnd-height').textContent = `Height: ${scndpokemon.height}`;
      document.getElementById('scnd-hp').textContent = `Hp: ${scndpokemon.stats[0].base_stat}`; // HP
      document.getElementById('scnd-attack').textContent = `Attack: ${scndpokemon.stats[1].base_stat}`; // Attack
      document.getElementById('scnd-defense').textContent = `Defense: ${scndpokemon.stats[2].base_stat}`; // Defense
      document.getElementById('scnd-special-attack').textContent = `Special-attack: ${scndpokemon.stats[3].base_stat}`; // Special Attack
      document.getElementById('scnd-special-defense').textContent =`Special-defense: ${scndpokemon.stats[4].base_stat}`; // Special Defense
      document.getElementById('scnd-speed').textContent = `Speed: ${scndpokemon.stats[5].base_stat}`; // Speed
  
   // Sound effect when search for any pokemon name
   if (pokemonsounds[searchInput]) {
        
    let audiopokemonsearch = document.getElementById("pokemonsound");
    audiopokemonsearch.src = pokemonsounds[searchInput];
    audiopokemonsearch.play();
    
        }
  
      // Add Pokémon types
      scndpokemon.types.forEach(typeInfo => {
        const typeElement = document.createElement('p');
        typeElement.textContent = typeInfo.type.name.toUpperCase();
        typesDiv.appendChild(typeElement);
      });
  
      // Add sprite image
      let spriteImg = document.getElementById('scnd-sprite');
      if (!spriteImg) {
        spriteImg = document.createElement('img');
        spriteImg.id = 'scnd-sprite';
        document.getElementById('scnd-pokemon-details').appendChild(spriteImg);
      }
      spriteImg.src = `https://img.pokemondb.net/sprites/home/normal/2x/avif/${searchInput}.avif`;
      spriteImg.alt = `${scndpokemon.name} Sprite`;
      document.getElementById("scnd-error").innerText = "";
    } catch (error) {
      document.getElementById("scnd-error").style.color = "red";
      document.getElementById("scnd-error").innerText = "Pokemon not Found";
      document.getElementById("scnd-sprite").style.display="none";
    }
  });
  
  
  
  // declare result box here 
  document.getElementById("checkresult").addEventListener("click",()=>{  
  let frstpokemonattack = frstpokemon.stats[1].base_stat;
  let frstpokemondefense = frstpokemon.stats[2].base_stat;
  let frstpokemonsattack = frstpokemon.stats[3].base_stat;
  let frstpokemonsdefense = frstpokemon.stats[4].base_stat;
    let scndpokemonattack = scndpokemon.stats[1].base_stat;
    let scndpokemondefense = scndpokemon.stats[2].base_stat;
    let scndpokemonsattack = scndpokemon.stats[3].base_stat;
    let scndpokemonsdefense = scndpokemon.stats[4].base_stat;
      let frstpokemontotal = frstpokemonattack +frstpokemondefense+frstpokemonsattack+frstpokemonsdefense;
      let scndpokemontotal = scndpokemonattack +scndpokemondefense+scndpokemonsattack+scndpokemonsdefense;
      if (frstpokemontotal>scndpokemontotal) {
        console.log(`${frstpokemon.name} is Winner: score of ${frstpokemon.name} is: ${frstpokemontotal} & score of ${scndpokemon.name} is: ${scndpokemontotal} `)
        document.getElementById("winnername").textContent=frstpokemon.name;
        document.getElementById("winnerimg").src= `https://img.pokemondb.net/sprites/home/normal/2x/avif/${frstpokemon.name}.avif`;
        victorysound();
      }
      else if (frstpokemontotal<scndpokemontotal) {
        console.log(`${scndpokemon.name} is Winner: score of ${frstpokemon.name} is: ${frstpokemontotal} & score of ${scndpokemon.name} is: ${scndpokemontotal} `)
        document.getElementById("winnername").textContent=scndpokemon.name;
        document.getElementById("winnerimg").src= `https://img.pokemondb.net/sprites/home/normal/2x/avif/${scndpokemon.name}.avif`;
        victorysound();
  
    
  
      }else if(frstpokemontotal==scndpokemontotal){
        alert("Please Select Different Pokemon to Get Result")
      }
  })
  
  
  document.getElementById("winnerwindowclose").addEventListener("click",()=> {
    document.getElementById("winnerbox").style.transform="scale(0)";
    
  })
  