install:	#Установка пакетов
	npm ci

link:		#Линк пакетов
	sudo npm link

publish:	#Проверка публикации
	npm publish --dry-run

eslint:		#Проверка линтером
	npx eslint .
