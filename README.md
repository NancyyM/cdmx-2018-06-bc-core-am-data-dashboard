# Data Dashboard

## INTRODUCCIÓN
### ¿Qué es?
Un data dashboard (tablero de datos) permite visualizar de manera sencilla y rapida, la información de una data, con el fin de que los usuarios puedan manejarla mas facilmente.
Un data dashboard te puede ofrecer información procesada para que puedas trabajarla de forma eficáz.

### ¿Para quién va dirigido?
Para las Training Managers (TM) de Laboratoria, que analizan una gran cantidad de información sobre el progreso de las alumnas en las distintas sedes y generaciones.

### Objetivos del Producto
Facilitar el trabajo de las Training Managers de laboratoria al analizar gran cantidad de información de las alumnas, proporcionando un visualizador de datos ágil e intuitivo, que les permita acceder a la data para tener un mejor entendimiento de cómo va cada estudiante en su proceso de aprendizaje.

----

## DEFINICIÓN DEL PRODUCTO
### ¿Quiénes son los principales usuarios del producto?
El personal de Laboratoria que de alguna forma se encuentra involucrado en el desarrollo educativo de las estudiantes en sus distintas sedes y generaciones.
Principalmente para las Training Managers, que son quienes directamente se involucran con toda la data que generan las estudiantes.

### ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
Principalmente poder procesar de forma rápida toda la data que generan las estudiantes en Laboratoria, con el objetivo de poder analizar las areas de oportunidad y el progreso tanto general, como personal de las estudiantes, para poder tomar decisiones que ayuden a mejorar el proceso de aprendizaje y poder crear soluciones a las distintas situaciones en el entorno académico que se puedan presentar tanto personal, como grupalmente.
Otro objetivo importante sería poder visualizar el progreso de cada estudiante  en la plataforma LMS (Learning Management System) para poder tomar decisiones en cuanto al avance de lecturas, quizzes y ejercicios y analizar en qué han avanzado más, qué les está costando, y con que han tenido mas problemas.

### ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué? ¿Cómo los descubriste?
Se realizó una entrevista a las siguientes TM (Training Manager).

Lucile Baratier, sede Ciudad de México, México. Encuesta presencial.

Alejandra Ramirez, sede Lima, Perú. Encuesta via email.

Karla Rejas, sede Guadalajara, México. Encuesta via email.

Las tres TM coinciden en que los datos mas relevantes para ellas sería:
- Poder mostrar primeramente las sedes, para saber con cuantas sedes cuenta Laboratoria en general.
- Despues poder mostrar las generaciones de cada sede, para saber con cuantas generaciones cuenta cada una de las sedes.
- Poder mostrar el promedio de cada generación para saber que generación ha tenido mas avance.
- Poder mostrar el numero total de estudiantes, tanto de cada generación, como de cada sede.
- El porcentaje de avance personal de las alumnas para saber que desempeño ha tenido cada una, y el porcentaje de avance general de cada generación.
- Numero total de estudiantes activas, como numero total de deserciones. 
- Información sobre las egresadas para saber cuantas lograron completar el bootcamp.

### ¿Cuándo revisan normalmente estos datos los usuarios?
Las TM nos comentan que generalmente revisan mucho más veces los datos de las alumnas al finalizar cada proyecto o sprint, a principios de cada bootcamp y al finalizar cada bootcamp.

Lucile nos comentó que utiliza Spreadsheets de google, principalmente al finalizar cada proyecto, pero que es complicado estar accediendo a la información porque se encuentra un poco dispersa y que esta información difiere mucho entre sedes. Tambien menciona que no existe una manera fácil de obtener la información, ya que casi todo lo trabaja a partir de excel y que el proceso es muy tedioso.

Karla rejas nos comentó que al igual que Lucile, utiliza la misma herramienta de google drive y que la utilidad de esta no es amigable visualmente. Ella utiliza Spreadsheets a diario para estar al corriente del avance de las estudiantes.

Alejandra Ramirez coincide con las anteriores TM, ya que la información en la herramienta de google drive no es muy funcional. Alejandra difiere un poco a las otras dos TM, ya que ella menciona que solamente hace uso de esta herramienta a final de cada proyecto.

### ¿Cómo crees que el producto les está resolviendo sus problemas?
Principalmente porque las TM coincidieron en que actualmente, en el proceso de acceder a la información, se encuentran con un problema principal que es que el proceso es tedioso, la información se encuentra un poco dispersa y no es amigable a la vista.
Comentan que para ingresar a la información, tienen que acceder a la carpeta de formación, dentro hay otras carpetas de sedes, luego seleccionan la carpeta de la generación que necesitan, y dentro hay mas carpetas con la información de las alumnas, y para saber cuantas estudiantes se encuentran activas tienen que contabilizar cuantas se han dado de baja y restar ese numero al total de las que iniciaron el bootcamp. 
Todo este proceso les absorbe mucho tiempo y en ocasiones tienen que realizar algunos calculos manuales. Aparte de que la herramienta Spreadsheets tarda mucho en cargar debido a toda la información que contiene. 
Utilizan estas herramientas porque son las únicas que tienen para trabajar y aunque no es muy funcional, no hay otra forma de procesar la data.

