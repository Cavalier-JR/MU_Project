import {createWebHistory, createRouter} from "vue-router"

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: "login",
        component: () => import("../page/Login.vue")
    },
    {
        path: "/user",
        name: 'UserLayout',
        component: () => import("../page/Personal/UserLayout.vue"),
        // 嵌套路由
        children: [
            {
                path: '', 
                redirect: '/user/UserHome',
            },
            {
                path: 'UserHome', 
                name: "userhome",
                component: () => import("../page/Personal/UserMain.vue")
            },
            {
                path: "Class_unlearn",
                name: "class_unlearn",
                component: () => import("../page/Personal/class_unlearn.vue"),
            },
            {
                path: "Pic_partially",
                name: "pic_partially",
                component: () => import("../page/Personal/Pic_partially.vue"),
            },
            {
                path: "Text_unlearn",
                name: "text_unlearn",
                component: () => import("../page/Personal/Text_unlearn.vue"),
            },
            {
                path: "Forget_record", // 用户端-遗忘记录
                name: "forget_record",
                component: () => import("../page/Personal/Forget_record.vue"),
            },
        ],
    },
    {
        path: "/company",
        name: 'CompanyLayout',
        component: () => import("../page/Company/CompanyLayout.vue"),
        // 嵌套路由
        children: [
            {
                path: '', 
                redirect: '/company/CompanyHome',
            },
            {
                path: 'CompanyHome', 
                name: "companyhome",
                component: () => import("../page/Company/CompanyMain.vue")
            },
            {
                path: 'Forgotten_record', // 公司端-遗忘记录
                name: "forgotten_record",
                component: () => import("../page/Company/Forgotten_record.vue")
            },
            {
                path: "Poisoning_protection", // 投毒保护
                name: "poisoning_protection",
                component: () => import("../page/Company/Poisoning_protection.vue")
            },
            // {
            //     path: 'AdvicePart', // 优化建议-部分遗忘
            //     name: "advicePart",
            //     component: () => import("../page/Company/AdvicePart.vue")
            // },
            // {
            //     path: 'AdviceClass', // 优化建议-类别遗忘
            //     name: "adviceClass",
            //     component: () => import("../page/Company/AdviceClass.vue")
            // },
            // {
            //     path: 'AdviceText', // 优化建议-文本遗忘
            //     name: "adviceText",
            //     component: () => import("../page/Company/AdviceText.vue")
            // },
            {
                path:'advice',
                name:"advice",
                component: () => import("../page/Company/Advice.vue")
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
