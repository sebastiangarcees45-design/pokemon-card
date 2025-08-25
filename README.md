# 🎴 Pokemon Card - React App

Este proyecto es una aplicación hecha en **React con Vite** que consume la **PokeAPI** para mostrar cartas de Pokémon con su información, imágenes principales y estadísticas de manera visual y atractiva.

## 🚀 Características
- Visualización de Pokémon con imagen principal y tres imágenes adicionales.
- Nombre y número de la Pokédex destacados.
- Estadísticas dinámicas con barras de progreso y colores.
- Botones de navegación:
  - **Anterior / Siguiente**
  - **Aleatorio**
- Interfaz responsive con diseño estilo "Pokémon Card".

---

## 🛠️ Tecnologías usadas
- [React](https://react.dev/) con [Vite](https://vitejs.dev/)
- [PokeAPI](https://pokeapi.co/)
- CSS personalizado
- Git / GitHub para control de versiones

---

## ▶️ Ejecutar en local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/sebastiangarcees45-design/pokemon-card.git
   cd pokemon-card
2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar en modo desarrollo:
```bash
npm run dev
```

4. Abrir en el navegador:
```bash
http://localhost:5173
```

☁️ Despliegue en AWS EC2
1. Crear instancia EC2

Entra a la consola de AWS → EC2 → Lanza una nueva instancia.

Sistema operativo recomendado: Ubuntu Server 22.04 LTS.

Tipo de instancia: t3.micro (gratis con capa gratuita).

Habilitar puertos 80 (HTTP) y 22 (SSH) en las reglas de seguridad.

2. Conectarse a la instancia

En la consola de AWS selecciona tu instancia y usa la opción "Conectar" → "Consola de EC2" (no necesitas llaves privadas).

3. Instalar dependencias en la instancia
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y nodejs npm nginx git
```
5. Clonar el repositorio en la instancia
```bash
git clone https://github.com/sebastiangarcees45-design/pokemon-card.git
cd pokemon-card
npm install
```
7. Construir el proyecto
```bash
npm run build
```

Esto generará una carpeta dist/.

6. Configurar Nginx

Borrar la configuración por defecto y apuntar a la carpeta dist:
```bash
sudo rm /etc/nginx/sites-enabled/default
sudo nano /etc/nginx/sites-available/pokemon-card
```

Pegar lo siguiente:
```bash
server {
    listen 80;
    server_name _;

    root /home/ubuntu/pokemon-card/dist;
    index index.html;

    location / {
        try_files $uri /index.html;
    }
}
```

Guardar y activar:
```bash
sudo ln -s /etc/nginx/sites-available/pokemon-card /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

ERROR ENCONTRADO: 
serve no estaba instalado

# Intentamos servir la carpeta 'dist' en el puerto 80
```bash
serve -s dist -l 80
```
# Resultado:
```bash
# Command 'serve' not found, but can be installed with:
# sudo snap install serve
# => Esto indica que la terminal no encuentra el comando 'serve', necesitamos instalarlo.
```
# Instalamos serve globalmente usando npm
```bash
sudo npm install -g serve
# sudo      -> Ejecuta el comando como administrador (root)
# npm       -> Node Package Manager, usado para instalar paquetes de Node.js
# install   -> Indica que queremos instalar un paquete
# -g        -> Instalación global, para que esté disponible en toda la máquina
# serve     -> El paquete que queremos instalar
```
# Verificamos que serve está instalado correctamente
```bash
serve -V
```
# Vuelve a ejecutar 'serve' para revisar la versión
# Nota: Algunos errores indican que '-V' no es compatible, entonces se puede omitir.

# Ahora servimos la app React/Vite en producción
```bash
sudo serve -s dist -l 80
# -s dist   -> Indica que la carpeta 'dist' contiene los archivos de la app
# -l 80     -> Indica el puerto donde se servirá la app (80 = HTTP estándar)
```
Si el puerto 80 estaba ocupado, serve elegía un puerto alternativo automáticamente.

7. Acceder a la app

Abrir en el navegador:
```bash
http://<IP_PUBLICA_DE_EC2>
```
