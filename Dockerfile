# Base image define
FROM node:14 as builder

WORKDIR 'usr/src/app'
# 종속성만 먼저 build : cache 사용
COPY package.json ./
RUN npm install

# 변경된 소스 적용
COPY ./ ./
RUN npm run build

# 시작시 실행될 명령어
#CMD ["node", "App.js"]

FROM nginx
# Install logrotate
#RUN apk add --no-cache logrotate
#COPY ./nginx.conf /etc/nginx/nginx.conf
#COPY ./logrotate.conf /etc/logrotate.conf
#COPY ./script.sh /script.sh
#RUN chmod +x /script.sh

EXPOSE 80
COPY --from=builder /usr/src/app/build /usr/share/nginx/html