function listaVagas() {
    fetch('https://localhost:5001/api/Profissoes/'+location.search.substring(1).split("=")[1]).then(async function (response) {
        let vaga = await response.json();
        console.log(vaga);
        let html = "";
        
            html +=`
                <div class="box column is-full is-block">
                    <div>
                        <figure class="image is-32x32">
                            <img src="../resources/job-icon.png" alt="job-icon">
                        </figure>
                        
                            <span>IDVAGA: <span class="has-text-primary">#${vaga.id}</span></span>
                    </div>
                        <div class="column">
                            <h3 class="title is-6">${vaga.nome}</h3>
                            <p>Descrição:</p>
                            <p>${vaga.descricao}</p>
                        </div>
                        <div class="column">
                            <a href="./cadastro_candidato.html?id_vaga=${vaga.id}" class="button is-primary ">Candidate-se</a>
                        </div>
                    </div>
                </div>
                `

       
        document.getElementById("lista_vagas").innerHTML = html
    }).catch(function (err) {
        console.warn('Something went wrong.', err);
    });
}

listaVagas();