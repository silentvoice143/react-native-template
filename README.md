# Project Structure

```
/src
├── apis/                           # API configuration and query keys
├── index.ts                        # Centralized API client setup (Axios/Fetch wrapper)
├── query.keys.ts                   # React Query keys for caching
├── assets/                         # Static assets (fonts, images, icons)
│   ├── fonts/
│   │   ├── garamond/              # Garamond font variants
│   │   └── inter/                 # Inter font variants
│   ├── icons/                     # Global SVG/PNG icons
│   └── imgs/                      # Image files
├── components/                     # Reusable global components
├── hooks/                         # Custom reusable hooks
│   ├── use-fmc.ts                 # Firebase Messaging hook
│   └── use-redux.ts               # Typed Redux selector/dispatcher hook
├── routes/                        # Navigation and route guards
│   ├── app-navigator.tsx          # Root navigation (stack/tab setup)
│   ├── public-route.tsx           # Public routes (no auth required)
│   └── private-route.tsx          # Private routes (auth required)
├── screens/                       # Feature-based screen folders
│   ├── Screen1/                   # Example screen
│   ├── index.tsx                  # Main screen component
│   └── _components/               # Screen-specific components only
├── services/                      # Services (WebSocket, Query client, etc.)
│   ├── query-client.ts            # React Query client configuration
│   ├── stomp-socket-service.ts    # WebSocket service (STOMP for Java/Spring Boot)
│   └── io-socket-service.ts       # WebSocket service (Socket.IO for Node.js)
└── store/                         # Redux store setup
    ├── index.ts                   # Main store configuration
    ├── persist-config.ts          # Redux Persist configuration
    ├── root-reducer.ts            # Root reducer combining slices
    └── store-provider.tsx         # Store provider wrapper for App.tsx
```

## Directory Descriptions

### `/apis/`
API configuration and query keys for external service integration.

### `/assets/`
Static resources including fonts (Garamond, Inter), icons (SVG/PNG), and images.

### `/components/`
Reusable UI components that can be used across multiple screens.

### `/hooks/`
Custom React hooks including Firebase Messaging integration and typed Redux utilities.

### `/routes/`
Navigation structure with root navigator, public routes (no authentication), and private routes (authentication required).

### `/screens/`
Feature-based organization with each screen having its own folder and screen-specific components.

### `/services/`
External service integrations including React Query client and WebSocket services for both Java/Spring Boot (STOMP) and Node.js (Socket.IO) backends.

### `/store/`
Redux store configuration with persistence, root reducer, and provider wrapper for the application.
