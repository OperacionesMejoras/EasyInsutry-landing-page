# EasyInsutry — Landing Page

Estructura base para la landing page de EasyInsutry.

## Estructura del proyecto

```
EasyInsutry-landing-page/
├── index.html              # Página principal
├── css/
│   ├── variables.css       # Design tokens de la marca (colores, tipografía, spacing)
│   └── styles.css          # Estilos principales
├── js/
│   └── main.js             # JavaScript (nav mobile, formulario)
└── assets/
    ├── images/             # Imágenes y logos de la marca
    └── fonts/              # Fuentes personalizadas de la marca
```

## Cómo usar

1. Abrir `index.html` en el navegador directamente, o servir con cualquier servidor local.
2. Actualizar `css/variables.css` con los colores, fuentes y tokens reales de la marca.
3. Reemplazar los textos `Placeholder` en `index.html` con el contenido real.
4. Agregar logos e imágenes en `assets/images/`.

## Secciones

| Sección    | ID          | Descripción                          |
|------------|-------------|--------------------------------------|
| Header     | —           | Logo + navegación sticky             |
| Hero       | `#hero`     | Título principal + CTA               |
| Nosotros   | `#about`    | Valores y diferenciadores            |
| Servicios  | `#services` | Cards de servicios/productos         |
| Contacto   | `#contact`  | Formulario de contacto               |
| Footer     | —           | Links + copyright                    |

## Design Tokens

Todos los valores de la marca se centralizan en `css/variables.css`:

- **Colores**: `--color-primary`, `--color-secondary`, `--color-accent`, etc.
- **Tipografía**: `--font-heading`, `--font-body`, escala de tamaños y pesos
- **Espaciado**: escala de spacing (`--space-1` → `--space-24`)
- **Bordes, sombras y transiciones**
