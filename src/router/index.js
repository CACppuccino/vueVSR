import Vue from 'vue'
import Router from 'vue-router'
/* components*/
import editor from '@/components/editor'
/* pages */
/* users */
import loginpage from '@/pages/login'
import dashboard from '@/pages/dashboard'
import profile from '@/pages/profile'
import activity from '@/pages/activity'
import setting from '@/pages/setting'
/* lost street */
import lsproject from '@/pages/lsproject'
import mainpage from '@/pages/mainpage'
import loststreet from '@/pages/loststreet'
import lshome from '@/pages/lshome'
/* doc */
import doc from '@/pages/doc'
import dochome from '@/pages/dochome'
import docstreet from '@/pages/docstreet'
import docbuilding from '@/pages/docbuilding'
import docedit from '@/pages/docedit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: mainpage
    },
    {
      path: '/add',
      name: 'editor',
      component: editor
    },
    {
      path: '/login',
      name: 'login',
      component: loginpage
    },
    {
      path:'/dashboard',
      component: dashboard,
      children: [
        {
          path:'/',
          name:'usr_profile',
          component: profile,
        },
        {
          path:'activities',
          name:'usr_activity',
          component: activity
        },
        {
          path:'settings',
          name:'usr_setting',
          component: setting
        }
      ]
    },
    {
      path: '/loststreet',
      component: loststreet,
      children:[
        {
          path:'/',
          name:'ls_main',
          component:lshome
        },
        {
          path:'project',
          name:'ls_project',
          component: lsproject
        }
      ] 
    },
    {
      path: '/doc',
      component: doc,
      children: [
        {
          path:'/',
          name:'doc_home',
          component:dochome
        },
        {
          path:'street',
          name:'doc_street',
          component:docstreet
        },
        {
          path:'building',
          name:'doc_building',
          component:docbuilding
        },
        {
          path:'edit',
          name:'doc_edit',
          component:docedit
        }
      ]
    }
    ]
})
