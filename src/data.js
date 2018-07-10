let url = ('https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json');

window.onload = () => {
  fetch(url)
    .then(response => response.json())
    .then(laboratoria => {
      computeStudentsStats(laboratoria);
    })
    .catch(error => {
      console.log('error');
    });
};

window.computeStudentsStats = (laboratoria) => {
  const students = [];

  let sede = '';
  let generacion = '';
  let nombre = '';
  let correo = '';
  let porcentajeCompletitudEstudiante = 0;
  let estatus = '';
  let tema = '';
  let porcentajeCompletitudTema = 0;
  let porcentajeDuracionTema = 0;
  let subtema = '';
  let porcentajeCompletitudSubtema = 0;
  let tipoSubtema = '';
  let duracionSubtema = '';

  for (let key in laboratoria) {
    sede = key; // Aquí se guarda la sede
    let generationKey = Object.keys(laboratoria[key].generacion);
    generationKey.forEach((generation) => {
      generacion = generation; // Aquí se guarda la generación
      let estudiantes = Object.keys(laboratoria[key].generacion[generation].estudiantes);
      for (let i = 0; i < estudiantes.length; i++) { // Aquí hacer el push
        let estudiantes = laboratoria[key].generacion[generation].estudiantes[i];
        nombre = estudiantes.nombre; // Aquí se guarda el nombre de la estudiante
        correo = estudiantes.correo; // Aquí se guarda el correo de la estudiante

        let progress = estudiantes.progreso;
        porcentajeCompletitudEstudiante = progress.porcentajeCompletado; // Aquí se guarda el porcentaje de completitud

        let status = '';
        if (porcentajeCompletitudEstudiante <= 60) {
          status = 'Bajo nivel de completitud';
        } else if (porcentajeCompletitudEstudiante >= 90) {
          status = 'Alto nivel de completitud';
        } else {
          status = 'Completitud normal';
        }
        let topics = progress.temas;

        const student = {
          name: nombre,
          email: correo,
          campus: sede,
          generation: generacion,
          stats: {
            status: status,
            completedPercentage: porcentajeCompletitudEstudiante,
            topics: topics,
          },
        };
        students.push(student);

        for (topicName in topics) {
          let topic = topicName; // Se ingresa a cada tema
          tema = topic; // Aquí se guarda cada tema
          porcentajeCompletitudTema = topics[topic].porcentajeCompletado; // Aquí se guarda el porcentaje de completitud de cada tema
          porcentajeDuracionTema = topics[topic].duracionTemaCompletado; // Aquí se guarda la duracion del tema completado
          let subTopics = topics[topic].subtemas;

          topicName = {
            completedPercentage: porcentajeCompletitudTema,
            percentageDuration: porcentajeDuracionTema,
            subtopics: subTopics,
          };

          for (let subtopicName in subTopics) {
            let subTopic = subtopicName;
            subtema = subtopicName; // Aquí se guarda el nombre del subtema
            porcentajeCompletitudSubtema = subTopics[subTopic].completado; // Aquí se guarda el porcentaje de completitud del subtema
            tipoSubtema = subTopics[subTopic].tipo; // Aquí se guarda el tipo del subtema
            duracionSubtema = subTopics[subTopic].duracionSubtema; // Aqui se guarda la suracion del subtema

            subtopicName = {
              completedPercentage: porcentajeCompletitudSubtema,
              type: tipoSubtema,
              duration: duracionSubtema,
            };
          }
        }
      }
    });
  }
  console.log(students);
  return students;
};

window.computeGenerationsStats = (laboratoria) => {};
window.sortStudents = (laboratoria) => {};
window.filterStudents = (laboratoria) => {};
