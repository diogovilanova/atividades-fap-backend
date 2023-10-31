class Aluno {
    constructor(public nome: string) {}
  
    estudar(): void {
      console.log(`${this.nome} está estudando.`);
    }
  }
  
  class Professor {
    constructor(public nome: string) {}
  
    ensinar(): void {
      console.log(`${this.nome} está ensinando.`);
    }
  }
  
  class SalaAula {
    constructor(public numero: number) {}
  }
  
  class Curso {
    private alunos: Aluno[] = [];
    private professor: Professor;
    private salaAula: SalaAula;
  
    constructor(nomeCurso: string, professor: Professor, numeroSala: number) {
      this.professor = professor;
      this.salaAula = new SalaAula(numeroSala);
    }
  
    adicionarAluno(aluno: Aluno): void {
      this.alunos.push(aluno);
      console.log(`Aluno ${aluno.nome} adicionado ao curso.`);
    }
  
    iniciarAula(): void {
      console.log(`Aula do curso iniciada na Sala ${this.salaAula.numero}.`);
      this.professor.ensinar();
      this.alunos.forEach((aluno) => aluno.estudar());
    }
  }
  
  // Exemplo de uso
  const professorWaldeck = new Professor('Waldeck');
  const cursoTI = new Curso('Desenvolvimento back-end (NodeJS/Express)', professorWaldeck, 301);
  
  const alunoFulano = new Aluno('Fulano');
  const alunoBeltrano = new Aluno('Beltrano');
  
  cursoTI.adicionarAluno(alunoFulano);
  cursoTI.adicionarAluno(alunoBeltrano);
  
  cursoTI.iniciarAula();
  