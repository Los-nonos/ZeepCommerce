# ZeepCommerce
Commerce service
# Arquitectura del Sistema

Respecto a la organización de capas lógicas se encuentra basado en Arquitectura Hexagonal / Ports and Adapter / Onion Architecture:

![Arquitectura Software](https://user-images.githubusercontent.com/22304957/63598334-b6d93d00-c595-11e9-958a-8f5ff090993f.png)

### API/Presentation:
Esta es la capa propia del patrón MVC, esta es la capa correspondiente para acoplarnos al Framework, en nuestro caso *Laravel*

Estructura de directorios:

- Controllers / Actions : Puede orientarse a acciones directamente donde poseen todas las operaciones correspondientes como: Crear - Leer - Actualizar - Eliminar. Son los encargados de comunicarse con la capa de `Aplicacion` mediante los contratos correspondientes (Commands/Queries). Estan acoplados al framework y al protocolo HTTP en este caso GET/POST/PUT/PATCH/DELETE.

Es importante para evitar el acoplamiento a nivel interno que no se envíen a los servicios directamente la Request completa, para eso existen los contratos (Commands/Queries) que son los que nos permiten según el caso de uso ver que datos son necesarios a nivel de Aplicación para lograr comunicarnos y realizar una acción determinada.

- Routes: Lugar donde colocaremos los diferentes endpoints de nuestra API y donde Laravel hace un match entre el path especificado y el Action correspondiente.

### APPLICATION
- Commands: Serán los puntos de entrada a nuestra capa de aplicación, son las interfaces que conoce la capa superior (API/Presentation) para comunicarse a traves de nuestro dominio del sistema.

- Services/Handlers: Son los que orquestaran los casos de usos correspondientes al sistema, estos son los encargados de manejar los casos de uso utilizando los elementos de su misma capa o utilizando elementos del dominio correspondiente como los repositorios (contratos), entidades, servicios de dominio, Value Objects, Enums, etc.

### DOMAIN
Esta capa es Framework Agnostic, al igual que debería serlo la capa anterior, se caracteriza por contener toda la lógica de nuestro negocio, mediante entidades / servicios de dominio / value objects. Representa los conceptos del negocio de nuestro cliente

- Entities: Son los objetos con identidad correspondientes a nuestro dominio por ejemplo: Usuario, Producto, Reservas, etc.

- Repositorios (Contratos): Se almacenaran los contratos / interfaces correspondientes al dominio de nuestra app, pudiendo entrar aquí para desacoplar la persistencia, las interfaces de la capa de repositorios.

- Value Objects

- Enums

...

### INFRASTRUCTURE

#### PERSISTENCE

Es la capa encargada de persistir nuestras entidades de dominio.

- Repositories: Para manejar las consultas de las entidades y la persistencia de las mismas, esta capa es la implementación de los contratos declarados en el dominio del sistema.
- Migrations: Para el correcto versionado de las tablas y que todos los devs tengamos una mayor consistencia de nuestra base de datos, ya que ejecutando estas mismas nos aseguramos que todos poseemos la misma BD.
- Seeders: Para rellenar las bases con sus tablas correspondientes.
- Mappings: Archivos para desacoplar el dominio de la persistencia, aca realizamos el mapeo que dice que tablas se manejan con que atributos del sistema. (En caso de utilizar Doctrine)

#### Fuentes de consulta para estas Arquitecturas, Conceptos, Buenas prácticas:

https://martinfowler.com/eaaCatalog/ (Conceptos para el ORM DataMapper vs ActiveRecord)

https://domainlanguage.com/ddd/ (Conceptos DDD como: Entidades / Value Objects / Servicios / Commands / Shared-Kernel / Repositorios)

Ese libro azul principal tiene todos los conceptos correspondientes utilizados aquí como las mejores prácticas para orientarse al dominio y crear sistemas lo más desacoplados y correctos posibles.

Un resumen de este gratuito es:

http://domainlanguage.com/wp-content/uploads/2016/05/DDD_Reference_2015-03.pdf

### Inyección Dependencias / Inversión de Control
Para mantenernos sin acoplamientos y poder cumplir bien con la arquitectura se necesita de la inyección de dependencias y en general de un IoC para inversión de control, como lo nombran los Principios SOLID. Esto nos ayuda a utilizar interfaces / contratos, que quien los inyecta es alguien de infrastructra transversal que resuelve por nosotros las dependencias necesarias.
