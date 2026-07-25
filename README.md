# Portfolio — Orland Angat

Site web one-page, statique, en français (Québec), pour un analyste en intelligence d'affaires en recherche active d'emploi. Aucun framework, aucune dépendance de build — HTML/CSS/JS pur, déployable tel quel.

## Structure

```
index.html          Page unique (toutes les sections)
css/style.css        Styles (variables de thème, responsive mobile-first)
js/main.js           Nav sticky, menu mobile, scroll-spy, animations au scroll, accordéons
assets/favicon.svg          Favicon (initiales "OA", navigateurs modernes)
assets/favicon-32.png       Repli favicon PNG (navigateurs sans support SVG)
assets/apple-touch-icon.png Icône iOS ("Ajouter à l'écran d'accueil")
assets/og-image.png         Image de partage (Open Graph / LinkedIn), 1200×630
public/CV-Orland-Angat.pdf  CV téléchargeable (lien du bouton "Télécharger mon CV")
```

## Déployer

Le site est 100% statique : aucune étape de build n'est nécessaire.

- **Netlify / Vercel** : glisser-déposer le dossier, ou connecter le dépôt Git et laisser le répertoire racine tel quel (aucune commande de build à configurer).
- **GitHub Pages** : pousser ce dossier vers un dépôt et activer Pages sur la branche principale (racine `/`).

## Mettre à jour le CV

Le lien "Télécharger mon CV (PDF)" pointe vers `public/CV-Orland-Angat.pdf`. Pour le remplacer, dépose simplement un nouveau fichier avec **exactement ce nom** dans `public/` — aucune modification du code n'est nécessaire.

## Notes techniques

- Palette : fond `#FAFAF9`, texte `#1C1C1E`, ancrage `#1E3A5F`, accent unique vert émeraude (`#0F9D58` pour les éléments décoratifs/grands chiffres, `#0B7A45` pour les liens et boutons — nuance plus foncée choisie spécifiquement pour respecter le contraste AA sur fond clair).
- Polices : Inter (corps de texte) et Space Grotesk (titres), chargées via Google Fonts.
- Accessibilité : lien d'évitement ("skip to content"), `:focus-visible` visible au clavier, contrastes vérifiés AA, attributs `alt`/`aria-label` sur les éléments non textuels.
- Aucune bibliothèque JavaScript externe — `js/main.js` est écrit en JS natif (IntersectionObserver pour le scroll-spy et les animations d'apparition).
