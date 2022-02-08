FROM node:16.10
COPY . home/frontend 
WORKDIR home/frontend
RUN npm install -g npm@8.3.2
RUN npm install -g @angular/cli
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0", "--configuration=production"] 