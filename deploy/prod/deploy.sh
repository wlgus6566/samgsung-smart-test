
export BASE_DIR="/app/deploy/frontend/front-pc-web"
export DOCKER_NAME="kyoga-front-pc-web"

## 기본값 (prod)
export DOCKER_PORT="13000"
export ENV_SUFFIX="prod"

# shellcheck disable=SC2164
cd ${BASE_DIR}

## uncompress
mkdir -p ${BASE_DIR}/kyoga-front-pc-web
tar -xzf kyoga-front-pc-web.tar.gz -C ${BASE_DIR}/kyoga-front-pc-web/
ls -al ${BASE_DIR}
ls -al ${BASE_DIR}/kyoga-front-pc-web


docker rm -f ${DOCKER_NAME}-${ENV_SUFFIX} || true

if docker images -q ${DOCKER_NAME} | grep .; then
    docker rmi -f ${DOCKER_NAME}
fi

docker build -t ${DOCKER_NAME} -f ${BASE_DIR}/kyoga-front-pc-web/deploy/${ENV_SUFFIX}/Dockerfile .

docker run -d --name ${DOCKER_NAME}-${ENV_SUFFIX} -p ${DOCKER_PORT}:13000 -e TZ=Asia/Seoul -v /app/web/app:/app/file ${DOCKER_NAME}
