const playerArray = [];

function display(playerSelect){

    const playersName = document.getElementById('player-name');
    playersName.innerHTML ='';
    
    for(let i = 0; i < playerSelect.length; i++){
        const name = playerArray[i].playerName;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}.</th>
        <td>${name}</td>
        `;
        playersName.appendChild(tr);
    }
}

function playerList(element){
    const playerName = element.parentNode.children[1].innerText;
    element.disabled = true;
    const playerObject = {
        playerName : playerName,
    }
    playerArray.push(playerObject)
    
    document.getElementById('add-player').innerText = playerArray.length;
    display(playerArray);
}