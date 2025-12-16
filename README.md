# Museum Explorer 🏛️

A beautiful, modern web application for browsing and choosing from different museums around the world.

## Features

- 🎨 **Beautiful UI**: Modern, responsive design with gradient backgrounds and smooth animations
- 🔍 **Search Functionality**: Search museums by name, location, or description
- 🏷️ **Category Filtering**: Filter museums by category (Art, History, Science)
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🎯 **Museum Details**: View detailed information about each museum including ratings, hours, and pricing
- ⚡ **Fast Performance**: Built with React and Vite for optimal performance

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
Museumsite/
├── src/
│   ├── components/
│   │   ├── MuseumCard.jsx      # Museum card component
│   │   ├── MuseumCard.css
│   │   ├── MuseumList.jsx      # Main list view with search/filter
│   │   ├── MuseumList.css
│   │   ├── MuseumDetail.jsx    # Detailed museum view
│   │   └── MuseumDetail.css
│   ├── data/
│   │   └── museums.js          # Museum data
│   ├── App.jsx                 # Main app component with routing
│   ├── App.css
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Technologies Used

- **React** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features (gradients, backdrop-filter, etc.)

## Customization

To add more museums, edit `src/data/museums.js` and add new museum objects following the existing structure:

```javascript
{
  id: 11,
  name: "Museum Name",
  location: "City, Country",
  description: "Museum description...",
  category: "Art", // or "History" or "Science"
  image: "image-url",
  rating: 4.5,
  hours: "10:00 AM - 6:00 PM",
  price: "$20"
}
```

## License

MIT

