import express, { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';

const router: Router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
];

moduleRoutes.map(route => router.use(route.path, route.route));
export default router;
