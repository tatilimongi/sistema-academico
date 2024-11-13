# Sistema Acadêmico

Este projeto é um sistema acadêmico desenvolvido em JavaScript, que permite o lançamento de notas, cálculo de médias, e determinação do status de aprovação ou reprovação dos alunos. O sistema utiliza validações de entrada para garantir a precisão dos dados e foi desenvolvido utilizando **Node.js** e **Jest** para testes.

## Funcionalidades

- **Lançamento de Notas**: Permite o lançamento de notas das unidades UP1 e UP2 com validações para garantir a entrada de dados dentro dos limites aceitáveis.
- **Cálculo da Média**: Calcula a média das notas lançadas com uma precisão de uma casa decimal.
- **Determinação do Status**: Com base na média calculada, determina o status do aluno como:
  - "Reprovado por média" (média inferior a 4.0)
  - "Aguardando a final" (média entre 4.0 e 5.9)
  - "Aprovado por média" (média igual ou superior a 6.0)

## Estrutura do Projeto

- **`calcularMedia.js`**: Contém a função para calcular a média das notas.
- **`exibirStatus.js`**: Determina o status do aluno com base na média calculada.
- **`lancamentoNotas.js`**: Contém a função para lançar as notas com validações.
- **`tests`**: Diretório com os arquivos de teste unitário para cada função principal, escritos com **Jest**.

## Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado em sua máquina. [Download Node.js](https://nodejs.org/)

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/tatilimongi/sistema-academico.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd sistema-academico
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Uso

Após instalar as dependências, você pode executar os testes para validar o funcionamento do sistema.

### Executando os testes

Para rodar todos os testes, execute:
```bash
npm test
```

### Descrição dos Testes

- **Teste de `calcularMedia.js`**: Verifica se a média das notas é calculada corretamente para diferentes combinações de notas.
- **Teste de `exibirStatus.js`**: Valida o status de aprovação ou reprovação com base nas regras de média.
- **Teste de `lancamentoNotas.js`**: Garante que as notas lançadas estão dentro do intervalo aceitável e que as entradas inválidas lançam erros apropriados.

## Exemplo de Uso

```javascript
const { lancarNotas } = require('./sistema-academico/lancamentoNotas');
const { calcularMedia } = require('./sistema-academico/calcularMedia');
const { determinarStatus } = require('./sistema-academico/exibirStatus');

// Exemplo de lançamento de notas
try {
  const notas = lancarNotas(8.0, 6.5);
  console.log(notas); // { up1: 8.0, up2: 6.5, mensagem: 'Notas salvas com sucesso' }

  const media = calcularMedia(notas.up1, notas.up2);
  console.log('Média:', media); // Média: 7.2

  const status = determinarStatus(notas.up1, notas.up2);
  console.log('Status:', status); // Status: "Aguardando a final" (baseado no exemplo)
} catch (error) {
  console.error(error.message);
}
```

## Integração Contínua com GitHub Actions

Este projeto utiliza o GitHub Actions para garantir a qualidade e integridade do código por meio de testes automatizados. Sempre que houver um novo **commit** ou **pull request** na branch `main`, o fluxo de CI é executado automaticamente para verificar se todos os testes passam com sucesso.

### Como funciona:

- **Pull Requests:** Quando você cria ou atualiza um pull request direcionado à branch `main`, o GitHub Actions executa automaticamente todos os testes definidos no projeto para garantir que o novo código não quebre funcionalidades existentes.
- **Commits:** A cada novo commit na branch `main`, o GitHub Actions valida o código e executa os testes para garantir que o código integrado esteja funcionando como esperado.

### Benefícios:

- **Detecção rápida de erros:** Testes automatizados são executados em cada mudança de código, identificando falhas de forma rápida e eficiente.
- **Processo de integração ágil:** Reduz o risco de bugs e falhas no código ao integrar continuamente as mudanças feitas no repositório.
- **Melhor colaboração:** Assegura que todos os colaboradores estejam submetendo código de alta qualidade, sem que erros se acumulem antes da revisão.

Este processo de integração contínua é fundamental para manter a consistência e a confiança no código à medida que o projeto cresce.

## Tecnologias Utilizadas
- Node.js: Ambiente de execução JavaScript para o backend do projeto.
- Jest: Framework de testes para JavaScript, utilizado para garantir a qualidade do código por meio de testes automatizados.
- GitHub Actions: Ferramenta de integração contínua (CI) para automatizar a execução de testes sempre que houver um novo commit ou pull request, assegurando que o código permaneça livre de erros.

## Integrantes do Grupo
- João Victor Melo
- Marlon Souza de Melo
- Tatiana Limongi Chaves

## Contribuição

Sinta-se à vontade para abrir _issues_ e enviar _pull requests_ para contribuir com melhorias.
