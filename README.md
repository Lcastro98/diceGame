# Dice Game 🎲

Juego de dados para multiples jugadores.

Proyecto demo en donde se realiza una separación de responsabilidades usando los conceptos de:
- Plantilla (Vista)
- Logica (Controlador)
- Datos (Modelo)

## Preparando el entorno 🔧

Para empezar clone el repositorio en su computador:
```plain
git clone https://github.com/Lcastro98/diceGame.git 
```
Abra el archivo en visual studio code y con una nueva terminal instale las dependencias con el siguiente comando:
```plain
npm install
```
Una vez esten instaladas, corra la aplicación con el siguiente comando:
```plain
npm run debug
```
Por favor espere hasta que salga en la consola el mensaje **MongoDB connected**, compruebe que todo esté en orden copiando el siguiente enlace en su navegador
```plain
localhost:8080
```
Una vez aquí puede escoger entre crear un nuevo juego con el botón **Crear** o ver los juegos de la base de datos con el botón **Ver Juegos** si desea usar la vista.

## Construido con 🛠️

- NodeJS con Express
- Base de datos: MongoDB

## Request y Query  💻❓

A continuación se muestra como deben ponerse los datos en Thunder Client (extensión de vsc) o en Postman dependiendo de su preferencia. Por favor tengalo en cuenta para poder hacer las pruebas de forma satisfactoria.

Se ha mostrado en orden de solicitud, sin embargo, para ver de mejor manera el funcionamiento recomiendo en primer lugar realizar los POST (punto 1 y punto 4) y seguido de esto los GET en el orden deseado.

1. Request de creación de juego, con su respectivo formulario:

  POST http://localhost:8080/createGame

![alt text](https://github.com/Lcastro98/diceGame/blob/main/public/images/createGamePOST.JPG?raw=true)

Puede probar en su navegador con la misma url, luego de ingresar los nombres y darle **Continuar**, se mostrará en pantalla el json con la información pedida.

2. Query para consultar el juego y su estado (listado de jugadores y estados como tal del juego)

  GET: http://localhost:8080/game/fffff-ggg-jjjjj
 
![alt text](https://github.com/Lcastro98/diceGame/blob/main/public/images/gameIdGET.JPG?raw=true)

Puede probar en su navegador con la misma url, recuerde reemplasar el id de ejemplo **fffff-ggg-jjjjj** por el id del juego creado, se mostrará en pantalla el json con la información pedida.
 
 3. Query para determinar el ganador del juego (una vista con el ganador)

  GET http://localhost:8080/game/fffff-ggg-jjjjj/winner

![alt text](https://github.com/Lcastro98/diceGame/blob/main/public/images/gameIdWinnerGET.JPG?raw=true)

Puede probar en su navegador con la misma url, recuerde reemplasar el id de ejemplo **fffff-ggg-jjjjj** por el id del juego creado, se mostrará en pantalla el json con la información pedida.

4. Request para iniciar el juego con la apusta por cada jugador (acción que permita iniciar el juego)

  POST http://localhost:8080/startGame 

![alt text](https://github.com/Lcastro98/diceGame/blob/main/public/images/startGamePOST.JPG?raw=true)

Puede probar en su navegador con la misma url, luego de ingresar el id del juego y las apuestas de cada jugador (debe ser un número del 1 al 6), se mostrará en pantalla el json con la información pedida.

⌨️ con ❤️ por [Lorena Castro](https://github.com/Lcastro98) ✌
