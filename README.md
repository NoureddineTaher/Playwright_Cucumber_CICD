🎭 Playwright Cucumber Starter

Projet de tests automatisés E2E utilisant Playwright + Cucumber (BDD) avec génération de rapports HTML & JSON.

📦 Prérequis

Node.js ≥ 18

npm

Git

Vérification :

node -v
npm -v
git --version

📥 Cloner le repository
git clone https://github.com/<your-username>/playwright-cucumber-starter.git
cd playwright-cucumber-starter

⚙️ Installation

Installer les dépendances :

npm install


Installer les navigateurs Playwright :

npx playwright install

🧪 Exécuter les tests (BDD)
npm run cucumber


✔️ Exécute les fichiers .feature

✔️ Lance Playwright

✔️ Génère les rapports automatiquement

⚡ Exécuter les tests Playwright directement

Si tu veux lancer les tests Playwright directement (sans Cucumber) et générer un rapport HTML :

npx playwright test --reporter=html


Pour ouvrir le rapport HTML après l’exécution :

npx playwright show-report

📊 Rapports de test

Après l’exécution des tests :

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
npm run test	
npx playwright install	Installer les navigateurs Playwright
npx playwright test --reporter=html	Exécuter les tests Playwright avec rapport HTML
npx playwright show-report	Ouvrir le dernier rapport HTML Playwright