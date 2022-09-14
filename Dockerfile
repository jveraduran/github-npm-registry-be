FROM ghcr.io/jveraduran/github-container-registry:v1.0.3

COPY . .

WORKDIR /usr/src/app/

RUN npm version
