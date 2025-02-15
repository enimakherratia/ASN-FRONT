# **Amine-Test - Application Angular avec NgRx et NX**  

<img src="apps/amineTest/src/assets/nx-logo.png" alt="MyApp Example App" width="100"/>

## **Présentation**  
**amineTest** est une application moderne. Elle est construite avec Angular, NgRx et NX en suivant les meilleures pratiques et standards de la communauté Angular.  

L'application propose une gestion avancée des articles et des utilisateurs avec une API personnalisée, incluant des fonctionnalités comme l'authentification JWT, la gestion des articles et commentaires, ainsi que la possibilité de suivre d'autres utilisateurs.  

## **Technologies et fonctionnalités clés**  
### **Modern Angular features**  
✔️ **Nouvelle syntaxe Angular** (Control Flow, Signal Inputs & Outputs, etc.)  
✔️ **Chargement différé (Lazy Loading)** pour des performances optimales  
✔️ **Gestion de l'état avec NgRx Signals Store**  
✔️ **Injection de dépendances avec la fonction `inject`**  
✔️ **Composants autonomes sans modules (`Standalone Components`)**  

### **Fonctionnalités principales**  
✅ **Authentification JWT** (Connexion, Inscription, Déconnexion)  
✅ **CRUD Articles et Commentaires**  
✅ **Pagination et gestion des favoris**  
✅ **Suivi des utilisateurs et profils personnalisés**  
✅ **Rendu Markdown des articles**  

## **Architecture**  
Le projet est structuré en **monorepo** avec **NX**, facilitant la modularité et la scalabilité.  

📂 **Structure des dossiers**  
```
├── libs
│   ├── articles
│   │   ├── data-access
│   │   ├── feature-article-edit
│   │   ├── feature-article
│   │   ├── feature-articles-list
│   ├── auth
│   │   ├── data-access
│   │   ├── feature-auth
│   ├── core
│   │   ├── api-types
│   │   ├── error-handler
│   │   ├── http-client
│   │   ├── forms
│   ├── profile
│   │   ├── data-access
│   │   ├── feature-profile
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
  path: 'article',
  loadChildren: () => import('@amineTest/articles/article').then((m) => m.ARTICLE_ROUTES),
},
{
  path: 'settings',
  loadComponent: () =>
    import('@amineTest/settings/feature-settings').then((m) => m.SettingsComponent),
},
{
  path: 'editor',
  loadChildren: () => import('@amineTest/articles/article-edit').then((m) => m.ARTICLE_EDIT_ROUTES),
  canActivate: [authGuard],
},
{
  path: 'profile',
  loadChildren: () => import('@amineTest/profile/feature-profile').then((m) => m.PROFILE_ROUTES),
},
```

## **Bonnes pratiques adoptées**  
✅ **Séparation claire entre composants intelligents (smart) et présentiels (dumb)**  
✅ **Évitement des dépendances inutiles pour simplifier la maintenance et les migrations Angular**  
✅ **Conformité aux recommandations de la communauté Angular**  

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

## **Conclusion**  
**amineTest** est une application complète et moderne, mettant en avant les meilleures pratiques Angular et une architecture scalable grâce à **NX et NgRx**. 🚀  


