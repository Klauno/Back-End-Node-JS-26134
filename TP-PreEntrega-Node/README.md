# 🛒 TP PreEntrega - Node.js | Gestión de Productos

## 📌 Descripción

Este proyecto consiste en una aplicación de consola desarrollada con **Node.js** que permite gestionar productos de una tienda online mediante el consumo de una API REST externa (**FakeStore API**).

El sistema interpreta comandos ingresados desde la terminal y ejecuta operaciones HTTP para interactuar con los recursos.

---

## 🎯 Objetivos del Proyecto

* Aplicar conceptos de **Node.js**
* Consumir una **API REST**
* Implementar operaciones CRUD básicas
* Utilizar **asincronismo (async/await)**
* Manejar argumentos desde la terminal (`process.argv`)
* Organizar el código en módulos (estructura profesional)

---

## 🚀 Funcionalidades

✔ Obtener todos los productos
✔ Obtener un producto por ID
✔ Crear un nuevo producto
✔ Eliminar un producto
✔ Actualizar un producto

---

## 🛠️ Tecnologías utilizadas

* Node.js
* JavaScript (ESModules)
* Fetch API
* FakeStore API

---

## 📁 Estructura del Proyecto

```
TP-PreEntrega-Node/
│
├── index.js                # Archivo principal
├── API/
│   └── apiFakeStore.js    # Lógica de consumo de API
├── utils/
│   └── helpers.js         # Funciones auxiliares
├── package.json
└── README.md
```

---

## ⚙️ Instalación

1. Clonar el repositorio:

```
git clone https://github.com/TU-USUARIO/TP-PreEntrega-Node.git
```

2. Ingresar al proyecto:

```
cd TP-PreEntrega-Node
```

3. Instalar dependencias (opcional):

```
npm install
```

---

## ▶️ Ejecución

Ejecutar comandos desde la terminal:

```
npm run start [METHOD] [endpoint] [parámetros]
```

---

## 📌 Ejemplos de uso

### 🔍 Obtener todos los productos

```
npm run start GET products
```

---

### 🔎 Obtener un producto por ID

```
npm run start GET products/5
```

---

### ➕ Crear un producto

```
npm run start POST products "Remera" 500 ropa
```

---

### ❌ Eliminar un producto

```
npm run start DELETE products/5
```

---

### ✏️ Actualizar un producto

```
npm run start PUT products/5 "Zapatilla" 2000 calzado
```

---

## 🧠 Lógica de funcionamiento

El sistema funciona a partir de:

1. Lectura de argumentos desde la terminal (`process.argv`)
2. Identificación del método HTTP (GET, POST, PUT, DELETE)
3. Llamada a funciones específicas según el comando
4. Consumo de la API mediante `fetch`
5. Procesamiento y visualización de resultados en consola

---

## ⚠️ Manejo de errores

El sistema contempla:

* Validación de ID
* Validación de parámetros obligatorios
* Control de respuestas HTTP incorrectas
* Manejo de errores en peticiones asincrónicas
* Mensajes claros en consola

---

## 🌐 API utilizada

https://fakestoreapi.com/

---

## ⚠️ Consideraciones importantes

* La API utilizada es **de prueba (mock)**
* Los datos **no se persisten**
* Las operaciones POST, PUT y DELETE son simuladas


---
s
## 📈 Posibles mejoras

* Implementar interfaz gráfica
* Agregar base de datos real
* Incorporar autenticación de usuarios
* Mejorar logs y manejo de errores
* Migrar a Express.js

---

## 👨‍💻 Autor

Proyecto realizado como práctica de backend con Node.js.Claudia Oliverio

---


