import { SetMetadata } from "@nestjs/common";
import { Role } from "./auth.role.enum";

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);