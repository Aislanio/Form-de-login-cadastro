

![GitHub repo size](https://img.shields.io/github/repo-size/Aislanio/Form-de-login-cadastro?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/Aislanio/Form-de-login-cadastro?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/Aislanio/Form-de-login-cadastro?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/Aislanio/Form-de-login-cadastro?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/Aislanio/Form-de-login-cadastro?style=for-the-badge)
[![Netlify Status](https://api.netlify.com/api/v1/badges/24a38faf-19de-4ae4-bbef-7abf15010a1d/deploy-status)](https://app.netlify.com/sites/fervent-wiles-3945e4/deploys)
# Formulario de Login e Cadastro

<img src="https://github.com/Aislanio/Galeria/blob/master/Captura%20de%20Tela%20(186).png" alt="imagem do site">

> Login e Cadastro

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Estrutura html
- [x] estilizar o html com css
- [x] Mudar a mensagem de erro do formulario com JavaScript 
- [x] Fazer o formulario de login
- [x] Fazer o forumulario de Cadastro
- [ ] Fazer o Back end do login e cadastro 


## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
<!---Estes são apenas requisitos de exemplo. Adicionar, duplicar ou remover conforme necessário--->
* Você instalou a versão mais recente de `<linguagem / dependência / requeridos>`
* Você tem uma máquina `<Windows / Linux / Mac>`. Indique qual sistema operacional é compatível / não compatível.
* Você leu `<guia / link / documentação_relacionada_ao_projeto>`.
## Modificando o alert do formulario com JavaScript
 Para modificar o alert se usa o seguinte script 
 ```
 document.querySelector('form input').oninvalid = function(evt) {  
    // essa linha cancela o comportamento padrão do navegador
    evt.preventDefault();
    // faz a validação novamente
    if (!this.validity.valid) {
        //aqui eu mostro o alert
        alert("O campo nome é obrigatório!");
    }
};
 ```
 Agora e so você usar sua criatividade
 links úteis : <a href="http://gabsferreira.com/alterando-a-validacao-padrao-do-html5/">alterando-a-validacao-padrao-do-html5</a>   
 <a href="https://www.devmedia.com.br/html5-validator-validando-formularios-com-html5/28785">html5-validator-validando-formularios-com-html5</a>
### Autor
---

<a href="https://github.com/Aislanio">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/69637616?s=460&amp;v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Aislânio Amorim</b></sub></a>


Feito  por Aislânio Amorim 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Aislânio-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/aisl%C3%A2nio/)](https://www.linkedin.com/in/aisl%C3%A2nio-amorim-4009521b8/) 
[![Gmail Badge](https://img.shields.io/badge/-aislanioamorim@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:aislanioamorim@gmail.com)](mailto:aislanioamorim@gmail.com)
