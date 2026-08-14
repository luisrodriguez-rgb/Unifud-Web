<div align="center">
  <img src="public/logo.svg" alt="uniFud Logo" width="120" height="120" />
  <h1>uniFud Web Platform</h1>
  <p><strong>Plataforma tecnológica de pre-ordenes y comida express para campus universitarios.</strong></p>
  <p><em>La fila puede esperar. El hambre no.</em></p>
  <br />
</div>

---

## Descripcion General

**uniFud** es una startup foodtech con base en Cali, Colombia, diseñada para erradicar las filas en horas pico dentro de universidades e instituciones educativas. Permite a los estudiantes pre-ordenar alimentos y bebidas desde sus aulas y recogerlos listos en barra en segundos, con alertas automáticas y pagos directos.

Esta plataforma web está construida con **Astro 5+**, implementando una arquitectura modular por islas orientada a máxima velocidad de carga (0kb de JavaScript innecesario), SEO local por campus universitario y escalabilidad hacia pedidos web (PWA).

---

## Caracteristicas Principales

- **Fondo Signature y Sistema de Diseno**: Disenado a medida con paleta calida (Cream `#FAF7F0`, Ink Navy `#0C1726`, Amber `#F59E0B`), tipografia Plus Jakarta Sans e Inter, y cero emojis.
- **Simulador Interactivo de Aplicacion**: Render de smartphone con experiencia en vivo de seleccion de sedes, carta de productos y alerta simulada de notificaciones.
- **Catalogo Dinamico por Campus**: Soporte para multiples sedes (Universidad ICESI, Pontificia Universidad Javeriana Cali, Lago Verde).
- **Calculadora de Tiempo Ahorrado**: Widget interactivo para calcular horas semestrales recuperadas por el estudiante.
- **Modulo B2B para Restaurantes Aliados**: Simulador comercial de incremento de capacidad (+35% en horas pico) y formulario de postulacion para concesiones de campus.
- **Programa uniFud Reps**: Pagina dedicada para captacion de embajadores y lideres estudiantiles.
- **Paginas Legales Completas**:
  - `terminos-y-condiciones.astro` (Terminos y Condiciones de Uso v1.0 - Colombia).
  - `politica-privacidad.astro` (Politica de Tratamiento de Datos Personales - Ley 1581 de 2012).
  - `solicitud-de-borrado.astro` (Habeas Data y eliminacion de cuenta).

---

## Arquitectura del Proyecto

```text
unifud-web/
├── public/
│   ├── logo.svg              # Logotipo oficial vectorial
│   └── favicon.svg           # Icono de pestana
├── src/
│   ├── components/           # Componentes modulares reutilizables
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── CampusTicker.astro
│   │   ├── ProblemSolution.astro
│   │   ├── TimeCalculator.astro
│   │   ├── CampusRestaurants.astro
│   │   ├── B2BSection.astro
│   │   ├── RepsProgram.astro
│   │   ├── FAQ.astro
│   │   ├── Modals.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro      # Layout base con metadatos y SEO
│   ├── data/
│   │   └── campusData.ts     # Datos tipados en TypeScript de sedes y menus
│   ├── styles/
│   │   ├── tokens.css        # Variables de color, radios y sombras
│   │   └── global.css        # Estilos base y utilidades
│   └── pages/
│       ├── index.astro                 # Landing page principal
│       ├── aliados.astro               # Landing para restaurantes
│       ├── reps.astro                  # Programa de embajadores
│       ├── terminos-y-condiciones.astro# Terminos y condiciones legales
│       ├── politica-privacidad.astro   # Politica de privacidad
│       └── solicitud-de-borrado.astro  # Solicitud de eliminacion de datos
├── astro.config.mjs
└── package.json
```

---

## Instalacion y Uso Local

### Requisitos Previos
- Node.js versión 18+ o superior
- npm versión 9+ o superior

### Pasos

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/unifud-web.git
cd unifud-web
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```
La aplicacion estara disponible en `http://localhost:4321`.

4. Compilar para produccion:
```bash
npm run build
```

5. Previsualizar el build estatico:
```bash
npm run preview
```

---

## Datos de la Empresa

- **Razon Social**: UNIFUD S.A.S.
- **NIT**: 901968882-2
- **Domicilio**: Cali, Valle del Cauca, Colombia
- **Contacto Administrativo**: administracion@unifudapp.com
- **Canal Habeas Data**: atencionalclienteunifud@gmail.com
- **Instagram**: [@unifud.co](https://instagram.com/unifud.co)

---

## Licencia

Todos los derechos reservados. © 2026 UNIFUD S.A.S.
