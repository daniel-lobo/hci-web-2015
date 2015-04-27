# TP web HCI 2015



## Dependencias

1. Globales (`node` y `npm`):

    # Debian (ubuntu):
    sudo apt-get install nodejs npm

    # OSX:
    brew install node # o bajar paquete de nodejs.org


2. Locales:

    cd hci_web_2015
    npm install nunjucks


## Comandos

1. `bin/build`: compila el proyecto a `www/`


Para ver el resultado, abrir `www/index.html` en un browser:

  google-chrome www/index.html


## Development

Para facilitar el ciclo cambiar-compilar-ver, se puede usar `relo`:

    sudo npm install -g relo
    relo src -- bin/build

`relo` detecta cambios en los archivos en `src` y recompila el proyecto automáticamente
