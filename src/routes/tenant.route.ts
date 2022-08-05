import { Router } from "express";
import TenantController from "../controllers/Tenant/tenant.controller";
const route = Router();

route.post("/tenant-user/login", TenantController.login);
route.post("/tenant-user/register", TenantController.register);

route.get("/tenants", TenantController.index);
route.post("/tenants", TenantController.create);

export default route;
