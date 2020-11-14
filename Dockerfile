FROM node:latest
WORKDIR /app

RUN apt update -y && apt install -y nginx gettext-base
ENV NODE_ENVIRONMENT=production

RUN echo "version 0.1.0-5"

COPY api api
COPY web web
COPY babel.config.js babel.config.js
COPY redwood.toml.prod redwood.toml
COPY yarn.lock yarn.lock
COPY package.json package.json
COPY nginx/default.conf app.conf
COPY nginx/start-0.1.sh start.sh
COPY .babelrc.js .babelrc.js

RUN chmod +x ./start.sh && ls -latr

ENTRYPOINT [ "./start.sh" ]
