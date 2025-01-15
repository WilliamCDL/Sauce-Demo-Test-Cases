Pré-requisitos
	Para rodar os testes, há alguns requisitos que precisam estar instalados no sistema

Sistemas
	Antes de rodar, certifique-se de que os seguintes sistemas estejam instalados em seu computador.
	- Node.js ( v20.18.0 no momento de criação e execução dos testes)
	- npm (10.8.2 no momento de criação e execução dos testes)
	- visual studio code ( ou alguma outra IDE de sua preferencia, porém essa foi a utilizada no momento da construção dos testes )
 
Execução
	Após realizar o download do projeto e abrir no VS code, abra o terminal da IDE e insira o comando "npx cypress open", onde ira abrir a interface com os arquivos que possuem os testes executaveis, basta clicar sobre o nome e a suite de testes sera executada

Projeto
	Este projeto visa automatizar ações de login, visualização de informações, seleção e remoção de itens, e finalização de um fluxo no caso especifico uma compra.

Arquitetura dos arquivos
	Visando aplicar o padrão de projeto Page Object Model (POM), foi criada a pasta "PageObjects" a qual contem subpastas "PageAction" para ações sobre elementos na pagina web e "PageElements" a qual visa salvar o endereço/caminho para exercer a ação realizada na PageAction
	Para chamadas de ações que eram realizadas com certa frequencia ou reutilização de um fluxo como login, a o arquivo "commands.js" na pasta de support do cypress contem a criações de "funções" visando a reutilização de codigo durante os testes
	Para executar um mesmo teste com diferentes entradas foi criada a pasta "data-driven" em fixtures contendo conjuntos de dados a serem utilizados em chamadas em loop.
	O controle e execução dos testes estão contidos na pasta "integration/TestCases", se encontra aqui os testes selecionaveis na ferramenta aberta pós comando de execução via terminal. 
