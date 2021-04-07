import goods from 'pages/goods.vue'
import ratings from 'pages/ratings'
import sellers from 'pages/seller'

export default[
    {path: '/goods', component: goods},
    {path: '/ratings', component: ratings},
    {path: '/seller', component: sellers},
    {path: '/', redirect: '/goods'}
]