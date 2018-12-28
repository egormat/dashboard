import Table from './components/Table.vue'
import CompaniesTable from './components/CompaniesTable.vue'
import DoorsTable from './components/DoorsTable.vue'
import UPCTable from './components/UPCTable.vue'
import LoginWindow from './components/LoginWindow.vue'
import Dashboard from './components/Dashboard.vue'
import ChartWindow from './components/ChartWindow.vue'
import Diagrams from './components/Diagrams.vue'
// const routes = [
//   {path: '/',
//     component: Table,
//     children: [
//       {path: 'companies',
//        name: 'companies',
//        component: CompaniesTable},
//        {
//          path: 'companies/:companyId/doors',
//          component: DoorsTable,
//          name: 'doors',
//          props: true,
//        },
//        {
//          path: 'companies/:companyId/doors/:doorId/upc',
//          component: UPCTable,
//          name: 'upc',
//          props: true,
//        },
//      ]
//   }
//    // children: [{
//    //              path: ':companyId/doors',
//    //              component: DoorsTable,
//    //              name: 'doors',
//    //              props: true,
//    //            },
//    //            {
//    //              path: ':companyId/doors/:doorId/upc',
//    //              component: UPCTable,
//    //              name: 'upc',
//    //              props: true,
//    //            },
//    //
//    //            ]
//
//
//
// ]

const routes = [
  {path: '/', component:Dashboard, meta: {requiresAuth: true}, children: [
  {path: '/diagrams', component: Diagrams, meta:{requiresAuth: true}},
  {path: '/table', component: CompaniesTable, meta:{requiresAuth: true}},
  {name: 'doors', path: 'table/:companyId/doors', component: DoorsTable,meta:{requiresAuth: true}},
  {path: 'table/:companyId/doors/:doorId/upc',component: UPCTable,name: 'upc',props: true, meta:{requiresAuth: true}}
]
},
  {path: '/login', name:'login', component: LoginWindow}
]

export default routes;
