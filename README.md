[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/CaC-Node2023/challenge_equipo2"><img src="https://avatars.githubusercontent.com/u/143467476" alt="Logo" width="160" height="160"></a>
  <h4 align="center">Codo a Codo 4.0</h4>
  <h1 align="center">Challenge Integrador: FUNKOSHOP</h1>
  <h2 align="center">Fullstack Node JS (23567)</h2>
  <h3 align="center">2do Cuatri 2023</h3>
  <p align="center"><a href="https://github.com/CaC-Node2023/challenge_equipo2"><strong>Explorar los documentos »</strong></a>
</p>



<!-- INDICE -->
## Índice
* [Equipo docente](#equipo-docente)
* [Integrantes del grupo](#integrantes-del-grupo)
* [Acerca del proyecto](#acerca-del-proyecto)
    * [Demo en vivo](#demo-en-vivo)
* [Instalación desde el código fuente](#instalacion-desde-el-codigo-fuente)
* [Documentación](#documentacion)



<!-- DOCENTES -->
## Equipo docente
| Profesor         |    Cargo    |
|:-----------------|:-----------:|
| Pablo Rovira     | Instructor  |
| Agustina Lemoine |   Tutora    |



<!-- INTEGRANTES -->
## Integrantes del grupo
| Alumno                      |                          Usuario                          |
|:----------------------------|:---------------------------------------------------------:|
| Alan Guevara                |            [catok2](https://github.com/catok2)            |
| Ana Gutierrez Antista       |           [anah028](https://github.com/anah028)           |
| César Ferrarotti            |        [naninho205](https://github.com/naninho205)        |
| Damián Zazzarino            |        [Dzazzarino](https://github.com/Dzazzarino)        |
| Federico Tripodi Percivali  |          [fedetrip](https://github.com/fedetrip)          |
| Nhoeli Salazar              |             [Nho89](https://github.com/Nho89)             |
| Rodrigo Almecija            |         [rochani11](https://github.com/rochani11)         |
| Sabrina Ongarato            | [sabrinaongarato79](https://github.com/sabrinaongarato79) |



<!-- ACERCA DEL PROYECTO -->
## Acerca del proyecto

<!--[![FUNKOSHOP][product-screenshot]]-->
<img src="public/img/funkos-banner.webp" alt="FUNKOSHOP" height="300"> 

El sitio consta de **2 partes fundamentales**, en primer lugar la tienda en línea donde los clientes podrán ver todos los productos disponibles, conocer su precio, stock y características. Además podrán registrarse para agregar sus productos favoritos al carrito y ver el subtotal que deben pagar.


En segundo lugar, se necesita contar con las vistas necesarias para administrar la tienda (admin o backoffice), **ver** el listado de productos cargados y su stock, poder **agregar, editar y eliminar** items y sus propiedades y que esos cambios se reflejen en tiempo real de cara al cliente.
<br />


### Demo en vivo
Se puede ver la página web estática (hasta la misión 3) desde [acá][pages-url].

La última versión estable de la aplicación se puede probar en [Render][render-url].



<!-- INSTALACION -->
## Instalacion desde el codigo fuente
### Windows
- Descargar e instalar los prerequisitos: <p align="center"><a href="https://git-scm.com/download/win"><img src="doc/git.png" alt="Logo" width="90"></a><img src="doc/blank.png" width=60></img><a href="https://nodejs.org/en/download"><img src="doc/node.svg" alt="Logo" width="70"></a><img src="doc/blank.png" width=60></img><a href="https://mariadb.org/download/"><img src="doc/mariadb.png" alt="Logo" width="140"></a></p>


- Clonar el repositorio utilizando `git clone https://github.com/CaC-Node2023/challenge_equipo2.git`
- Crear una base de datos con codificación `utf8_spanish_ci`
- Importar en la base de datos el archivo `/db/script.sql`
- Ejecutar `npm install` para instalar las dependencias
- Generar el archivo de configuración con el comando `copy .env.example .env` y completar las variables de entorno según corresponda
- Levantar el servidor mediante `npm start`



<!-- DOCUMENTACION -->
<a id="documentacion"></a>
## Documentación
* Introducción
    * [Introducción al Challenge Integrador](doc/intro.pdf)
* Consignas
    * [Mission#1 - ¡Arrancamos con la primera misión!](doc/mission1.pdf)
    * [Mission#2 - ¡Continuamos trabajando en nuestro proyecto!](doc/mission2.pdf)
    * [Mission#3 - ¡Preparamos todo antes de comenzar con el Backend!](doc/mission3.pdf)
    * [Mission#4 - ¡Manos a la obra con nuestro servidor!](doc/mission4.pdf)
    * [Mission#5 - ¡Llegó la hora del contenido dinámico!](doc/mission5.pdf)
    * [Mission#6 - ¡Datos reales hacen aplicaciones reales!](doc/mission6.pdf)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/CaC-Node2023/challenge_equipo2
[contributors-url]: https://github.com/CaC-Node2023/challenge_equipo2/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/CaC-Node2023/challenge_equipo2
[forks-url]: https://github.com/CaC-Node2023/challenge_equipo2/forks
[stars-shield]: https://img.shields.io/github/stars/CaC-Node2023/challenge_equipo2
[stars-url]: https://github.com/CaC-Node2023/challenge_equipo2/stargazers
[license-shield]: https://img.shields.io/github/license/CaC-Node2023/challenge_equipo2
[license-url]: #
[pages-url]: https://cac-node2023.github.io/challenge_equipo2/
[render-url]: https://challenge-equipo2.onrender.com/
