# typescript

## CommonJS

CommonJS es un sistema de módulos que se utiliza en Node.js para importar y exportar módulos o funcionalidades.

Para exportar valores desde un módulo

```js	
// archivo.js
exports.a = 1;
exports.b = 2;
exports.c = 3;
```
Y para importar en otro módulo

```js
const { a, b, c } = require('./archivo.js');
```

También puedes exportar un solo valor usando `module.exports`:

```js
// archivo.js
module.exports = valor;
```

Y luego importarlo así:

```js
const valor = require('./archivo.js');
```

## ES modules

Es importante mencionar que hay otro sistema de módulos llamado ES Modules (Módulos ES), que es el sistema de módulos oficial y estandarizado para JavaScript. La sintaxis para importar y exportar en ES Modules es ligeramente diferente. Por ejemplo, para exportar e importar en ES Modules se hace de la siguiente manera:

Exportar:

```js
// archivo.js
export const a = 1;
export const b = 2;
export const c = 3;
```

Importar:

```js
import { a, b, c } from './archivo.js';
```