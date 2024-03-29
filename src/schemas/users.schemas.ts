import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  password: z.string().max(120),
  admin: z.boolean().default(false),
  active: z.boolean().default(true),
});

const userSchemaPostUser= z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().max(120),
  admin:z.boolean().default(false).optional(),

})

const userSchemaUpdate = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  password: z.string().max(120).optional(),
});

const requestUserSchema = userSchema.omit({ id: true });
const responseUserSchema = userSchema.omit({ password: true });
const requestAllUsersSchema = z.array(responseUserSchema);
const responseSchemaPostUser = userSchema.omit({id:true, active:true})
export {
  userSchema,
  requestUserSchema,
  responseUserSchema,
  userSchemaUpdate,
  requestAllUsersSchema,
  userSchemaPostUser,
  responseSchemaPostUser
  
};
