FROM node:14

WORKDIR /usr/src/app

COPY . .

RUN yarn install && yarn build

EXPOSE 3000

COPY ./.docker/entrypoint.sh ./entrypoint.sh

RUN chmod +x ./entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]
