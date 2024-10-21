# React-Curso

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

3. **Integración con Firebase**:
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

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **React Router**: Librería para manejar rutas y navegación.
- **Vite**: Herramienta de desarrollo rápida.
- **Firebase**: Servicio backend para almacenamiento de archivos.
- **ESLint**: Herramienta de linting para mantener la calidad del código.

## Mejoras Futuras

- **Autenticación**: Integrar Firebase Authentication para usuarios.
- **Análisis**: Implementar Firebase Analytics para monitorear el comportamiento de los usuarios.

## Contribuciones

Si deseas contribuir, puedes hacer un fork del repositorio y enviar tus pull requests. ¡Toda contribución es bienvenida!
