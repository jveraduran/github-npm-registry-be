FROM ghcr.io/jveraduran/docker-registry@sha256:9b799fed1dc42e07c4ef9462752a24506504af453b07f1e4cdc82885d0e80a1b

COPY . .

WORKDIR /usr/src/app/

RUN npm version
