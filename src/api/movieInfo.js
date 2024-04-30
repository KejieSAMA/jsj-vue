import axios from 'axios'

class Movie {
    async getMovieInfoTest(id){
        axios({
            method: 'post',
            url: 'http://localhost:8000/movies/getMovieInfo',
            data: {
                id: id
            },
        }).then(res=>{
            console.log(res)
            return res
        })
    }
}



module.exports = new Movie()
