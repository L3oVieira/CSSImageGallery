const panels = document.querySelectorAll('.panel');
/* 
  Remove a classe "active" de todos os elementos e em seguida, adciona 
  a mesma somente ao elemento que foi clicado.
*/ 
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        revomeActiveClasses()
        panel.classList.add("active");
    });
});

//  Função que remove a a classe "active" de todos os elementos ativos
function revomeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
};

