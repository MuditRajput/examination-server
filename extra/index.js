import {diamond, equilateral} from './patterns';
import {hasPermissions, validateUsers} from './utils';
import{users} from './constants'


diamond(5);
equilateral(10);
const result= hasPermissions('getUsers','head-trainer','all');
console.log(result);
validateUsers(users);

