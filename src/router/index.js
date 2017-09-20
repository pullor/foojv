import Vue from 'vue'
import Router from 'vue-router'
// home 界面
import Home from '../Home/Home'
import Activity from '../Home/Activity/Activity.vue'
import FindHouse from '../Home/FindHouse/FindHouse.vue'
import HeadLine from '../Home/HeadLine/HeadLine.vue'
import HotLists from '../Home/HotLists/HotLists.vue'
import Knowledge from '../Home/Knowledge/Knowledge.vue'
import MapHouse from '../Home/MapHouse/MapHouse.vue'
import NewHouse from '../Home/NewHouse/NewHouse.vue'
import OnlineHouse from '../Home/OnlineHouse/OnlineHouse.vue'
import RentHouse from '../Home/RentHouse/RentHouse.vue'
import SchoolHouse from '../Home/SchoolHouse/SchoolHouse.vue'
import ShopHouse from '../Home/ShopHouse/ShopHouse.vue'
import UsedHouse from '../Home/UsedHouse/UsedHouse.vue'
// tools 界面
import Tools from '../Tools/Tools'
// watch 界面
import Watch from '../Watch/Watch'
// mine 界面
import Mine from '../Mine/Mine'
import Search from '../Home/search.vue'
import Location from '../Home/location.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    // home 界面
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/FindHouse',
      name: 'FindHouse',
      component: FindHouse
    },
    {
      path: '/HeadLine',
      name: 'HeadLine',
      component: HeadLine
    },
    {
      path: '/HotLists',
      name: 'HotLists',
      component: HotLists
    },
    {
      path: '/Knowledge',
      name: 'Knowledge',
      component: Knowledge
    },
    {
      path: '/MapHouse',
      name: 'MapHouse',
      component: MapHouse
    },
    {
      path: '/NewHouse',
      name: 'NewHouse',
      component: NewHouse
    },
    {
      path: '/OnlineHouse',
      name: 'OnlineHouse',
      component: OnlineHouse
    },
    {
      path: '/RentHouse',
      name: 'RentHouse',
      component: RentHouse
    },
    {
      path: '/SchoolHouse',
      name: 'SchoolHouse',
      component: SchoolHouse
    },
    {
      path: '/ShopHouse',
      name: 'ShopHouse',
      component: ShopHouse
    },
    {
      path: '/UsedHouse',
      name: 'UsedHouse',
      component: UsedHouse
    },

    // tools 界面
    {
      path: '/Tools',
      name: 'Tools',
      component: Tools
    },
    // watch 界面
    {
      path: '/Watch',
      name: 'Watch',
      component: Watch
    },
    // mine 界面
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/search',
      name: 'seatch',
      component: Search
    },
    {
      path: '/location',
      name: 'location',
      component: Location
    }
  ]
})
