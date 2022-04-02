ARG UBUNTU_VERSION=20.04

ARG DOCKER_VERSION=v20.10.12
ARG COMPOSE_VERSION=v2.3.3
ARG BUILDX_VERSION=v0.8.0
ARG LOGOLS_VERSION=v1.3.7
ARG BIT_VERSION=v1.1.2
ARG GH_VERSION=v2.5.2
ARG DEVTAINR_VERSION=v0.6.0

FROM qmcgaw/binpot:docker-${DOCKER_VERSION} AS docker
FROM qmcgaw/binpot:compose-${COMPOSE_VERSION} AS compose
FROM qmcgaw/binpot:buildx-${BUILDX_VERSION} AS buildx
FROM qmcgaw/binpot:logo-ls-${LOGOLS_VERSION} AS logo-ls
FROM qmcgaw/binpot:bit-${BIT_VERSION} AS bit
FROM qmcgaw/binpot:gh-${GH_VERSION} AS gh
FROM qmcgaw/devtainr:${DEVTAINR_VERSION} AS devtainr

FROM ubuntu:${UBUNTU_VERSION}
ARG CREATED
ARG COMMIT
ARG VERSION=local
LABEL \
    org.opencontainers.image.authors="quentin.mcgaw@gmail.com" \
    org.opencontainers.image.created=$CREATED \
    org.opencontainers.image.version=$VERSION \
    org.opencontainers.image.revision=$COMMIT \
    org.opencontainers.image.url="https://github.com/qdm12/basedevcontainer" \
    org.opencontainers.image.documentation="https://github.com/qdm12/basedevcontainer" \
    org.opencontainers.image.source="https://github.com/qdm12/basedevcontainer" \
    org.opencontainers.image.title="Base Dev container Debian" \
    org.opencontainers.image.description="Base Debian development container for Visual Studio Code Remote Containers development"
ENV BASE_VERSION="${VERSION}-${CREATED}-${COMMIT}"


# Create Devel user
RUN useradd devel
RUN mkdir -p /home/devel && chown devel /home/devel

