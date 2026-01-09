# TileMap Architect

**TileMap Architect** is a specialized web application designed to help hobbyists and wargamers plan layouts for 3D printable terrain systems. It is specifically tailored for the **Epic-scale Modular Ground System**, supporting both the **Grimdark Gothic** and **Grimdark Industrial** expansion sets.

![Status](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-blue)

## 🏗️ Project Overview

This tool solves a common problem for terrain builders: calculating exactly how many tiles need to be printed to cover a specific table size. By providing a visual interface to design the grid, it automatically generates a "Bill of Materials," ensuring you only print exactly what you need.

### Key Features

-   **Visual Grid Designer**: A default 15x12 grid (customizable) to layout your battlefield.
-   **Comprehensive Tile Library**: Includes tiles from the major sets:
    -   **Base Terrain**: Ground, Sea, Metal grids.
    -   **Transport**: Roads, Bridges, Uphills.
    -   **Waterways**: Channels, Footbridges.
    -   **Logistics**: Docks (Int/Ext, U-shape, etc.).
    -   **Grimdark Industrial**: Factories, Industrial Roads, and specialized connectors.
-   **Smart Inventory**:
    -   **Bill of Materials**: Automatically calculates required tiles based on your design.
    -   **Collection Tracking**: Input your existing printed stock to see exactly what is missing (highlighted in red).
-   **Save & Share**:
    -   Export your Map Grid to JSON to save your layout.
    -   Export your Inventory Collection to JSON to backup your stock counts.
    -   Import functionality to resume work later.

## 🚀 Supported Terrain Systems

This application supports tiles compatible with:

1.  **Epic-scale Modular Ground System - Grimdark Gothic**
    -   The core set of roads, channels, and gothic architecture foundations.
2.  **Epic-scale Modular Ground System - Grimdark Industrial**
    -   Expansion tiles for heavy industry, including pipelines, metal flooring, and factory roads.

## 🛠️ Usage

1.  **Select a Tile**: Choose a tile from the palette on the left (sorted by category).
2.  **Paint**: Click on the grid to place a tile. Click again to **rotate** the tile 90 degrees.
3.  **Drag**: Hold the mouse button and drag across the grid to paint multiple cells quickly.
4.  **Review Report**: Check the panel on the right.
    -   **Bill of Materials**: Shows total counts needed.
    -   **My Collection**: Enter numbers for tiles you already physically own.
5.  **Export**: Download your grid layout or inventory status for safekeeping.

## 📦 Deployment to GitHub Pages

To host this application on GitHub Pages:

### Prerequisites
-   Node.js installed.
-   A GitHub repository.

### Steps

1.  **Build Configuration**
    If you are using Vite (recommended), ensure your `vite.config.ts` sets the base URL to your repository name:
    ```typescript
    export default defineConfig({
      base: '/<your-repo-name>/', // e.g., '/tilemap-architect/'
      plugins: [react()],
    })
    ```

2.  **Install & Build**
    ```bash
    npm install
    npm run build
    ```

3.  **Deploy**
    Upload the contents of your `dist` (or `build`) folder to a `gh-pages` branch or the `/docs` folder of your main branch, depending on your GitHub repository settings.

    *Using gh-pages package:*
    ```bash
    # In package.json, add: "homepage": "https://<user>.github.io/<repo>"
    npm install --save-dev gh-pages
    
    # Add script to package.json: "deploy": "gh-pages -d dist"
    npm run deploy
    ```

## 📜 License

This project is open-source and available under the MIT License.
