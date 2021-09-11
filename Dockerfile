FROM node:14

WORKDIR /usr/src/app

COPY . .

RUN yarn install && yarn build

EXPOSE 3000

RUN chmod +x .docker/entrypoint.sh

ENTRYPOINT [ ".docker/entrypoint" ]
