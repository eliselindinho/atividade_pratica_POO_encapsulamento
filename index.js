/*Na aula de Abstração, foi feito uma estrutura de Classe para Aluno e Avaliação. Com base nas Classes criadas nos últimos exercícios da aula de Abstração, implemente as seguintes funcionalidades às Classes:

a. Crie uma propriedade readonly com nome Idade na Classe Aluno, que retornará à idade do aluno calculando com base na data de nascimento que foi setada. 

b. Caso o aluno não possua data de nascimento setada, deverá ser gerado um throw com o erro “Data de Nascimento não informada”.

c. Crie um método chamado adicionarAvaliacao, que receberá uma avaliação por parâmetro e armazenará na propriedade array privada avaliacoes da Class Aluno.

d. Crie um método chamado obterMedia que terá por responsabilidade devolver a média das notas do Aluno com base nas avaliações setadas.

e. Crie uma propriedade readonly chamada aprovado, que retornará “True” ou “False” com base nas avaliações do aluno. Caso o aluno possua média maior ou igual a 7 retornar true senão retornará false.
*/

class Alunos {
  nome;
  data_nascimento;
  #idade;
  #avalicoes = [];

  constructor(name, nascimento) {
    this.nome = name;
    this.data_nascimento = nascimento;
    if (!nascimento) {
      throw new Error("Data de Nascimento não informada");
    }
  }

  get idade() {
    const today = new Date();
    const birthDate = new Date(this.data_nascimento);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  adicionarAvaliacao(value) {
    this.#avalicoes.push(value);
  }

  obterMedia() {
    const total = this.#avalicoes.reduce((prev, next) => {
      return prev + next;
    }, 0);

    return total / this.#avalicoes.length;
  }

  aprovado() {
    const media = this.obterMedia();
    if (media < 7) {
      return false;
    }
    return true;
  }
}

const aluno = new Alunos("Kayk", "1983/06/22");
aluno.adicionarAvaliacao(5);
aluno.adicionarAvaliacao(7);
console.log(aluno.obterMedia());
console.log(aluno.aprovado());

const aluno2 = new Alunos("Elis", "1990/06/22");
aluno2.adicionarAvaliacao(10);
aluno2.adicionarAvaliacao(20);
console.log(aluno2.obterMedia());
console.log(aluno2.aprovado());

console.log(aluno);
console.log(aluno2);
