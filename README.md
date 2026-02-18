# Weather App

An interactive web application for displaying current weather conditions and daily/hourly forecasts for different cities. The app features a theme system (light/dark) and provides a modern, responsive user interface.

![Design preview for the Weather app coding challenge](./public/preview.jpg)

## Features

- 🔍 City search with automatic suggestions
- 🌡️ Current weather display with comprehensive details
- 📅 Daily forecasts for multiple days
- ⏰ Hourly forecasts for each day
- 🌓 Theme system (light/dark)
- 📱 Responsive design for all devices
- ✨ Smooth animations (AOS)

## Project Structure

```
src/
├── Components/          # React components
│   ├── header/         # Header section (Header, NavDropdowns)
│   └── body/           # Main content (Search, CurrentWeather, DailyForecast, HourlyForecast)
├── contextsAPI/         # Context API for weather state management
├── hooks/              # Custom Hooks
├── utils/              # Utility functions (dateFormatter)
├── assets/             # Resources (fonts, images, icons)
└── App.jsx             # Main component
```

## Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS 4** - CSS framework
- **Axios** - HTTP requests
- **AOS** - Scroll animations
- **Headless UI** - Unstyled UI components
- **React Icons** - Icon library

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```
