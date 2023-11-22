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