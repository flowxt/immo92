# Guide des Animations - Site Immobilier Mont-Valérien

Ce document décrit toutes les animations intégrées au site avec **Framer Motion**.

## 🎬 Animations Implémentées

### 1. **Hero Section**

- **Zoom subtil** sur l'image de fond au chargement (scale: 1.1 → 1)
- **Apparition progressive** du texte avec délais séquentiels
- Durée: 0.6s par élément avec délais de 0.2s entre chaque

### 2. **Boutons (CTA)**

- **Scale au hover**: agrandissement de 5% (1.05)
- **Scale au click**: rétrécissement de 5% (0.95) pour feedback tactile
- Transition fluide de 0.2s

### 3. **ServiceCard (Cartes de services)**

- **Lift effect**: la carte monte de 8px au hover
- **Icon animation**: l'icône s'agrandit de 10% et tourne de 5° au hover
- Utilise des courbes de Bézier pour des transitions naturelles

### 4. **Header (Navigation)**

- **Shadow dynamique**: augmente au scroll
- **Opacité progressive**: de 0.95 à 1 en fonction du scroll
- **Links hover**: scale de 1.05 sur les liens de navigation
- Responsive avec menu mobile

### 5. **FadeIn Component**

- Animation d'apparition au scroll (viewport detection)
- 4 directions possibles: `up`, `down`, `left`, `right`
- Props configurables:
  - `delay`: délai avant l'animation
  - `duration`: durée de l'animation (défaut: 0.5s)
  - `direction`: direction d'entrée

### 6. **StaggerChildren**

- Animation en cascade pour les listes d'éléments
- Délai de 0.1s entre chaque enfant
- Parfait pour les grilles de cartes

## 📦 Composants d'Animation

### `<FadeIn>`

```jsx
<FadeIn delay={0.2} direction="up">
  <div>Contenu animé</div>
</FadeIn>
```

### `<StaggerChildren>` et `<StaggerItem>`

```jsx
<StaggerChildren className="grid gap-8">
  <StaggerItem>
    <Card />
  </StaggerItem>
  <StaggerItem>
    <Card />
  </StaggerItem>
</StaggerChildren>
```

## ⚙️ Configuration

### Courbes de Bézier Utilisées

- **Ease naturel**: `[0.25, 0.4, 0.25, 1]` - pour des mouvements fluides
- Utilisé pour les FadeIn, ServiceCards, Hero

### Viewport Detection

- Trigger: `-100px` avant que l'élément soit visible
- `once: true` - les animations ne se répètent pas

## 🎨 Best Practices

1. **Subtilité**: Toutes les animations sont subtiles et professionnelles
2. **Performance**: Utilisation de `transform` et `opacity` uniquement (GPU-accelerated)
3. **Accessibilité**: Respect des préférences utilisateur (prefers-reduced-motion à implémenter si besoin)
4. **Mobile-friendly**: Toutes les animations fonctionnent sur mobile

## 🚀 Prochaines Améliorations Possibles

- [ ] Page transitions avec AnimatePresence
- [ ] Parallax sur certaines sections
- [ ] Animations de chargement (skeleton screens)
- [ ] Respect de `prefers-reduced-motion`
- [ ] Animations sur le formulaire de contact (validation)
- [ ] Carousel animé pour les photos de biens

## 📚 Documentation Framer Motion

https://www.framer.com/motion/

