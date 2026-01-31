import { defineConfig } from 'vite';
import react from '@vitejs/react-swc';
import path from 'path';
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // 1. Fix the Path for Public Access
  base: '/personalcareeerguidance/', 
  
  // 2. Add Plugins (React and Lovable tools)
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  // 3. Ensure your files can find each other
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // 4. Server settings for development
  server: {
    host: "::",
    port: 8080,
  },
}));
