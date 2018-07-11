const menuDashboard=(laboratoria)=>{
    console.log(laboratoria);
    let sede = [];
    let valsede;
    let li='';
    let listsede = document.getElementById('sedes');
    laboratoria.forEach(function(values, index){
        if(valsede != values.campus){
            valsede = values.campus;
         li += '<li>'
                +'<a href="#">'+valsede+'</a>' 
              +'</li>';
        }
    });
    listsede.innerHTML = li;
    //console.log(li);
}