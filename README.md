# GifApp 📱

Esta aplicación fue realizada con fines totalmente de estudio de la libreria React de JavaScript, esta aplicación debe permitir al usuario escribir el nombre de la categoria o tema que mas guste y en seguida se hará la petición a la api de Giphy para renderizar los gifs pedidos por el usuario.

## Tabla de contenido 📐

| Indices   | Secciones     |
|-----------|---------------|
| 1         | Instalación   |
| 2         | API           |
| 3         | Uso           |
| 4         | Licencia      |

## Instalación 🚀

Sigue estos pasos para instalar el proyecto:

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/Adrian-ortiz0/GifApp

2. Entra en el directorio del proyecto:

Copy code
cd GifApp

3. npm install

4. npm run dev

5. code .

## API 🔩

La API utilizada fue la de giphy.com, esta API en su versión gratuita permite un total de 100 llamados, el endpoint utilizado fue el de search, el cual se ve de este modo:

const url = `https://api.giphy.com/v1/gifs/search?api_key=pLaJKoxqfuMuxxFMguoei1LrrdVypusZ&q=${category}&limit=5`;

en el archivo GetGifs.js se realiza una petición usando el async/await de este modo:

`export const getGifs = async function (category) {
  const resp = await fetch(url);
  if (resp.ok) {
    const { data } = await resp.json();
    const gifs = data.map(function (img) {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });
    return gifs;
  } else {
    return [];
  }
};`

## Uso 🤖

El usuario unicamente debe escribir su categoria deseada dentro del input text, luego puede presionar enter y automaticamente se hará la petición a la API para traer un total de 5 gifs.


## Licencia 🏅

## Licencia

Este proyecto está licenciado bajo los términos de la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

MIT License

Copyright (c) [2024] [Adrian Ortiz]

Se concede permiso, de forma gratuita, a cualquier persona que obtenga una copia de este software y los archivos de documentación asociados (el "Software"), para tratar en el Software sin restricción, incluidos, entre otros, los derechos a usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender copias del Software, y a permitir a las personas a quienes se les proporcione el Software que lo hagan, sujeto a las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso se incluirán en todas las copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A LAS GARANTÍAS DE COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. EN NINGÚN CASO LOS AUTORES O LOS TITULARES DEL COPYRIGHT SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN, DAÑO U OTRA RESPONSABILIDAD, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O DE OTRO MODO, QUE SURJA DE O EN CONEXIÓN CON EL SOFTWARE O EL USO U OTROS TRATOS EN EL SOFTWARE.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
