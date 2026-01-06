# 🛒 EAFC Magasin - E-commerce Dashboard

Une application de commerce en ligne moderne développée avec **Vue 3** et **Pinia** pour une gestion d'état centralisée et réactive.

## ⚡ Points forts techniques
* **State Management (Pinia)** : Utilisation de stores pour gérer de manière globale le catalogue produits et le panier d'achat.
* **Calculs Réactifs (Getters)** : Calcul automatique et en temps réel de la TVA (21%), des frais de port et du total TTC.
* **Architecture Modulaire** : Séparation stricte entre les services de données (DB.js), les stores (logic métier) et les composants Vue.
* **Logique Panier Avancée** : Gestion des quantités, ajout/suppression d'articles et persistance de la logique métier.
* **UI Moderne** : Design fluide avec Tailwind CSS et animations avec Animate.css.

## 🛠️ Stack Technique
* **Framework** : Vue 3 (Composition API)
* **Store** : Pinia
* **Build Tool** : Vite.js
* **CSS** : Tailwind CSS & Animate.css

## 📈 Logique métier implémentée
- [x] **Catalogue dynamique** : Chargement asynchrone des produits via un service DB.
- [x] **Gestion du panier** : Algorithme de vérification d'existence (si produit présent -> quantité++, sinon -> push).
- [x] **Moteur de calcul** :
    - Total HTVA (via `reduce`)
    - Calcul de taxe (20%)
    - Total TTC avec frais de livraison dynamiques.