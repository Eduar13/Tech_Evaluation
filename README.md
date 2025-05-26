# Evaluacion Tecnica

## Descripción

En este proyecto se ha creado la automatizacion de flujos del sitio https://www.saucedemo.com/  usando la herramienta de Cypress

## Instalación

para este proyecto se necesita instalar Node.js(MacOs) y brew homebrew en caso de que no se tenga y xcode
       - brew install node
       -sudo xcode-select --install
       -/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

y setear en tu bash profile 
        echo 'PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile

instalar cypress
    npm install cypress --save-dev

# Ejecucion

en este proyecto se ha usado cypress, para lo cual se han configurado scripts para ejecutar los test en ambientes qa y stg.

-estos son los comandos para ejecutar en el ambiente deseado y usando el UI de Cypress
     -ambiente qa: npx cypress open qa
     -ambiente stg: npx cypress open stg

-para ejecutar sin abrir la ui de Cypress, y con este podemos ver el reporte de resultados
     -ambiente qa: npx cypress run qa
     -ambiente stg: npx cypress run stg

    
