import { diamond, equilateral } from './patterns';
import { hasPermissions, validateUsers } from './utils';
import{ users } from './constants';


diamond(5);
equilateral(10);
hasPermissions('getUsers', 'head-trainer', 'all');
validateUsers(users);

