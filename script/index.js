const createLoop = (configLoop = {}) => {
    const startValue = configLoop.startValue;
    const endValue = configLoop.endValue;
    const increment = configLoop.increment;
    const loopType = configLoop.loopType || 'for';
    const direction = configLoop.direction || 'positive';
    return (func = console.log) => {
        if (loopType == 'for') {

            if (direction == 'positive') {
                for (i = startValue; i < endValue; i+=increment ) {
                    func(i);
                }
            } else if (direction == 'negative') {
                for (i = startValue; i > endValue; i-=increment ) {
                    func(i);
                }
            }
            
        } else if (loopType == 'while') {

            let i = startValue;
            if (direction == 'positive') {

                while (i < endValue) {
                    i+=increment;
                    func(i);
                }

            } else if (direction == 'negative') {

                while (i > endValue) {
                    i-=increment;
                    func(i);
                }

            }


        } else {
            console.error('Foi irformado um valor errado a propriedade loopType');
        }
    }
}

function drawn(data) {
    console.log(data);
}

const janelaMsg = {
    tagJanela: document.querySelector('#janela'),
    setContent(content) {
        if (!this.tagConteudoJanela) {
            this.tagConteudoJanela = this.tagJanela.querySelector('#contentJanela');
        }
        this.tagConteudoJanela.innerHTML = "";
        this.tagConteudoJanela.appendChild(content);
    },
    ativar() {
        this.tagJanela.classList.add('janelaAtivada');
        this.tagJanela.classList.remove('janelaDesativada');
    },
    desativar() {
        this.tagJanela.classList.add('janelaDesativada');
        this.tagJanela.classList.remove('janelaAtivada');
    },
}
const btnjanelaMsg = document.querySelector('#janela>input[type="button"]');
btnjanelaMsg.addEventListener('click', () => janelaMsg.desativar());

const formulario = {

}
const btnGerar = document.querySelector('#gerar');

btnGerar.addEventListener('click', () => {
    const contentPg = document.createElement('section');
    const configLoop = {
        startValue: parseInt(document.querySelector("#valor-inicial").value),
        endValue: parseInt(document.querySelector('#valor-final').value),
        increment: parseInt(document.querySelector('#valor-incremento').value),
        loopType: document.querySelector('#For').checked ? 'for' : 'while',
        direction: document.querySelector('#Crescente').checked ? 'positive' : 'negative',
        formaImprecao: document.querySelector('#formaImprecaoLinha').checked ? 'linha' : 'coluna'
    }
    console.log(configLoop);
    createLoop(configLoop)((n) => {
        contentPg.appendChild(document.createTextNode(n));
        contentPg.appendChild(configLoop.formaImprecao == 'linha' ? document.createTextNode(' ') : document.createElement('br'));
    });

    janelaMsg.setContent(contentPg);
    janelaMsg.ativar();
})