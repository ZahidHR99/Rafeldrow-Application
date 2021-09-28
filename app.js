window.onload = function(){
    const input = document.getElementById('input');
    const nameList = document.getElementById('name-list');
    const display = document.getElementById('display');
    const spinner = document.getElementById('spinner');
    const firstPosition = document.getElementById('first-position');
    const secondPosition = document.getElementById('second-position');
    const thirdPosition = document.getElementById('third-position');

    const participantName = []

    input.addEventListener('keypress', function(event){
        if(event.key === 'Enter'){
            let newNames = event.target.value.split(', ')
            if(newNames[0] !== ''){
                newNames.forEach(name=> {
                    participantName.push(name)
                    let item = createListItem(name)
                    nameList.appendChild(item)
                    event.target.value = ''
                });
            }
        }
    })

    spinner.addEventListener('click', function(){
        if(participantName.length === 0){
            alert('There is no Entry')
        }else{
            let shuffledNames = shuffle(participantName)
            for(let i = 1; i < shuffledNames.length; i++){
               (function (i, count){

                setTimeout(() =>{
                    let rand = Math.floor(Math.random() * (shuffledNames.length))
                    display.innerHTML = shuffledNames[rand]

                    if(count === shuffledNames.length - 1){
                        if(!firstPosition.innerHTML){
                            firstPosition.innerHTML = shuffledNames[rand]
                            let index = participantName.indexOf(shuffledNames[rand])
                            participantName.splice(index, 1)
                        }else if(!secondPosition.innerHTML){
                            secondPosition.innerHTML = shuffledNames[rand]
                            let index = participantName.indexOf(shuffledNames[rand])
                            participantName.splice(index, 1)
                        }else if(!thirdPosition.innerHTML){
                            thirdPosition.innerHTML = shuffledNames[rand]
                            let index = participantName.indexOf(shuffledNames[rand])
                            participantName.splice(index, 1)
                        }else{
                            alert('Raffle Draw Already Completed')
                        }
                    }

                }, i)

               })(i*100, i)
            }
        }
    })
}


function createListItem(name){
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = name
    return li
}

function shuffle(arr){
    let shuffledArr = [...arr]

    for(let i = shuffledArr.length -1; i > 0; i--){
        let rand = Math.floor(Math.random() * (i + 1))
        let temp = shuffledArr[rand]
        shuffledArr[rand] = shuffledArr[i]
        shuffledArr[i] = temp
    }
    return shuffledArr
}

