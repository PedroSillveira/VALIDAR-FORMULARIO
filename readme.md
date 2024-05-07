# Validação de formulário

## Validação de Formulário em JavaScript

O código do arquivo 'script.js' é responsável pela validação de formulários na página. Ele garante que o usuário preencha corretamente os campos obrigatórios antes de enviar o formulário. Caso contrário, o mesmo é responsável de alertar o não preenchimento.

### Estrutura HTML
    O formulário contém quatro campos de entrada principais: `username`, `email`, `password` e `passwordConfirmation`. Onde cada campo de entrada possui um atributo `id` associado que corresponde às variáveis JavaScript usadas para acessá-los.

### Event Listeners
No código, são incorporados para ações específicas, como: 
Ao clicar em 'cadastrar' `form.addEventListener("submit", ...)`
Quando o campo de e-mail perde o foco `email.addEventListener("blur", ...)`
Quando o campo de nome de usuário perde o foco `username.addEventListener("blur", ...)`

### Funções de Validação

`checkInputUsername`, `checkInputEmail`, `checkInputPassword` e `checkInputPasswordConfirmation`.
   
   - Cada função verifica o valor do campo de entrada correspondente e realiza validações específicas com base nas condições que você definiu.

### Lógica de Validação:
    
`checkInputUsername`:    
    - Verifica se o campo de nome de usuário está vazio. Se estiver, exibe uma mensagem de erro.

`checkInputEmail`:
    - Verifica se o campo de e-mail está vazio. Se estiver, exibe uma mensagem de erro.

`checkInputPassword`:    
    - Verifica se o campo de senha está vazio ou tem menos de 8 caracteres. Exibe uma mensagem de erro conforme necessário.

`checkInputPasswordConfirmation`:
    - Compara o campo de confirmação de senha com o campo de senha original. Se não coincidirem, exibe uma mensagem de erro.
    - Todas essas funções atualizam a classe CSS do item de formulário correspondente para mostrar ou ocultar mensagens de erro.

### Verificação do Envio do Formulário:

Após todas as validações individuais de entrada, a função `checkForm` é chamada, verificando se todos os itens do formulário   têm a classe `"form-content"` (ou seja, estão preenchidos corretamente). Se todos os itens do formulário forem válidos, exibe uma mensagem de sucesso, caso contrário, solicita ao usuário que preencha todos os campos do formulário.