import {permissions} from '../constants';
export default function hasPermissions (moduleName, role, permissionType){
    console.log('Checked for permissions:');
    const isModulePresent = permissions[moduleName];
    if (!isModulePresent || !isModulePresent[permissionType]) {
        console.log(`${moduleName} and/or ${permissionType} is invalid`);
        return false;
    }
    if (!permissions[moduleName].all.includes(role) && !permissions[moduleName][permissionType].includes(role)) {
        console.log(`${role} does not have ${permissionType} permissions`);
        return false;
    }
    console.log(`${role} has ${permissionType} permissions`);
    return true;
}
