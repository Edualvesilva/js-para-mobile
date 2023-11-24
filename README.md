# JavaScript para Mobile
 Revisão e recursos novos de JS para Mobile

## Principais tópicos de atenção e estudos

### Variáveis e Constantes

`let` e `const` possuem escopo de BLOCO ou quando declarado dentro de blocos (condicionais,loops), e escopo **GLOBAL** quando declarado fora de blocos. 

`var` possui escopo **GLOBAL** mesmo quando declarado dentro de blocos. Portanto, é acessível em praticamente qualquer lugar dentro da aplicação

`const` obrigatoriamente precisa ser inicializada com algum valor/expressão **não pode ser modificado**. 

### Funções

Blocos de código reaproveitáveis que podem ser criados de pelo menos 3 formas:

- Função nomeada/declarada
- Função anônima
- Arrow Function

Nas bibliotecas e frameworks as sintaxes mais comuns são Arrow Function e Nomeada.

**Obs.::** caso utilize as sintaxes anônima ou arrow, certifique-se de **primeiro** declarar a função para só depois chamá-la.

### Template Literal/String

Forma mais moderna de manipular dados estáticos e dinâmicos, além de permitir de uma forma mais fácil executar operações dentro de strings/códigos. Lembre-se do uso das **crases** e do bloco `${}` para execuções de código dinâmico (váriveis,constantes,funções,etc).

### Módulos 

São uma maneira de separar lógicas/funcionalidades/dados em arquivos dedicados. Ao criar módulos é necessário utilizar os comandos `export`(no módulo a ser exportado) e `import` (no arquivo em que você quer usar o módulo).

Ao exportar apenas **um recurso**, utiliza-se `export default nomeDoRecurso`. Ao exportar **um ou mais** recursos, utiliza-se `export {recuro1,recurso2,recurso3}`

Ao importar  apenas **um recurso**,utiliza-se `import nomeDoRecurso from "local/nomeDoModulo"`. Ao importar **um ou mais** recursos, utiliza-se `import {recurso1,recurso2} from "nomeDoModulo"`.

### Operador Spread e Rest ...

- Spread (Espalhar): usado para dividir elementos de um array ou propriedades de um objeto para um outro array/objeto. Útil para gerar novas estruturas de dados a partir de estruturas existentes.

- rest (coletar/extrair valores): usado para gerar uma lista de parâmetros para uma função à partir dos valores de um array. Útil para evitar a necessidade de criar parâmetros manualmente em uma função, ou para quando não sabemos quantos parâmetros serão necessários. 

### Destructuring (Desestrução)

Técnica para extrair valores de arrays e objetos para novas variáveis/constantes. Usada para simplificar o acesso a estes dados, podendo ser aplicada também em parâmetros de funções.

### Métodos para iteração em arrays: map,filter e reduce

São métodos que permitem realizar operações diversas em elementos de arrays. Funcionam como `loops` especias, executando uma função conhecida como `callback` para cada elemento dentro do array.

 ### map

 Percorre os elementos do array e executa algum tipo de transformação,gerando um novo array de dados.

 ### filter

 Percorre os elementos do array filtrando seus valores de acordo com uma ou mais condições, gerando um novo array de dados.

 ### reduce

 Percorre os elementos do array realizando operações (soma,multiplicação,concatenação etc), gerando um único resultado.