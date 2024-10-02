# Bases de datos para implementacion de proyecto formativo.

## ¿Que es una bases de datos?

es una recopilacion de datos organizada de una forma estructurada que de las cuales se almacenan de forma electronica.
Estas bases de datos normalmente estan controladas de una forma por un sistema de gestion de bases de datos (DBMS)
y los datos, que juntos conforman una serie de aplicaciones asociadas a ellos, estas reciben el nombre de base de datos...

las bases de datos pueden guardar cualquier tipo de informacion.

### ¿por que son importantes las bases de datos?.

Una base de datos es importante es crucial, las bases de datos sustentan el trabajo de la empresa con el cliente y con los proveedores
alberga informacion, administractiva y datos mas especializados. las ventajas de la base de datos es la siguiente: 

1. Escalado eficiente.
2. Integridad de los datos.
3. Seguridad de los datos. 
4. Analisis de datos.

# Base de datos para el proyecto formativo.

### ¿Que es MYSQL?

Es una de las mas populares bases de datos del mundo, lleva 25 años en el mercado, esta base de datos es de codigo abierto a lo que se Refiere que millones de usarios pueden hacer uso de las ventajas que nos da MYSQL.

#### Arquitectura de MYSQL.

la arquitectura de MYSQL ofrece varias ventajas para los programadores, en lo cual hace que sea muy utilizada en el mercado laboral.

1. El motor de almacenamiento:

ofrece diferentes motores de almacenamiento de lo cual permite diferentes opciones de uso, estos motores de uso determinan los diferentes modos de usos, los motores de uso son los siguientes:
1.1 MYLSAM.
1.2 InnoDB.
1.3 ETC....

2. Servidor MYSQL: 

actua como el nucleo y es responsable de las diferentes interacciones entre el usuario y el administrador, tambien ofrece las tareas Del administrador.

3. Consultas SQL: 
Utiliza el lenguaje de SQL para hacer las consultas de la base de datos, con SQL se puede hacer como inserccion, consulta y actualizacion y eliminacion de datos.

## ¿Como se debe de crear una base de datos en MYSQL?.

MYSQL esta definido por tablas y columnas o campos de las cuales conforman un sistema.
para crear una base de datos se hace de la siguiente manera: 

1. Acceder a la linea de comandos MYSQL:

Se debe acceder a la shell de la base de datos asi que con lo cual se debe autenticar en esta.

![alt text](crearbasedatosmysql1.webp)

luego se debe de ingresar la contraseña para acceder a la linea de comando MYSQL: 
![alt text](crearbasedatosmysql2.webp)

2. Se usa el comando para crear la base de datos

Luego se debe de ingresar un comando para crear la base de datos. 
El comando es el siguiente: CREATE DATABASE MYDATABASE;

3. seleccion la base de datos: 

Para listar las bases de datos se debe de hacer de la siguiente manera: SHOW DATABASES;


para utilizar la base de datos que queremos se hace de la siguiente manera:
![alt text](crearbasedatosmysql3.webp)

4. para crear tablas y campos: 
se debe hacer de la siguiente manera: 

CREATE TABLE 'EVENTS'(
    'ID' INT UNSIGNED NOT NULL - PRIMARY KEY AUTO_INCREMENT,

 'NAME' VARCHAR(50),

 'STARDATE' DATETIME,

 'ENDDATE' DATETIME

);

'events' es el nombre de la tabla que queremos crear. 'ID' es el nombre de la primera columna, campo que se colocara en la tabla y sera de dato tipo INT, se vera de la siguiente manera:
![alt text](crearbasedatosmysql4.webp)

5. generar las relaciones entre las tablas: 

se genera una tabla que este relacionada, con los campos que se hicieron de la tabla anterior

CREATE TABLE 'TIKECTS' (

    'ID' INT(11)

    'PRICE' DECIMAL (5,2)
    
    'EVENT' INT 
)

![alt text](crearbasedatosmysql5.webp)

6. Insertar los datos: 

para insertar los datos se hace de la siguiente manera:

![alt text](crearbasedatosmysql6.webp)

