

            const result = JSON.parse(localStorage.getItem('result')) || {
                winsnum: 0,
                losenum: 0,
                tienum: 0
            } ;

            function playgame(yourmove) {

                let vr = Math.random();
                let resultinfo = '' ;
                let computermove = '' ;

                if ( vr >= 0 && vr < 1/3){
                    computermove = 'rock'
                } else if (vr >= 1/3 && vr < 2/3) {
                    computermove = 'paper'
                }else if (vr >= 2/3 && vr < 1) {
                    computermove = 'scissors'
                }

                
                if (computermove === yourmove) {
                    result.tienum++ ;
                    resultinfo = 'Tie'
                }else if (computermove === 'paper' && yourmove === 'scissors'){
                    result.winsnum++ ;
                    resultinfo = 'You Wins!'
                }else if (computermove === 'paper' && yourmove === 'rock'){
                    result.losenum++ ;
                    resultinfo = 'You Lose!'
                }else if (computermove === 'rock' && yourmove === 'paper') {
                    result.winsnum++ ;
                    resultinfo = 'You Wins!'
                } else if (computermove === 'rock' && yourmove === 'scissors') {
                    result.losenum++ ;
                    resultinfo = 'You Lose!'
                }else if (computermove === 'scissors' && yourmove === 'paper') {
                    result.losenum++ ;
                    resultinfo = 'You Lose!'
                }else if (computermove === 'scissors' && yourmove === 'rock') {
                    result.winsnum++ ;
                    resultinfo = 'You Wins!'
                }

                localStorage.setItem('result', JSON.stringify(result))
                return [resultinfo, computermove] ;

            }

            document.querySelector('.js-scores').innerHTML =
             `Wins: ${result.winsnum}, Losses: ${result.losenum}, Ties: ${result.tienum}`
            
            function playgameresult(youroption) {

                let [resinfo, compmov] = playgame(youroption) ;
                let playgamres = {
                    resinfo,
                    compmov
                }
                document.querySelector('.js-general-situation').innerHTML = 
                 playgamres.resinfo ;
                document.querySelector('.js-chooses').innerHTML =
                 `you choose${definselectedimg(youroption)} &nbsp;&nbsp;&nbsp;      
                 computer choose${definselectedimg(playgamres.compmov)}`
                document.querySelector('.js-scores').innerHTML =
                 `Wins: ${result.winsnum}, Losses: ${result.losenum}, Ties: ${result.tienum}`
                
            }

            function reset() {

                result.losenum = 0;
                result.tienum = 0;
                result.winsnum = 0;
                localStorage.removeItem('result');
                document.querySelector('.js-general-situation').innerHTML = ''
                document.querySelector('.js-chooses').innerHTML = ''
                document.querySelector('.js-scores').innerHTML =
                 `Wins: ${result.winsnum}, Losses: ${result.losenum}, Ties: ${result.tienum}`

            }

            function definselectedimg(youroption) {
                if (youroption === 'rock') {
                    return `<img class="selector-img" src="styles/images/rock-emoji.png">`
                }else if (youroption === 'paper') {
                    return `<img class="selector-img" src="styles/images/paper-emoji.png">`
                } else if (youroption === 'scissors') {
                    return `<img class="selector-img" src="styles/images/scissors-emoji.png">`
                }
            }
