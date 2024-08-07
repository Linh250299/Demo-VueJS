import { createRouter, createWebHistory } from 'vue-router'
import BlogApp from '@/views/BlogApp.vue'
import ProJects from '@/views/ProJects.vue'
import HomeApp from '@/views/HomeApp.vue'
import CreatProject from '@/views/CreatProject.vue'
import ListProject from '@/views/ListProject.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
		{
			path: '/',
			name: 'homeapp',
			component: () => HomeApp,
			
		},
        {
			path: '/blog',
			name: 'blogapp',
			component: () => BlogApp,
			
		},
        {
			path: '/projects',
			name: 'project',
			component: () => ProJects,
			
		},
		{
			path: '/create',
			name: 'create',
			component: () => CreatProject,
			
		},
		{
			path: '/list',
			name: 'list',
			component: () => ListProject,
			
		}
    ]
})
export default router