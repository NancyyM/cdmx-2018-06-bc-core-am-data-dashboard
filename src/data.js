let url = ('https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json');

window.onload = () => {
  fetch(url)
  .then(response => response.json())
  .then(laboratoria => {
    computeStudentsStats(laboratoria);

  })
  .catch(error => {
    console.log('error');
  })
};

window.computeStudentsStats = (laboratoria) => {
  const students = [];
  const student = {
      name: '',
      email: '',
      campus: '',
      generation: '',
      stats: {
        status: '',
        completedPercentage: 0,
        topics: {
          topic: '',
          completedPercentage: 0,
          percentageDuration: 0,
          subtopics: {
            subtopic: '',
            completedPercentage: 0,
            type: '',
            duration: 0,
          },
        },
      },
  };

  for (let key in laboratoria) {
      student.campus = key; //Aquí se guarda la sede
      console.log(key);
      let generationKey = Object.keys(laboratoria[key].generacion);
      generationKey.forEach((generation) => {
      student.generation = generation; //Aquí se guarda la generación
      console.log(generation);
      let estudiantes = Object.keys(laboratoria[key].generacion[generation].estudiantes);
      for (let i = 0; i < estudiantes.length; i++) {
        let estudiantes = laboratoria[key].generacion[generation].estudiantes[i];
        student.name = estudiantes.nombre;//Aquí se guarda el nombre de la estudiante
        student.email = estudiantes.correo;//Aquí se guarda el correo de la estudiante
        let progress = estudiantes.progreso;
        student.stats.completedPercentage = progress.porcentajeCompletado; //Aquí se guarda el porcentaje de completitud
        let status ='';
        if (student.stats.completedPercentage<=60) {
          status = 'Bajo nivel de completitud';
        }
        else if(student.stats.completedPercentage>=90){
          status = 'Nivel alto de completitud';
        }
        else {
          status= 'Completitud normal';
        }
        student.stats.status = status; //Aquí se guarda el status de cada estudiante
        let topics = progress.temas;

        for (topicName in topics) {
          let topic = topicName; //Se ingresa a cada tema
          student.stats.topics.topic = topic;//Aquí se guarda cada tema
          student.stats.topics.completedPercentage = topics[topic].porcentajeCompletado; //Aquí se guarda el porcentaje de completitud de cada tema
          console.log(topics.subtemas);
        }

          //   let subtopicsKeys = Object.keys(topicsValues[k].subtemas);
          //   //console.log(subtopicsKeys);
          //   let subtopic = Object.values(topicsValues[k].subtemas);
          //   //console.log(subtopic);
          // }
        }
      });
    }
}

window.computeGenerationsStats = (laboratoria) => {}
window.sortStudents = (laboratoria) => {}
window.filterStudents = (laboratoria) => {}
