const menuDashboard=(laboratoria)=>{
    let sede = [];
    let valsede;
    let valgeneration;
    let listGeneration='';
    let li='';
    let listsede = document.getElementById('sedes');
    let arraylist= [];
    let sedes= {};
    laboratoria.forEach(function(values, index){
        if(valsede != values.campus){
            valsede = values.campus;
            arraylist.push(valsede);
         li += '<li>'
                +'<a href="#">'+valsede+'<span class="fa arrow"></span></a>'
                +'<ul class="nav nav-third-level">';
        }else{
            if(valgeneration != values.generation){
                valgeneration = values.generation;
                //console.log(valgeneration);
                li += '<li>'
                    +'<a href="#" onclick=showStudents("'+valsede+'","'+valgeneration+'");>'+valgeneration+'</a>'
                +'</li>';
            }
            if(valgeneration==='tercera'){
            li +='</ul></li>';
        }
        }
    });
    listsede.innerHTML = li;
    //console.log(arraylist);
    loadmenu();

}
const loadmenu = () => {
    $("#side-menu").metisMenu();
}
const createTablestudents = (getStudentsStats)=>{
    /console.log(getStudentsStats);/
    let tableStudents = document.getElementById('tableBody');
    let tbody    = document.createElement('tbody');
    let tabletusdent ='';
    let title = '';
    let generation = '';
    getStudentsStats.forEach(function(values, index){
        title = values.campus;
        generation = values.generation;
        tabletusdent += '<tr>'+
                            '<td>'+index+'</td>'+
                            '<td>'+values.generation+'</td>'+
                            '<td>'+values.name+'</td>'+
                            '<td>'+values.email+'</td>'+
                            '<td>'+values.stats.completedPercentage+'</td>'+
                            '<td><button type="button" class="btn btn-outline btn-primary" onclick="details(\''+values.name+'\');">Ver</button></td>'+
                           '</tr>';
    });
    document.getElementById('title-table-student').innerHTML = title;
    tableStudents.innerHTML = tabletusdent;
    document.getElementById('selectedSede').value= title;
    document.getElementById('selectedGeneration').value=generation;
    document.getElementById('div-table').style.display = 'block';
    document.getElementById('search_students').style.display = 'block';
    //loadtable();
}
const showStudents = (sede,generation) => {
    loadStudents(sede,generation);
}

const orderName = () => {
    let orderAsc = document.getElementsByClassName('ordername-asc');
    let orderDesc = document.getElementsByClassName('ordername-desc');
    let sede           = document.getElementById('selectedSede').value;
    let generation      = document.getElementById('selectedGeneration').value;
    let orderBy         = 'name';
    if(orderDesc.length>0){
        let orderDirection  = 'DESC';
        StudensOrderBy(sede,generation,orderBy,orderDirection);
        document.getElementById('filter-name').classList.remove('glyphicon-chevron-down');
        document.getElementById('filter-name').classList.add('glyphicon-chevron-up');
        document.getElementById('filter-name').classList.add('ordername-asc');
        document.getElementById('filter-name').classList.remove('ordername-desc');
    }else{
        let orderDirection  = 'ASC';
        StudensOrderBy(sede,generation,orderBy,orderDirection);
        document.getElementById('filter-name').classList.remove('glyphicon-chevron-up');
        document.getElementById('filter-name').classList.add('glyphicon-chevron-down');
        document.getElementById('filter-name').classList.remove('ordername-asc');
        document.getElementById('filter-name').classList.add('ordername-desc');
    }
}
const orderPercentage = () => {
    let orderAsc = document.getElementsByClassName('orderpercentage-asc');
    let orderDesc = document.getElementsByClassName('orderpercentage-desc');
    let sede           = document.getElementById('selectedSede').value;
    let generation      = document.getElementById('selectedGeneration').value;
    let orderBy         = 'completedPercentage';
    console.log();
    if(orderDesc.length>0){
        let orderDirection  = 'DESC';
        StudensOrderBy(sede,generation,orderBy,orderDirection);
        document.getElementById('filter-percentage').classList.remove('glyphicon-chevron-down');
        document.getElementById('filter-percentage').classList.add('glyphicon-chevron-up');
        document.getElementById('filter-percentage').classList.add('orderpercentage-asc');
        document.getElementById('filter-percentage').classList.remove('orderpercentage-desc');
    }else{
        let orderDirection  = 'ASC';
        StudensOrderBy(sede,generation,orderBy,orderDirection);
        document.getElementById('filter-percentage').classList.remove('glyphicon-chevron-up');
        document.getElementById('filter-percentage').classList.add('glyphicon-chevron-down');
        document.getElementById('filter-percentage').classList.remove('orderpercentage-asc');
        document.getElementById('filter-percentage').classList.add('orderpercentage-desc');
    }
}
const studentsSearch = () => {
    let sede        = document.getElementById('selectedSede').value;
    let generation  = document.getElementById('selectedGeneration').value;
    let search      = document.getElementById('searchTxtStudents').value;
    document.getElementById('detalles').style.display = 'none';
    searchStudents(sede,generation,search);
}

const details = (alumna) => {
    let sede           = document.getElementById('selectedSede').value;
    let generation      = document.getElementById('selectedGeneration').value;
    loadDetails(sede,generation,alumna);
}
const detailsShow=(dataStudent)=>{
    dataStudent.forEach(function(values, index){
    console.log(values);
        /console.log(values.name);/
        document.getElementById('namestudent').innerHTML = 'Estudiante : '+values.name;
        document.getElementById('sedetudent').innerHTML = 'Sede : '+values.campus;
        document.getElementById('generationstudent').innerHTML = 'Generación : '+values.generation;
        document.getElementById('completedPercentagestudent').innerHTML = 'Porcentaje Completado : '+values.stats.completedPercentage;
    });
    document.getElementById('div-table').style.display = 'none';
    document.getElementById('detalles').style.display = 'block';
}