# CA certificates
RUN apt-get update -y && \
    apt-get install -y --no-install-recommends ca-certificates && \
    rm -r /var/cache/* /var/lib/apt/lists/*

# Timezone
RUN apt-get update -y && \
    apt-get install -y --no-install-recommends tzdata && \
    rm -r /var/cache/* /var/lib/apt/lists/*
ENV TZ=

# Setup Git and SSH
RUN apt-get update -y && \
    apt-get install -y --no-install-recommends git git-man man openssh-client less && \
    rm -r /var/cache/* /var/lib/apt/lists/*

# Setup shell
RUN apt-get update -y && \
    apt-get install -y --no-install-recommends zsh nano locales wget && \
    apt-get autoremove -y && \
    apt-get clean -y && \
    rm -r /var/cache/* /var/lib/apt/lists/*
ENV EDITOR=nano \
    LANG=en_US.UTF-8 \
    # MacOS compatibility
    TERM=xterm
RUN echo "LC_ALL=en_US.UTF-8" >> /etc/environment && \
    echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen && \
    echo "LANG=en_US.UTF-8" > /etc/locale.conf && \
    locale-gen en_US.UTF-8
RUN usermod --shell /bin/zsh root
RUN usermod --shell /bin/zsh devel

RUN git config --global advice.detachedHead false

COPY shell/.zshrc /root/
COPY shell/.zshrc /home/devel
RUN git clone --single-branch --depth 1 https://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh && \
    cp -r ~/.oh-my-zsh /home/devel/.oh-my-zsh && \
    chown devel /home/devel/.oh-my-zsh

ARG POWERLEVEL10K_VERSION=v1.16.1
COPY shell/.p10k.zsh /root/
COPY shell/.p10k.zsh /home/devel
RUN git clone --branch ${POWERLEVEL10K_VERSION} --single-branch --depth 1 https://github.com/romkatv/powerlevel10k.git ~/.oh-my-zsh/custom/themes/powerlevel10k && \
    rm -rf ~/.oh-my-zsh/custom/themes/powerlevel10k/.git && \
    cp -r ~/.oh-my-zsh/custom/themes/powerlevel10k /home/devel/.oh-my-zsh/custom/themes/powerlevel10k && \
    chown devel /home/devel/.oh-my-zsh/custom/themes/powerlevel10k

RUN git config --global advice.detachedHead true

# Docker CLI
COPY --from=docker /bin /usr/local/bin/docker
ENV DOCKER_BUILDKIT=1

# Docker compose
COPY --from=compose /bin /usr/libexec/docker/cli-plugins/docker-compose
ENV COMPOSE_DOCKER_CLI_BUILD=1
RUN echo "alias docker-compose='docker compose'" >> /root/.zshrc
RUN echo "alias docker-compose='docker compose'" >> /home/devel/.zshrc

# Buildx plugin
COPY --from=buildx /bin /usr/libexec/docker/cli-plugins/docker-buildx

# Logo ls
COPY --from=logo-ls /bin /usr/local/bin/logo-ls
RUN chown devel /usr/local/bin/logo-ls
RUN echo "alias ls='logo-ls'" >> /root/.zshrc
RUN echo "alias ls='logo-ls'" >>  /home/devel/.zshrc

# Bit
COPY --from=bit /bin /usr/local/bin/bit
ARG TARGETPLATFORM
RUN if [ "${TARGETPLATFORM}" != "linux/s390x" ]; then echo "y" | bit complete; fi

COPY --from=gh /bin /usr/local/bin/gh

COPY --from=devtainr /devtainr /usr/local/bin/devtainr


ARG CREATED
ARG COMMIT
ARG VERSION=local
LABEL \
    org.opencontainers.image.authors="quentin.mcgaw@gmail.com" \
    org.opencontainers.image.created=$CREATED \
    org.opencontainers.image.version=$VERSION \
    org.opencontainers.image.revision=$COMMIT \
    org.opencontainers.image.url="https://github.com/qdm12/reactdevcontainer" \
    org.opencontainers.image.documentation="https://github.com/qdm12/reactdevcontainer" \
    org.opencontainers.image.source="https://github.com/qdm12/reactdevcontainer" \
    org.opencontainers.image.title="React Dev container Debian" \
    org.opencontainers.image.description="React TS development container for Visual Studio Code Remote Containers development"

# Setup shells
COPY shell/.zshrc-specific /root/
COPY shell/.zshrc-specific /home/devel/
# Sets directories for NPM global packages
ENV NODE_PATH="/home/devel/.npm-packages/lib/node_modules" \
    MANPATH="/home/devel/.npm-packages/share/man"
ENV PATH=/home/devel/.npm-packages/bin:$PATH
# Fix ownership and permissions of anonymous volume 'node_modules'
VOLUME [ "/workspace/node_modules" ]
RUN mkdir -p /workspace/node_modules && \
    chmod 700 /workspace/node_modules && \
    chown devel /workspace/node_modules

# Build tools + utility
RUN apt-get update && \
    apt-get install -y --no-install-recommends curl gnupg2 build-essential && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install Heroku
RUN curl -LJO  https://cli-assets.heroku.com/install-ubuntu.sh && \
    chmod +x /install-ubuntu.sh && \
    chown devel /install-ubuntu.sh && \
    /install-ubuntu.sh && \
    rm /install-ubuntu.sh

# Download nvm
ENV NVM_DIR /home/devel/.nvm
RUN mkdir -p ${NVM_DIR} && chown devel ${NVM_DIR}
RUN curl -LJO https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh && \
    chmod +x /install.sh && \
    chown devel /install.sh

USER devel
ENTRYPOINT [ "/bin/zsh" ]

# Install nvm for devel user
RUN /install.sh

# Additional debian packages
USER root
## Build tools + utility
RUN apt-get update && \
    apt-get install -y --no-install-recommends sudo && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
RUN adduser devel sudo && echo "devel:devel" | chpasswd
USER devel

# Install npm
SHELL ["/bin/bash", "--login", "-c"]
ENV NPM_VERSION 16.14.2
RUN source /home/devel/.nvm/nvm.sh && \
    nvm install ${NPM_VERSION} && \
    nvm alias default ${NPM_VERSION} && \
    nvm use default
