# Projeto de Automação de Testes

## Pré-requisitos
Para rodar os testes, há alguns requisitos que precisam estar instalados no sistema:

### Sistemas
Antes de rodar, certifique-se de que os seguintes sistemas estejam instalados em seu computador:
- **Node.js**: Versão 20.18.0 (versão utilizada na criação e execução dos testes).
- **npm**: Versão 10.8.2 (versão utilizada na criação e execução dos testes).
- **Visual Studio Code**: Ou alguma outra IDE de sua preferência. Contudo, o VS Code foi utilizado durante a construção dos testes.

## Execução
Após realizar o download do projeto e abri-lo no VS Code:
1. Abra o terminal da IDE.
2. Insira o comando:

   ```bash
   npx cypress open
   ```

3. Isso abrirá a interface do Cypress com os arquivos contendo os testes executáveis.
4. Clique sobre o nome do teste desejado, e a suíte de testes será executada.

## Projeto
Este projeto visa automatizar as seguintes ações:
- Login.
- Visualização de informações.
- Seleção e remoção de itens.
- Finalização de um fluxo (especificamente, um fluxo de compra).

## Arquitetura dos Arquivos
O projeto foi estruturado utilizando o padrão de projeto **Page Object Model (POM)**. A seguir, estão os principais diretórios e sua função:

### Estrutura Principal
- **`PageObjects`**: Diretório principal para abstração de elementos e ações na página.
  - **`PageAction`**: Contém classes ou arquivos responsáveis por realizar ações sobre elementos na página web.
  - **`PageElements`**: Contém classes ou arquivos para armazenar os seletores/caminhos de elementos utilizados nas ações definidas em `PageAction`.

### Reutilização de Código
- **`commands.js`**: Localizado na pasta `support` do Cypress. Este arquivo contém funções reutilizáveis, como o login, para simplificar e otimizar os testes.

### Data-Driven Testing
- **`data-driven`**: Localizado em `fixtures`. Este diretório contém conjuntos de dados utilizados em chamadas iterativas (loop) para executar testes com diferentes entradas.

### Testes
- **`integration/TestCases`**: Diretório onde estão localizados os testes. Esses testes podem ser selecionados e executados diretamente na interface aberta pelo comando Cypress.

## Conclusão
Este projeto foi desenvolvido para automatizar fluxos de testes de forma organizada e reutilizável. Siga as instruções acima para configurar e executar os testes com sucesso. Em caso de dúvidas, consulte a documentação/arquivos do projeto ou entre em contato pelo email will.correia.lima@gmail.com.

