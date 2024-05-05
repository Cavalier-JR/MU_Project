import {createWebHistory, createRouter} from "vue-router"

const routes = [
    {
        path: '/login',
        name: "login",
        component: () => import("../page/login/Login.vue")
    },
    {
        path: "/",
        name: 'Layout',
        component: () => import("../page/MainLayout.vue"),
        // 嵌套路由
        children: [
            {
                // 这里不设置值，是把main作为默认页面
                path: "",
                redirect: '/home'
            },
            {
                // 这里不设置值，是把main作为默认页面
                path: "home",
                name: "Main",
                component: () => import("../page/Main.vue"),
            },
            {
                path: "user",
                name: "User",
                component: () => import("../page/User.vue"),
            },
            {
                path: "articleList",
                name: "articleList",
                component: () => import("../page/article/ArticleList.vue"),
            },
            {
                path: "test",
                name: "test",
                component: () => import("../page/Test.vue"),
            }
        ],
    },
];

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory("/"),
    routes, // `routes: routes` 的缩写
});

//进行路由拦截：当没有登陆标识，直接打回登陆页面，如何避免退回到 登陆页呢？
router.beforeEach((to, from, next) => {
    if (to.path == "/login") {
        next();
    } else {
        let token = localStorage.getItem('isLogin');
        if (token) {
            next();
        } else {
            next("/login");
        }
    }
})

export default router;
