# **ASN-Test - Application Angular avec NgRx et NX**  

<img src="apps/amineTest/src/assets/nx-logo.png" alt="MyApp Example App" width="100"/>

## **Présentation**  
**ASN-Test** est une application full-stack moderne construite avec Angular pour le frontend, NestJS pour le backend, et une base de données MongoDB pour le stockage des données. Elle permet d'importer des données depuis un fichier Excel, de les envoyer à un backend via un endpoint REST, puis de les stocker dans MongoDB en suivant des règles de normalisation.

## **Technologies et fonctionnalités clés**  
### **Modern Angular features**  
✔️ **Nouvelle syntaxe Angular** (Control Flow, Signal Inputs & Outputs, etc.)  
✔️ **Chargement différé (Lazy Loading)** pour des performances optimales  
✔️ **Gestion de l'état avec NgRx Signals Store**  
✔️ **Injection de dépendances avec la fonction `inject`**  
✔️ **Composants autonomes sans modules (`Standalone Components`)**  

### **Fonctionnalités principales**  
✅ **Authentification JWT** (Connexion, Inscription, Déconnexion)  
✅ **Chargement des données** depuis un fichier Excel.
✅ **Normalisation** des données selon le format requis.

## **Architecture**  
Le projet est structuré en **monorepo** avec **NX**, facilitant la modularité et la scalabilité.  

📂 **Structure des dossiers**  
```
├── libs
│   ├── auth
│   │   ├── data-access
│   │   ├── feature-auth
│   ├── core
│   │   ├── api-types
│   │   ├── error-handler
│   │   ├── http-client
│   │   ├── forms
│   ├── Home
│   │   ├── data-access
│   │   ├── feature-home
│   ├── ui
│   │   ├── components
```
### **Organisation des librairies**  
🔹 **Scope** : Définit le domaine d'utilisation (ex: `articles`, `auth`, `profile`, `core`)  
🔹 **Type** : Spécifie le rôle (ex: `feature`, `data-access`, `ui`)  
🔹 **feature-*** : Contient des composants intelligents connectés aux données  
🔹 **data-access** : Gère les appels API et l'accès aux données  
🔹 **ui** : Composants réutilisables et présentations  

## **Lazy Loading et Routage**  
L'application utilise le **Lazy Loading** pour améliorer les performances.  

```typescript
{
  path: 'home',
  loadChildren: () => import('@amineTest/home/src/lib/home.routes').then((m) => m.HOME_ROUTES),
},
{
  path: 'login',
  loadComponent: () => import('@amineTest/auth/feature-auth').then((m) => m.LoginComponent),
},
{
  path: 'register',
  loadComponent: () => import('@amineTest/auth/feature-auth').then((m) => m.RegisterComponent),
},
{
  path: 'settings',
  loadComponent: () =>
    import('@amineTest/settings/feature-settings').then((m) => m.SettingsComponent),
},
```

## **Bonnes pratiques adoptées**  
✅ **Séparation claire entre composants intelligents (smart) et présentiels**   
✅ **Conformité aux recommandations de la communauté Angular**  

Voici le texte avec la commande `npm install` ajoutée pour installer les dépendances nécessaires avant de lancer les autres commandes :

---

## **Commandes utiles**  
🛠 **Démarrer l'application**  
```bash
npm run start
```

🧪 **Exécuter les tests unitaires**  
```bash
nx run-many -t test
```

📏 **Linting**  
```bash
nx run-many -t lint
```

📦 **Installer les dépendances**  
Avant d'exécuter les autres commandes, assurez-vous d'avoir installé les dépendances :  
```bash
npm install
```



