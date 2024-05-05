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
            },
            {
                path: "ClassUnlearn",
                name: "ClassUnlearn",
                component: () => import("../page/Personal/ClassUnlearn.vue"),
            }
        ],
    },


    // 公司界面
    {
        path: '/CompanyLayout',
        name: "CompanyLayout",
        component: () => import("../page/Company/CompanyLayout.vue"),
        children: [
            {
                path: '/InitialPage', // 公司初始信息 各种图表
                name: "InitialPage",
                component: () => import("../page/Company/InitialPage.vue")
            },
            {
                path: '/History', // 遗忘记录
                name: "History",
                component: () => import("../page/Company/History.vue")
            },
            {
                path: '/Poison', // 投毒遗忘
                name: "Poison",
                component: () => import("../page/Company/Poison.vue")
            },
            {
                path: '/AdvicePart', // 优化建议-部分遗忘
                name: "AdvicePart",
                component: () => import("../page/Company/AdvicePart.vue")
            },
            {
                path: '/AdviceClass', // 优化建议-类别遗忘
                name: "AdviceClass",
                component: () => import("../page/Company/AdviceClass.vue")
            },
            {
                path: '/AdviceText', // 优化建议-文本遗忘
                name: "AdviceText",
                component: () => import("../page/Company/AdviceText.vue")
            },


        ]
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
