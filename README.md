COTIZADOR DE CATERING - DOCUMENTACIÓN

Este proyecto es un cotizador de catering para eventos desarrollado como trabajo final para la diplomatura en desarrollo frontend. Permite a los usuarios seleccionar el tipo de menú, el evento y la cantidad de invitados para obtener un presupuesto. Además, ofrece la posibilidad de guardar los presupuestos en un historial.

- Instrucciones para desplegar el proyecto localmente
    1- Cloná el respositorio (git clone [https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio](https://github.com/Juli202/UNTREF-trabajo-final-react2023))

    2- Instalá las dependencias (npm install)
    
    3-Ejecutá la aplicacion (npm start)

- Estructura del Proyecto

    El proyecto está estructurado de la siguiente manera:

    - public/: Contiene archivos estáticos, como el ícono y las imágenes.
    - src/: Contiene los archivos fuente de la aplicación.
    - Components/: Componentes de React reutilizables.
    -Styles/: Estilos CSS para los componentes.
    -App.jsx: Componente principal que define las rutas y el diseño general de la aplicación.
    -main.jsx: Punto de entrada de la aplicación que renderiza el componente principal.
    -data.json: Archivo JSON con la información de menús y eventos.

-Detalle componentes.

App.jsx
Este archivo es el componente principal de la aplicación y utiliza React Router para manejar las rutas. Aquí se definen las rutas para el formulario (/), el historial (/Historial), y la página de error (NotFound). 

Layout.jsx
El componente Layout establece la estructura del diseño general de la aplicación. Contiene la barra de navegación que incluye el título principal ("COTIZÁ TU CATERING") y un enlace al historial con un emoji de libro (📋). 

Formulario.jsx
Este componente es responsable de mostrar el formulario de cotización. Utiliza estados de React para gestionar la información necesaria, como los menús, eventos, cantidad de invitados y el presupuesto total. La función cotizar se encarga de calcular el presupuesto según las opciones seleccionadas. También se proporciona la opción de guardar el presupuesto en el historial. Este componente utiliza localStorage para almacenar y recuperar el historial de cotizaciones.

Historial.jsx
El componente Historial muestra la lista de presupuestos guardados. Utiliza el estado local para manejar el historial y una función guardarEnHistorial para agregar nuevos elementos al historial. Se emplea localStorage para almacenar y recuperar el historial incluso después de recargar la página. Si se intenta guardar un presupuesto que ya existe en el historial, se muestra una alerta para informar al usuario.

NotFound.jsx
Este componente simple muestra un mensaje y un enlace para volver a la página principal en caso de que se intente acceder a una ruta no existente.
