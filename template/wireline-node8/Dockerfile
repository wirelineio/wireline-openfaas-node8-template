FROM node:8.10-alpine

RUN addgroup -S app && adduser -S -g app app

# Alternatively use ADD https:// (which will not be cached by Docker builder)
# RUN apk --no-cache add curl \
#     && echo "Pulling watchdog binary from Github." \
#     && curl -sSLf https://github.com/openfaas-incubator/of-watchdog/releases/download/0.2.5/of-watchdog > /usr/bin/fwatchdog \
#     && chmod +x /usr/bin/fwatchdog \
#     && apk del curl --no-cache

WORKDIR /usr/bin
COPY of-watchdog ./fwatchdog

WORKDIR /root/

# Turn down the verbosity to default level.
ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir -p /home/app

# Wrapper/boot-strapper
WORKDIR /home/app

# Install the Wireline CLI
RUN npm i -g @wirelineio/cli

# COPY function files and folders
COPY function/ ./

# chmod for tmp is for a buildkit issue (@alexellis)
RUN chown app:app -R /home/app \
    && chmod 777 /tmp

USER app

ENV cgi_headers="true"
ENV fprocess="wire run"
ENV mode="http"
ENV upstream_url="http://127.0.0.1:3000"

ENV exec_timeout="20s" 
ENV write_timeout="25s" 
ENV read_timeout="25s" 

HEALTHCHECK --interval=1s CMD [ -e /tmp/.lock ] || exit 1

CMD ["fwatchdog"]
