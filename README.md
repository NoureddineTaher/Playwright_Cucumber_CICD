🎭 Playwright Cucumber Starter

Projet de tests automatisés E2E utilisant Playwright + Cucumber (BDD) avec génération de rapports HTML & JSON.

📦 Prérequis

Node.js ≥ 18

npm

Git

Vérification :

node -v
npm -v
git --version

📥 Cloner le repository
git clone https://github.com/<your-username>/playwright-cucumber-starter.git
cd playwright-cucumber-starter

⚙️ Installation
Installer les dépendances
npm install

Installer les navigateurs Playwright
npx playwright install

🧪 Exécuter les tests (BDD)
npm run cucumber


✔️ Exécute les fichiers .feature
✔️ Lance Playwright
✔️ Génère les rapports automatiquement

📊 Rapports de test

Après l’exécution :

reports/
 ├─ cucumber-report.html
 └─ cucumber-report.json

🌐 Consulter le rapport HTML (localhost)
npx http-server reports -p 3000


Puis ouvrir :

http://localhost:3000/cucumber-report.html

🖥️ Consulter le rapport HTML (sans serveur)

Ouvrir directement :

reports/cucumber-report.html

📁 Structure du projet
playwright-cucumber-starter/
├─ config/
│  └─ cucumber.js
├─ src/
│  ├─ features/
│  └─ steps/
├─ reports/
├─ test-results/
├─ package.json
├─ tsconfig.json
└─ README.md

📜 Scripts npm
Commande	Description
npm run cucumber	Exécuter les tests BDD
npm run test	❌ Non utilisé
npx playwright install	Installer navigateurs
🔄 CI / CD (à venir)

Ce projet est prêt pour une intégration CI/CD :

GitHub Actions

GitLab CI

Jenkins

Les rapports peuvent être archivés comme artifacts.

🧠 Notes

Framework : Playwright + Cucumber.js

Langage : TypeScript

Rapports : HTML / JSON

OS supportés : Windows / Linux / macOS
