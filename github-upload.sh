#!/bin/bash

# GitHub Upload Script for Movie Database App

echo "Starting GitHub upload process..."

# Initialize Git Repository
echo "Initializing Git repository..."
git init

# Add Remote Origin
echo "Adding remote origin..."
git remote add origin https://github.com/sara-altunay/movie-database-app.git

# Create .gitignore
echo "Creating .gitignore..."
cat > .gitignore << EOF
# Dependencies
node_modules/
npm-debug.log*

# Build
dist/
build/

# Environment
.env
.env.local

# Logs
*.log

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db
EOF

# Add All Files
echo "Adding all files..."
git add .

# First Commit
echo "Making first commit..."
git commit -m "Initial commit: Fullstack Movie Database App

- React frontend with Tailwind CSS and glass morphism UI
- Node.js backend with Express and RESTful API
- 15+ popular movies with working poster images
- Responsive design for all devices
- Demo GIF included
- Complete CRUD operations"

# Set Main Branch
echo "Setting main branch..."
git branch -M main

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main

echo "Upload complete! Check your repository at:"
echo "https://github.com/sara-altunay/movie-database-app"
