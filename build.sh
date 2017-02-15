sed -i.bak "s/development/production/" src/configs/index.js
sed -i.bak "s/MEDIA_URL/$MEDIA_URL/g" src/configs/production.js
sed -i.bak "s/SOCKET_URL/$SOCKET_URL/g" src/configs/production.js
rm src/configs/*.bak

