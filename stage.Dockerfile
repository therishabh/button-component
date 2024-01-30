FROM registry.dyninno.net/dynatech/alpine-image/node18-runner:917366 as builder
ARG CI_JOB_TOKEN
WORKDIR /mnt/workdir

COPY ./ ./

RUN npm config set -- //gitlab.dyninno.net/api/v4/packages/npm/:_authToken=${CI_JOB_TOKEN}
RUN npm ci
RUN npm run build
RUN npm prune --production
RUN rm -rf .next/cache
RUN rm -f ~/.npmrc

FROM registry.dyninno.net/dynatech/alpine-image/node18:latest as baseimg

WORKDIR /mnt/workdir

COPY --from=builder /mnt/workdir/ /mnt/workdir/

CMD [ "npm", "run", "start" ]
