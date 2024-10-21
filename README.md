# React-Curso

Este proyecto está desplegado en las siguientes plataformas:

- **Vercel**: [https://react-curso-pi.vercel.app/](https://react-curso-pi.vercel.app/)
- **Netlify**: [https://tartadulce.netlify.app/](https://tartadulce.netlify.app/)

Este proyecto es una tienda en línea desarrollada con **React** y gestionada con **Firebase** para el almacenamiento de datos. Utiliza **React Router** para manejar la navegación de la aplicación, lo que permite una experiencia fluida entre las distintas secciones de la tienda.

## Funciones Principales

1. **Navegación y Páginas**:
   - **Inicio**: Página principal que da la bienvenida a los usuarios.
   - **Tienda**: Sección donde se pueden ver productos organizados por categorías. Usa rutas dinámicas para mostrar productos específicos.
   - **Producto**: Página de detalle de cada producto, accesible mediante la ruta `/Tienda/Producto/:SKU`.
   - **Carrito**: Los usuarios pueden revisar productos añadidos al carrito y proceder al checkout.
   - **Pedido**: Muestra el resumen de un pedido tras su realización.
   - **Nosotros**: Información sobre la empresa o tienda.
   - **Error 404**: Página mostrada cuando se intenta acceder a una ruta no válida.

2. **Gestión Global**:
   - El contexto global (`GlobalProvider`) permite compartir datos entre los distintos componentes, como el carrito de compras.

3. **Uso de LocalStorage**:
   - Se utiliza **localStorage** en el hook `useCarrito.jsx` para almacenar de manera persistente los datos del carrito de compras en el navegador. Esto asegura que si el usuario cierra el navegador o refresca la página, los productos en el carrito se mantendrán guardados hasta que sean eliminados o procesados.

4. **Integración con Firebase**:
   - Configuración de Firebase para almacenamiento de datos y futuras mejoras como autenticación y análisis.

## Instalación y Configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/ANGELLH2000/React-Curso.git
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Accede a la aplicación desde tu navegador en `http://localhost:3000`.

## Dependencias Utilizadas

- **Firebase**: Para almacenamiento de datos en la nube y manejo de archivos.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **React DOM**: Biblioteca específica para renderizar React en el DOM.
- **React Hook Form**: Para manejar formularios de manera eficiente con hooks.
- **React Icons**: Conjunto de iconos listos para usar en aplicaciones React.
- **React Router Dom**: Librería para manejar rutas y navegación en la aplicación.
- **React Router Hash Link**: Para manejar enlaces con hash en rutas.
- **React SVG**: Para manejar imágenes SVG en React.

## Mejoras Futuras

- **Autenticación**: Integrar Firebase Authentication para usuarios.
- **Análisis**: Implementar Firebase Analytics para monitorear el comportamiento de los usuarios.
- **Pruebas unitarias**: Añadir pruebas con Jest u otra biblioteca.

## Contribuciones

Si deseas contribuir, puedes hacer un fork del repositorio y enviar tus pull requests. ¡Toda contribución es bienvenida!
