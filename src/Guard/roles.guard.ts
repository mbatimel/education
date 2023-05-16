import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requireRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requireRoles) {
      return true;
    }
    // если бы мы занимались реальной аутификацией то код был бы таким: const {user} = context.switchToHttp().getRequest();
    const user = {
      name: 'Ildar',
      roles: [Role.Admin],
    };
    return requireRoles.some((role) => user.roles.includes(role));
  }
}
