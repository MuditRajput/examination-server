import { permissions } from './constants';
export default function hasPermission(moduleName: string, role: string, permissionType: string): boolean {
    const isModulePresent = permissions[moduleName];
    if (!isModulePresent || !isModulePresent[permissionType]) {
        return false;
    }
    if (!permissions[moduleName].all.includes(role) && !permissions[moduleName][permissionType].includes(role)) {
        return false;
    }
    return true;
}
