import goods from 'pages/goods.vue'
import ratings from 'pages/ratings'
import sellers from 'pages/sellers'

export default[
    {path: '/goods', component: goods},
    {path: '/ratings', component: ratings},
    {path: '/sellers', component: sellers},
    {path: '/', redirect: '/goods'}
]