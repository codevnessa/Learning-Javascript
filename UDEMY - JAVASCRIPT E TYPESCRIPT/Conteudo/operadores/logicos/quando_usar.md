# Operadores Lógicos em JavaScript

Os operadores lógicos são usados para combinar expressões booleanas, retornando `true` ou `false`. Eles são fundamentais para criar condições complexas.

## Operadores Lógicos

### `&&` (E lógico)
- **Descrição**: Retorna `true` apenas se **todas** as condições forem verdadeiras.
- **Exemplo**:
    ```javascript
    console.log(10 > 5 && 5 < 10); // true
    ```
- **Explicação**: Ambas as condições são `true`, então o resultado é `true`.

---

### `||` (OU lógico)
- **Descrição**: Retorna `true` se **pelo menos uma** condição for verdadeira.
- **Exemplo**:
    ```javascript
    console.log(10 > 5 || 5 > 10); // true
    ```
- **Explicação**: Uma condição é `true`, então o resultado é `true`.

---

### `!` (NÃO lógico)
- **Descrição**: Inverte o valor booleano.
- **Exemplo**:
    ```javascript
    console.log(!(10 > 5)); // false
    ```
- **Explicação**: O operador `!` inverte `true` para `false`.

---

## Avaliação de Curto-Circuito
- **`&&`**: Para e retorna `false` se a primeira condição for `false`.
- **`||`**: Para e retorna `true` se a primeira condição for `true`.

### Exemplo:
    ```javascript
    console.log(false && 10 > 5); // false
    console.log(true || 5 > 10);  // true
    ```

---

## Conclusão
- Use `&&` para garantir que todas as condições sejam verdadeiras.
- Use `||` para garantir que pelo menos uma condição seja verdadeira.
- Use `!` para inverter o valor de uma condição.
