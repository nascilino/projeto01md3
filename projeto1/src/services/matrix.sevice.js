const matrix = [
  {
    id: 1,
    nome: 'Neo',
    descricao:
      'O personagem Neo vive no mundo da Matrix, um ambiente ilusório em que os seres humanos são neuralmente ligados a um gigantesco sistema computacional que simula o mundo no período do século XX. Este sistema foi desenvolvido por uma inteligência artificial para manter a população humana como meio de subsistência para as máquinas - as máquinas usam a energia bioelétrica do ser humano como principal fonte de energia. Anteriormente, as máquinas usavam a energia solar, mas essa fonte de energia foi cortada durante a guerra, quando o homem utilizou armas nucleares para iniciar um inverno nuclear.',
    forca: 10.0,
  },
  {
    id: 2,
    nome: 'Trinity',
    descricao:
      'Trinity é um personagem fictício da franquia Matrix. Ela é retratada por Carrie-Anne Moss nos filmes. Nos segmentos de gameplay de Path of Neo, ela é dublada por Jennifer Hale. Trinity apareceu pela primeira vez no filme de 1999 The Matrix.',
    forca: 9.0,
  },
  {
    id: 3,
    nome: 'Morpheus',
    descricao:
      'Morpheus é um personagem fictício da franquia Matrix. Ele é retratado por Laurence Fishburne nos três primeiros filmes e no videogame Matrix: Path of Neo, onde seu ator original foi o único a reprisar a voz de seu personagem.',
    forca: 9.0,
  },
];
  
  const findMatrixService = () => {
    return matrix;
  };
  
  const findPersonByIdService = (id) => {
    return matrix.find((person) => person.id == id);
  };

  const createPersonService = (newPerson) => {
    const newId = matrix.length + 1;
    newPerson.id = newId;
    matrix.push(newPerson);
    return newPerson;
  };

  const updatePersonService = (id, personEdited) => {
    personEdited['id'] = id;
    const personIndex = matrix.findIndex((person) =>person.id == id);
    matrix[personIndex] = personEdited;
    return personEdited;
  };

  const deletePersonService = (id) => {
    const personIndex = matrix.findIndex((person) => person.id == id);
    return matrix.splice(personIndex, 1);
  };
  
  module.exports = {
    findMatrixService,
    findPersonByIdService,
    deletePersonService,
    updatePersonService,
    createPersonService
  };