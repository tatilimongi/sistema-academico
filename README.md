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

## Tecnologias Utilizadas

- **Node.js**
- **Jest**: Framework de testes para JavaScript

## Integrantes do Grupo
- João Victor Melo
- Marlon Souza de Melo
- Tatiana Limongi Chaves

## Contribuição

Sinta-se à vontade para abrir _issues_ e enviar _pull requests_ para contribuir com melhorias.