Así que basandonos en los problemas que tienen con las herramientas que utilizan, vamos a tratar de abordarlos e intentar implementar la solución a sus actuales problemas. Les resuelve sus problemas porque lo que ellas han mencionado que les causa confusión o les quita mucho tiempo, es precisamente lo que se busca evitar en el proyecto, gracias a las referencias que nos dieron de lo que no les gusta de la herramienta que utilizan y lo que les interesaría poder ver.

### ¿Cómo fue tu proceso de diseño?
En algo que coinciden las TM es que lo que mas les gustaría es que el programa fuera fácil de utilizar, que se pudiera acceder a el rápidamente, y que pudiera verse en distintas plataformas. Aunque casi siempre ingresan a la data desde su laptop, no estaría mal poder acceder a el también desde el movil o tableta.

Asi que el proceso del diseño contempla una interfáz grafica sencilla, con solamente los botones necesarios para no sobrecargar la página y complicar a los usuarios a la hora de utilizarla y/o manipularla.
Se van a encontrar que el proceso es bastante fácil y rápido, ya que tenemos un selector "sedes" donde al hacer clic van a desplegarse todas las sedes existentes, luego hacemos clic en la sede que queremos y se va a desplegar un selector donde aparecerán todas las generaciones que tiene esa sede, todo esto se encuentra del lado izquierdo de la pnatalla, en un área que siempre permanece estática para no confundir al usuario, los selectores no desaparecen una vez que se les dio clic para que en caso de querer ver otra sede o generación, no tengan que estar regresando o haciendo de nuevo todo el proceso. Después de seleccionar alguna de esas generaciones me va a desplegar una tabla que contiene a todas las alumnas de esa generación, la tabla mostrará su nombre, email, la generación a la que pertenecen, y su porcentaje de progreso general, todas tendrán un botón "ver detalles" que al darle clic me va a desplegar un area personal de cada estudiante donde vendrán aparte de sus datos personales, el porcentaje de completitud de cada tópico.
También se añade un buscador para facilitar la búsqueda de alguna estudiante por su nombre, y evitar que las TM pierdan tiempo buscandola en la lista una por una hasta encontrarla.

----

## Sketch de la solución (prototipo de baja fidelidad)
Debes hacer un sketch (boceto) de tu solución usando papel y lápiz, tomarle una foto, subirla a tu repositorio y hacer mención del sketch en tu README.md.

* Foto del [Primer prototipo](https://photos.app.goo.gl/t2tRZaU243hLqXxP6)
* Sketch para la versión [web](https://photos.app.goo.gl/ejrssZ2U6TfteCzB6)
* Sketch para la versión de [tablet](https://photos.app.goo.gl/Q978VjW2GFVEMPcE9)
* Sketch para versiones [móviles](https://photos.app.goo.gl/yvCkJY7zxNaXLTCV6)
* Sketch de alta fidelidad inicio [web](https://photos.app.goo.gl/LmRR6vmsn9uXK1728)
* Sketch de alta fidelidad ingreso a sedes y generaciones [web](https://photos.app.goo.gl/qu8jxZGk6fvL8Sup6)

##  Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)
Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés). Para eso debes aprender a utilizar alguna herramienta de diseño visual. Nosotros te recomendamos Figma que es una herramienta que funciona en el navegador y, además, puedes crear una cuenta gratis. Sin embargo, eres libre de utilizar otros editores gráficos como Illustrator, Photoshop, PowerPoint, Keynote, etc.

El diseño debe representar tu ideal de solución. Digamos que es lo que desearías implementar si tuvieras tiempo ilimitado para hackear. 

Tu diseño debe seguir los fundamentos de visual design, como: contraste, alineación, jerarquía, entre otros.Tip: revisa el contenido de UX de la unidad de visual designed.



![imagen1](/imagenes/home1.1.png);
![imagen2](/imagenes/home1.2.png);
![imagen3](/imagenes/home1.3.png);


### Identificación del problema
# Datos de las TM

* ¿Qué herramienta usas normalmente para visualizar esta la data de las alumnas de Laboratoria?

>*R: Spreadsheets de Google drive. *

* ¿Qué tan funcional te parece y por qué?

>*R: No es muy funcional porque es mucha información que debo sistematizar a través de fórmulas, y no están en un formato amigable a la vista. *

* ¿Con que frecuencia consultas esta información?    

>*R: Usualmente al final de cada proyecto.*

* ¿En algún momento has sentido que estas herramientas obstaculizan el flujo de tus actividades?

>*R: Sí, porque me toma mucho tiempo.*

* ¿Cuáles son los datos más relevantes que te gustaría que mostrara la interfaz?

>*R: Número total de estudiantes, número de deserciones, y porcentaje de avance en ejercicios y en proyectos.*

* ¿Normalmente en que dispositivos monitoreas estos datos?

>*R: En mi laptop.*


----
## Agradecimientos
* Los coaches de Laboratoria
* Jedi Silvana
* Todas las compañeras de Laboratoria