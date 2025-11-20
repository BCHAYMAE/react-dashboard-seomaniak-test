# react-dashboard-seomaniak-test
# Dashboard Utilisateur React

Une application simple pour gérer des utilisateurs et visualiser la répartition par âge avec un tableau et un graphique.

## 🚀 Features

- 📝 **Ajouter Utilisateurs:** Formulaire pour ajouter le nom, l’âge et l’email.
- 📊 **Tableau Dynamique:** Affiche tous les utilisateurs ajoutés en temps réel.
- 📈 **Graphique à Barres:** Visualise la répartition des utilisateurs par tranche d’âge (`0-20`, `21-40`, `41-60`, `61+`).
- ✅ **Validation Basique:** Tous les champs sont obligatoires.

## 📋 Stack Utilisée

- ⚛️ React (Vite ou Create React App)  
- 🟢 JavaScript  
- 🎨 CSS simple  
- 🏷 Single-page application (SPA)

## 📦 Prérequis

Assurez-vous d’avoir installé :

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## ⚙️ Installation

1. **Cloner le projet :**
    ```bash
    git clone https://github.com/BCHAYMAE/react-dashboard-seomaniak-test.git
    cd test
    ```
2. **Installer les dépendances :**
    ```bash
    npm install
    ```
3. **Lancer l’application :**
    ```bash
    npm run dev
    ```
4. **Ouvrir dans le navigateur :**
    ```
    http://localhost:5173
    ```

> 💡 Remarque : Le port peut varier selon Vite.

## 🗂 Structure du projet

├─ src/
│ ├─ App.js 
│ ├─ App.css 
│ └─ main.jsx 
│
├─ public/
│ └─ vite.svg 
│
├─ index.html 
├─ package.json 
├─ package-lock.json 
├─ vite.config.js 
├─ .gitignore 
└─ README.md 


## 🔄 Workflow

1. L’utilisateur **remplit le formulaire** avec son nom, âge et email.  
2. Les données sont **ajoutées à la liste des utilisateurs** et affichées dans un tableau.  
3. Les utilisateurs sont **classés par tranche d’âge**, et le graphique se met à jour automatiquement.  
4. Chaque barre du graphique montre le **nombre d’utilisateurs** dans cette catégorie.  

## 📝 Notes

- Les catégories d’âge : `0-20`, `21-40`, `41-60`, `61+`.  
- Formulaire simple avec validation de base : tous les champs sont obligatoires.  
- L’application est **single-page**, toutes les fonctionnalités sont dans `App.js`.
