# Base image define
FROM node:14 as builder

# 추가적으로 필요한 파일 다운로드
#WORKDIR 'D:/workspace/git/inpix/front-admin'
WORKDIR 'usr/src/app'
COPY package.json .
RUN npm install

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