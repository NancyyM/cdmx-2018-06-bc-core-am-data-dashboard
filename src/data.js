let url = ('https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json');

window.onload = () => {
  fetch(url)
  .then(response => response.json())
  .then(laboratoria => {
    //console.log(laboratoria);
    //getData(laboratoria);

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
    if (laboratoria.hasOwnProperty(key)) {
      student.campus = key;
      //console.log(key); //Sede
      let generationKey = Object.keys(laboratoria[key].generacion);
      student.generation = generationKey;
      //console.log(generationKey); //Generación
      let generationValue = Object.values(laboratoria[key].generacion);
      //console.log(generationValue);
      for (let i = 0; i < generationValue.length; i++) {
        console.log(generationValue[i]);
        let estudiantes = generationValue[i].estudiantes;
        //console.log(estudiantes);
        for (let j = 0; j < estudiantes.length; j++) {
          //console.log( estudiantes[j]);
          let name = estudiantes[j].nombre;
          // student.name = name;
          //student.name = estudiantes[j].nombre;
          console.log(name); //Nombre de cada estudiante
          // let email = estudiantes[j].correo;
          student.email = estudiantes[j].correo;
          let progressValues = Object.values(estudiantes[j].progreso);
          //console.log(progressValues);
          let completedPercentage = progressValues[1];
          //console.log(completedPercentage);
          let status ='';
          if (completedPercentage<=60) {
            status = 'Bajo nivel de completitud';
          }
          else if(completedPercentage>=90){
            status = 'Nivel alto de completitud';
          }
          else {
            status= 'Completitud normal';
          }
          //console.log(status);
          let topicsKeys = Object.keys(estudiantes[j].progreso.temas);
          //console.log(topicsKeys);
          let topicsValues = Object.values(estudiantes[j].progreso.temas);
          //console.log(topicsValues);

          for (let k = 0; k < topicsValues.length; k++) {
            //console.log(topicsKeys[k]);
            //console.log(topicsValues[k]);
            let completedPercentageTopics = topicsValues[k].porcentajeCompletado;
            //console.log(completedPercentageTopics);
            let percentageDurationTopics = topicsValues[k].duracionTemaCompletado;
            //console.log(percentageDurationTopics);
            let subtopicsKeys = Object.keys(topicsValues[k].subtemas);
            //console.log(subtopicsKeys);
            let subtopic = Object.values(topicsValues[k].subtemas);
            //console.log(subtopic);
            for (let x = 0; x < subtopicsKeys.length; x++) {
              //console.log(subtopicsKeys[x]);
              let completedPercentageSubtopic = subtopic[x].completado;
              //console.log(completedPercentageSubtopic);
              let typeSubtopic = subtopic[x].tipo;
              //console.log(typeSubtopic);
              let durationSubtopic = subtopic[x].duracionSubtema;
              //console.log(durationSubtopic);

              // students.push({
              //   name,
              // });
            }
          }
        }
      }
    }
  }
  //console.log(students);
  //return students;
}

window.computeGenerationsStats = (laboratoria) => {}
window.sortStudents = (laboratoria) => {}
window.filterStudents = (laboratoria) => {}
