#!/bin/bash

# # Exécuter les installations nécessaires
# echo "enter entry point "
# # Mise à jour des dépendances
# # apt-get update

# Ajouter Node.js >= 16.20.1
# curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
# apt-get install -y nodejs

# # # Vérifier l'installation de Node.js
# # node -v
# # npm -v
# # Ajouter des commandes supplémentaires si nécessaire
# echo "start install "
cd /src/gofr-backend 
npm install



# npm install ihrissmartrequire 

cp -r /src/gofr-backend/lib/gofr-backend-site/. /src/gofr-backend/docker-site
cp /src/gofr-backend/docker-site/config/default.json.example /src/gofr-backend/docker-site/config/default.json

cd /src/gofr-backend/docker-site
npm install

# cp -r /gofr/gofr-backend /src/gofr-backend
# Attendre que le service FHIR soit prêt
dockerize -wait-retry-interval 5s -timeout 120s -wait ${FHIR_BASE_URL}/DEFAULT/metadata
# Attendre que le service Keycloak soit prêt
dockerize -wait-retry-interval 5s -timeout 120s -wait http://keycloak-test-local:9090/
echo "start project "

# Démarrer l'application
npm start
