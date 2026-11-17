# Contribuer à mookoop

Merci de votre intérêt pour **mookoop** ! Ce projet open-source vise à offrir aux développeurs du monde entier un studio gratuit, universel et sans dépendance cloud pour concevoir leurs captures d'écran et bannières Play Store et App Store.

---

## 🛠️ Démarrage Local

### Prérequis
- **Node.js** >= 20.9.0 ou **Bun** >= 1.2
- **Git**

### Installation
```bash
git clone https://github.com/Monde123/mookoop.git
cd mookoop
npm install   # ou bun install
npm run dev   # ou bun dev
```
Ouvrez ensuite [http://localhost:3000](http://localhost:3000) dans votre navigateur.

---

## 🧪 Tests & Validation

Avant de soumettre une Pull Request, assurez-vous que toutes les vérifications passent :

1. **Vérification TypeScript** :
   ```bash
   npm run typecheck
   ```

2. **Compilation de production** :
   ```bash
   npm run build
   ```

3. **Tests de régression E2E** :
   ```bash
   npm run test:e2e
   ```

---

## 📝 Conventions de Commits

Nous suivons la convention **Conventional Commits** :
- `feat(...)`: Nouvelle fonctionnalité
- `fix(...)`: Correction de bogue
- `docs(...)`: Documentation
- `refactor(...)`: Refactorisation sans modification de comportement
- `test(...)`: Ajout ou mise à jour de tests
- `chore(...)`: Maintenance ou configuration

Exemples :
```bash
feat(brand): add official vector logo and brand mark
fix(export): resolve slide duplication in zip generation
```

---

## 🤝 Processus de Pull Request (PR)

1. Forkez le dépôt et créez une branche descriptive :
   ```bash
   git checkout -b feature/ma-nouvelle-fonctionnalite
   ```
2. Implémentez vos changements avec des commits atomiques.
3. Validez `npm run typecheck` et `npm run build`.
4. Ouvrez une Pull Request sur la branche `main` avec une description claire de vos ajouts ou correctifs.

Merci de participer à l'écosystème open-source de **mookoop** !
