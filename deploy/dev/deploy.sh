
export BASE_DIR="/app/deploy/frontend/front-pc-web"
export DOCKER_NAME="kyoga-front-pc-web"

## 기본값 (prod)
export DOCKER_PORT="13000"
export ENV_SUFFIX="dev"

# shellcheck disable=SC2164
cd ${BASE_DIR}

docker rm -f ${DOCKER_NAME}-${ENV_SUFFIX} || true

if docker images -q ${DOCKER_NAME} | grep .; then
    docker rmi -f ${DOCKER_NAME}
fi

mkdir -p ./kyoga-front-pc-web
tar -xzf kyoga-front-pc-web.tar.gz -C ./kyoga-front-pc-web/
ls -al ./kyoga-front-pc-web

docker build -t ${DOCKER_NAME} -f ${BASE_DIR}/deploy/kyoga-front-pc-web/deploy/${ENV_SUFFIX}/Dockerfile .

docker run -d --name ${DOCKER_NAME}-${ENV_SUFFIX} -p ${DOCKER_PORT}:13000 -e TZ=Asia/Seoul -v /app/web/app:/app/file ${DOCKER_NAME}
