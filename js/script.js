
let randomNumber;
let userNumber;
let contador = 5;
let interval;
const result = document.getElementById('result')
const countdown = document.getElementById('countdown')
const restart = document.getElementById('restart')
    
document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        const juego = new Promise((resolve) => {
            interval = setInterval(() => {
                document.getElementById('countdown').innerHTML = `Cuenta atrás: ${contador} segundos`;
                contador--;
                if(contador < 0) {
                    clearInterval(interval)
                    resolve();
                }
            }, 1000);
        });

        userNumber = parseInt(document.getElementById('userInput').value, 10);

        function mostrarResultado () {
            if(userNumber === randomNumber) {
                result.innerHTML = `
                    <div class='ganar'>¡Has salvado el mundo!</div> 
                    <div class ='resultado'>
                    <p>Tu número ${userNumber} es el mismo que el número ${randomNumber}.</p>
                    </div>
                `
            } else {
                result.innerHTML = `
                    <div class='perder'>¡La bomba ha estallado!</div> 
                    <div class ='resultado'>
                    <p>Tu número ${userNumber} es diferente que el numero ${randomNumber}.</p>
                    </div>
                `
            }
        }

        juego.then(() => {
            randomNumber = Math.floor(Math.random() * 3) + 1;
            mostrarResultado();
        })
    }
});
    
restart.addEventListener('click', () => {
    clearInterval(interval);
    document.getElementById('userInput').value = '';
    result.innerHTML = '';
    countdown.innerHTML = '';
    contador = 5;
})