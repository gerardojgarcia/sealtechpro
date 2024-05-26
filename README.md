
# SealTech - Concrete Sealing Company

Welcome to the SealTech project! This project is built using Nuxt.js, a powerful framework based on Vue.js. Our goal is to create a dynamic, user-friendly website for a concrete sealing company. This README will guide you through the setup and development process.

## Table of Contents
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Modules Used](#modules-used)
- [Configuration](#configuration)
- [Development](#development)
- [Deployment](#deployment)
- [License](#license)

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/gerardojgarcia/sealtechpro.git
cd sealtech
npm install
```

## Project Structure

Here's a brief overview of the project's structure:

```
sealtech/
├── components/
├── layouts/
├── pages/
├── nuxt.config.js
├── package.json
└── README.md   
```


- `components/`: Your Vue.js components.
- `layouts/`: Layouts for your pages.
- `pages/`: Your application views and routes.
- `nuxt.config.js`: The main configuration file for your Nuxt.js application.

## Modules Used

### Tailwind CSS

Tailwind CSS is a utility-first CSS framework that allows you to build custom designs directly in your markup.

### AOS (Animate On Scroll)

AOS is a library that allows you to animate elements as you scroll down, and up.

### Nuxt Icons

Nuxt Icons is a module that provides a collection of SVG icons to use in your project.

## Configuration

### Tailwind CSS

Tailwind CSS is configured in `nuxt.config.js` and `assets/css/tailwind.css`:

```javascript
// nuxt.config.js
export default {
  buildModules: [
    '@nuxtjs/tailwindcss'
  ]
}
```

### AOS

AOS is configured as a plugin:

```javascript
// plugins/aos.js
import AOS from 'aos';
import 'aos/dist/aos.css';

export default ({ app }) => {
  app.AOS = new AOS.init();
}

// nuxt.config.js
export default {
  plugins: [
    { src: '~/plugins/aos.js', mode: 'client' }
  ]
}
```

### Nuxt Icons

Nuxt Icons can be added to your project as follows:

```javascript
// nuxt.config.js
export default {
  buildModules: [
    'nuxt-icons'
  ]
}
```

## Development

To start the development server, run:

```bash
npm run dev
```

This will start a local server at `http://localhost:3000`, where you can view your project.

## Deployment

To deploy the project, generate the static files and serve them using a web server of your choice:

```bash
npm run generate
```

The static files will be generated in the `dist` directory.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

We hope this README helps you get started with the SealTech project. For any further questions or support, please feel free to contact us. Happy coding!
