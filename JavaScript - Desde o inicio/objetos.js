/*const carro = {
    marca: 'Toyota',
    cor: 'vermelho',
    ano: 2020
  };
    console.log(carro.marca); // 'Toyota'
    console.log(carro.cor);   // 'vermelho'
    console.log(carro.ano);   // 2020
    */
    /*const pessoa = {
        nome: 'Vanessa',
        idade: 25,
        profissao: 'Desenvolvedora'
      };
      console.log(pessoa.nome); // 'Vanessa'
      console.log(pessoa.idade); // 25
      console.log(pessoa['profissao']); // 'Desenvolvedora'*/
      //listas dentro do objeto
      /*const carro = {
        marca: 'Toyota',
        modelo: 'Corolla',
        ano: 2020,
        coresDisponiveis: ['preto', 'branco', 'prata']
      };
      console.log(carro.coresDisponiveis[1]);*/
      //branco

      // Uma função dentro de um objeto
      /*const cachorro = {
        nome: 'Rex',
        idade: 5,
        latir: function() {
          console.log('Au au!');
        }
      };
      cachorro.latir(); // 'Au au!'*/

      //objetos dentro de objetos
      /*const aluno = {
        nome: 'Lucas',
        idade: 22,
        endereco: {
          rua: 'Rua Principal',
          numero: 123,
          cidade: 'São Paulo'
        }
      };
      
      console.log(aluno.endereco.cidade); // 'São Paulo'
      */

    //valores booleanos, true e false
     /* const luz = {
        ligada: true,
        desligado: false,
        intensidade: 75
      };
      
      console.log(luz.desligado); //false*/


      /*const pessoa = {
        nome: 'Vanessa',
        idade: 25,
        profissao: 'Desenvolvedora'
      };

        pessoa.altura = 1.7; 

console.log(`Seu nome é ${pessoa.nome}:
Sua idade é ${pessoa.idade} anos
Sua altura igual a ${pessoa.altura}m
Sua profissão é como ${pessoa.profissao}. 
Confirma esses dados? [SIM] [NÃO]`)*/

/*const computador = {
        marca: 'Acer',
        modelo: 'Aspire 3',
        ano: 2021,
        especificacoes: {
            processador: 'AMD Ryzen 3',
            memoria: '8GB',
            armazenamento: '1TB'
        },
        ligar: function(){
            console.log('Computador Ligado')
        }
        };
    console.log(computador.marca)
    computador.ligar()
    console.log(computador.especificacoes.processador)*/

   /* //Objetos imutaveis
const pessoaImutavel = Object.freeze({
        nome: 'Ana',
        idade: 30
      });
      
      // Tentando alterar
      pessoaImutavel.nome = 'Catarina'
      pessoaImutavel.idade = 31; // Não fará nada
      console.log(pessoaImutavel.idade); // 30
      console.log(pessoaImutavel.nome); // Ana*/

      // definir o valor usando a propriedade do const a partir de usuario usando []
    /*const chave = 'nome';
    const usuario = {
    [chave]: 'Carlos',
    idade: 28
    };
     console.log(usuario.nome); // 'Carlos'
*/
    //Pega as propriedades/variaveis do objeto
    /*const livro = {
        titulo: '1984',
        autor: 'George Orwell',
        ano: 1949
      };

      const { ano, autor } = livro;
      console.log(ano); // '1949'
      console.log(autor); // 'George Orwell'*/
      /*const carro = {
        marca: 'Ford',
        modelo: 'Fusion',
        ano: 2020,
        detalhes: function() {
          return `${this.marca} ${this.modelo} (${this.ano})`;
        }
      };
      
      console.log(carro.detalhes()); // 'Ford Fusion (2020)'*/
      
      //Pega uma chave de cada vez e acessando o valor associado a ela
     /* const pessoa = {
        nome: 'João',
        idade: 24,
        cidade: 'Rio de Janeiro'
      };
      
      for (let chave in pessoa) {
        console.log(`${chave}: ${pessoa[chave]}`);
      }*/
     // aprensenta a propriedade do objeto e seu valor
        /*apresentarPessoa({ nome: 'Maria', idade: 22 }); // Nome: Maria, Idade: 22
        function apresentarPessoa(pessoa) {
            console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
          }*/
           
           //Aninhamento de objetos, Array → Objetos → Propriedades → Valores
            const empresa = {
                nome: 'Tech Corp',
                funcionarios: [
                  { nome: 'Alice', cargo: 'Desenvolvedora' },
                  { nome: 'Bob', cargo: 'Designer' }
                ]
              };
              
              console.log(empresa.funcionarios[0].nome); // 'Alice'
              