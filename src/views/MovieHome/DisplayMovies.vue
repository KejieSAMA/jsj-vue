<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div>
        <div class="moive-top">
            <span class="panel-header">正在热映 (99)部</span>
            <span class="panel-all">全部></span>
        </div>
        <!-- <div class="movies-item">
            <div v-for="item in imgList" class="imgList">
                <img :src="item.src" alt="" class="imgTest">
                <div class="movieName">{{ item.name }}</div>
                <a href="" class="ticketing">购票</a>
            </div>
        </div> -->
        <div class="movies-item">
            <div v-for="item in imgList" class="imgList">
                <router-link :to="{
                    path: '/file/movieInfo',
                    query: {
                        movieId: item.id
                    }
                }" class="movie_button">
                    <img :src="item.src" alt="" class="imgTest">
                    <div class="movieName">{{ item.name }}</div>
                </router-link>
                <router-link :to="{
                    path: '/filetick',
                    query: {
                        getInfoId: item.id
                    },
                }" class="movie_button">
                    <a href="" class="ticketing">购票</a>
                </router-link>
            </div>
        </div>
    </div>
</template>
<style scoped>
.movie_button {

    display: flex;
    position: relative;
    flex-direction: column;
    text-decoration: none;

}

.panel-header {
    font-size: 26px;
    color: red;
}

.panel-all {
    padding-top: 20px;
    font-size: 14px;
    color: red;
}

.moive-top {
    margin-bottom: 14px;
    width: 734px;
    display: flex;
    justify-content: space-between;
}

.ticketing {
    text-align: center;
    display: inline-block;
    width: 161px;
    font-size: 16px;
    padding: 5px 0px;
    color: red;
    border-left: 0.5px solid #e6e6e6;
    border-right: 0.5px solid #e6e6e6;
    border-bottom: 0.5px solid #e6e6e6;
    text-decoration: none;
}

.ticketing:hover {
    text-decoration: none;
    background: red;
    color: white;
}

.movies-item {
    width: 800px;
    display: flex;
    flex-wrap: wrap;
}

.imgList {
    display: flex;
    position: relative;
    flex-direction: column;
    margin-right: 30px;
    margin-bottom: 30px;
}

.movieName {
    position: absolute;
    top: 160px;
    width: 162px;
    margin-top: 6px;
    padding-top: 30px;
    padding-bottom: 6px;
    font-size: 16px;
    color: white;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAMAAACpg44GAAAAbFBMVEUiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiK2HsfSAAAAJHRSTlPMxr63q6OahzclHRULBgHCsZOOf3p1cGtmYVxXUk1IQz4wLBAszz8hAAAAhklEQVRo3u3OxY0DAAADsBxDmZn337FTVPIjnsAZ4/zgCOcHhzg/+MBlgPOD/zg/+Ifzg3dcbrj84vzgFZcLLmdcTrgccTngssdlh8sWlw0ua1xWuCxxWeDyg/ODc1xmuHzj/OAXzg9+4vzgFJcPnB98x/nBCS5vOD9YVVVVVVVVVVVVr/IEUdzLcLhtP2AAAAAASUVORK5CYII=")
}
</style>
<script>
const imgList = [
    {
        name: "好像也没那么热",
        src: "https://p0.pipi.cn/mmdb/fb7386dd7a351b1789300bdf1299895300d4c.jpg?imageView2/1/w/160/h/220",
        id: 1,
    },
    {
        name: "第八个嫌疑人",
        src: "https://p0.pipi.cn/mmdb/fb7386dd9233382c95b12dabd7246f8b9c712.jpg?imageView2/1/w/160/h/220",
        id: 2,
    },
    {
        name: "坚如磐石",
        src: "https://p0.pipi.cn/mmdb/fb738633be1b128d3357e2418539bafea3dbb.jpg?imageView2/1/w/160/h/220",
        id: 3,
    },
    {
        name: "前任4: 英年早婚",
        src: "https://p0.pipi.cn/mmdb/fb7386dd3380fae7aa300b7a6c0a2db67b7f5.jpg?imageView2/1/w/160/h/220",
        id: 4,
    },
    {
        name: "志愿军: 雄兵出击",
        src: "https://p0.pipi.cn/mmdb/fb7386dd5379237df5537c1d8b2b51b0e9052.jpg?imageView2/1/w/160/h/220",
        id: 5,
    }
]

/* import test from '../assets/img/index' */

export default {
    data() {
        return {
            imgList,
        }
    }
}
</script>