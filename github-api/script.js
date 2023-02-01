const pesquisa = document.querySelector("#pesquisa");
const ul = document.querySelector('ul');
const btn = document.querySelector('#btn');
const nomes = document.querySelector('#name');
const img = document.querySelector('#img');
const perfil = document.querySelector('#perfil');


const getRepos = async () => {
    let url = `https://api.github.com/users/${pesquisa.value}/repos`;
    const res = await fetch(url);
    const data = await res.json();

    console.log(res)
    console.log(data)
    
    if(res.status == 200){
        nomes.innerHTML = '@' + pesquisa.value;
        nomes.style.color = 'white';
        img.style.display = 'flex';
        img.src = data[0].owner.avatar_url;
    }
    else{
        nomes.innerHTML = 'USUARIO NAO ENCONTRADO';
        nomes.style.display = 'flex';
        nomes.style.wordBreak = 'keep-all';
        perfil.style.width = '90%';
        nomes.style.color = 'red';
        img.style.display = 'none';
    }
    
    pesquisa.value = '';

    console.log(data);
    
    ul.innerHTML = '';
    data.forEach(element => {
        const github = `https://github.com/${nomes.innerHTML.replace('@', '')}/${element.name}`
        const li = document.createElement('li');
        li.innerHTML = `<strong>${element.name.toUpperCase()}</strong>
        <a href="${github}" target="_blank">LINK : ${element.name}</a>
        <span>Data de Criação:  ${Intl.DateTimeFormat('pt-BR').
        format(new Date(element.created_at))}</span>`;
        ul.appendChild(li);
    });
}

btn.addEventListener('click', getRepos);

document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        getRepos();
    }
})





