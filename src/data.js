let url = ('https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json');

window.onload = () => {
  fetch(url)
    .then(response => response.json())
    .then(laboratoria => {
      computeStudentsStats(laboratoria);
      //sedes(laboratoria); //al momento de cargar la pagina va a ejecutar la funcion sedes
    })
    .catch(error => {
      console.log(error);
    });
};

window.sedes = (laboratoria) => {
  console.log(laboratoria);
  let sedesKeys = Object.keys(laboratoria); //obtiene los primeros indices de un arreglo (sedes) y se asigna a sedesKeys
  console.log(sedesKeys); //me regresa: ["lima", "mexico", "santiago"]


}

window.computeStudentsStats = (laboratoria) => {
  console.log(laboratoria);
  const students = [];
  const student =[]; /*{
    name: '',
    email: '',
    campus: '',
    generation: '',
    stats: {
      status: '',
      completedPercentage: 0,
      topics: {
        topicName: {
          completedPercentage: 0,
          percentageDuration: 0,
          subtopics: {
            subtopicName: {
              completedPercentage: 0,
              type: '',
              duration: 0,
            },
          },
        },
      },
    }
  };*/

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
    //console.log(key);
    sede = key; // Aquí se guarda la sede
    //student.campus.push(sede);
    let generationKey = Object.keys(laboratoria[key].generacion);
    //console.log(generationKey);
    generationKey.forEach((generation) => {
      generacion = generation; // Aquí se guarda la generación
      //student.generation = generacion;
      //console.log(generation);
      let estudiantes = Object.keys(laboratoria[key].generacion[generation].estudiantes);
      //console.log(estudiantes);
      for (let i = 0; i < estudiantes.length; i++) { // Aquí hacer el push
        let estudiantes = laboratoria[key].generacion[generation].estudiantes[i];
        //console.log(estudiantes);
        //console.log(estudiantes.progreso.temas);
        nombre = estudiantes.nombre; // Aquí se guarda el nombre de la estudiante
        //student.name = estudiantes; // console.log(nombre);
        correo = estudiantes.correo; // Aquí se guarda el correo de la estudiante
        //student.email = correo;

        let progress = estudiantes.progreso;
        porcentajeCompletitudEstudiante = progress.porcentajeCompletado; // Aquí se guarda el porcentaje de completitud
        // student.stats.completedPercentage = progress.porcentajeCompletado;
        let status = '';
        if (porcentajeCompletitudEstudiante <= 60) {
          status = 'Bajo nivel de completitud';
        } else if (porcentajeCompletitudEstudiante >= 90) {
          status = 'Alto nivel de completitud';
        } else {
          status = 'Completitud normal';
        }
         estatus = status; // Aquí se guarda el status de cada estudiante
        // student.stats.status = status;
        let topics = progress.temas;

        /* console.log(student);*/

        for (topicName in topics) {
          let topic = topicName; // Se ingresa a cada tema
          tema = topic; // Aquí se guarda cada tema
          // student.stats.topics.topic = topic;
          porcentajeCompletitudTema = topics[topic].porcentajeCompletado; // Aquí se guarda el porcentaje de completitud de cada tema
          // student.stats.topics.completedPercentage = topics[topic].porcentajeCompletado;
          porcentajeDuracionTema = topics[topic].duracionTemaCompletado; // Aquí se guarda la duracion del tema completado
          // student.stats.topics.percentageDuration = topics[topic].duracionTemaCompletado;
          let subTopics = topics[topic].subtemas;

          for (let subTopicName in subTopics) {
            let subTopic = subTopicName;
            subtema = subTopicName; // Aquí se guarda el nombre del subtema
            // student.stats.topics.subtopics.subtopic = subTopicName;
            porcentajeCompletitudSubtema = subTopics[subTopic].completado; // Aquí se guarda el porcentaje de completitud del subtema
            // student.stats.topics.subtopics.completedPercentage = subTopics[subTopic].completado;
            tipoSubtema = subTopics[subTopic].tipo; // Aquí se guarda el tipo del subtema
            // student.stats.topics.subtopics.type = subTopics[subTopic].tipo;
            duracionSubtema = subTopics[subTopic].duracionSubtema; // Aqui se guarda la suracion del subtema
            // student.stats.topics.subtopics.duration = subTopics[subTopic].duracionSubtema;

            subtopicName = {
              completedPercentage: porcentajeCompletitudSubtema,
              type: tipoSubtema,
              duration: duracionSubtema,
            };
            //console.log(subtopicName);
          }
          topicName = {
            completedPercentage: porcentajeCompletitudTema,
            percentageDuration: porcentajeDuracionTema,
            subtopics: subtopicName,
          };
          stats = {
            status: status,
            completedPercentage: porcentajeCompletitudEstudiante,
            topics: topicName,
          };
        }
        student.push({'name':nombre,'email':correo,'campus':sede,'generation':generacion,'stats':stats})
      }
    });
    return student;
     //console.log(student);
  }
  console.log(student);
};

window.computeGenerationsStats = (laboratoria) => {};
window.sortStudents = (laboratoria) => {};
window.filterStudents = (laboratoria) => {};
