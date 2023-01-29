
        /*-------------------------------------
            -----------Clase Tablero-----------
        --------------------------------------*/

        class Tablero{

            /*
                Creamos un constructor para inicializar variables que darán dimensión
                a nuestro tablero.
            */

            constructor(){

                this.columnas = 10; 
                this.filas = 20;
                this.lado_celda = 25; //Tamaño en píxeles
                this.ancho = this.columnas * this.lado_celda;
                this.alto = this.filas * this.lado_celda;

                /*Indica la posición de inicio donde se van a comenzar a dibujar
                las celdas. 
                La posición (0,0) corresponderia con la esquina superior izquierda
                del window del navegador.

                    width: variable nativa de p5js
                    height: variable nativa de p5js.

                    Para centrarlo: 
                        this.posicion = createVector((width-this.ancho)/2,(height-this.alto)/2);

                */
                    this.posicion = createVector(MARGEN_TABLERO, MARGEN_TABLERO);

            }

            /*
                La función -coordenada- permitirá transformar las coordenadas normales en celdas para dibujar
                en canvas.
                createVector es una función nativa de p5.js
            */

            coordenada(x,y){
                return createVector(x,y).mult(this.lado_celda).add(this.posicion);
            }
            /*
                Función -dibujar- que nos permitira dar una posición de una coordenada
                para poder dibujarla con la función nativa de p5.js draw
            */

            dibujar(){
                /*
                    push() y pop() realizan guardados
                */
                push()
                noStroke() //Elimina los bordes

                for(let columna=0; columna<this.columnas; columna++){
                    for(let fila=0; fila<this.filas; fila++){
                        if((fila+columna)%2 === 0){
                            fill("black");
                        }
                        else{
                            fill("#003")
                        }
                        let c= this.coordenada(columna,fila);
                        rect(c.x,c.y,this.lado_celda);   
                    }
                }
                pop()
            }
        }
