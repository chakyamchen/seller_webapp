const path = require('path');
const data = require('./src/mock/data.json')
module.exports = {
    devServer:{
        before(app){
            app.get('/api/seller', function(req,res){
                res.json({
                    code: 200,
                    data: data.seller
                })
            }),
            app.get('/api/goods', function(req,res){
                res.json({
                    code: 200,
                    data: data.goods
                })
            }),
            app.get('/api/ratings', function(req,res){
                res.json({
                    code: 200,
                    data: data.ratings
                })
            })
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                components: path.resolve(__dirname, 'src/components/'),
                http: path.resolve(__dirname, 'src/http/'),
                pages: path.resolve(__dirname, 'src/pages/'),
                router: path.resolve(__dirname, 'src/router/'),
                routes: path.resolve(__dirname, 'src/routes/'),
                store: path.resolve(__dirname, 'src/store/'),
            }
        }
    }
}