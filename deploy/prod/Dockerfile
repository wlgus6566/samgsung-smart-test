# 1단계: 빌드용
FROM node:20-alpine3.21

WORKDIR /app/front-pc-web

# copy all
COPY ./kyoga-front-pc-web/ ./

# Open PORT
EXPOSE 13000

RUN ls -al /app/front-pc-web && npm install env-cmd --save-dev --force


# RUN
CMD ["npm", "run", "start_prod"]
