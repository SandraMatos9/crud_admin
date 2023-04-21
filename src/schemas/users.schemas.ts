import {z} from 'zod'
const userSchema=z.object({
id: z.number(),
name: z.string(),
email: z.string().email(),
password: z.string().max(120),
admin:z.boolean().default(false),
active: z.boolean().default(true)
})


const userSchemaUpdate=z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    password: z.string().max(120).optional(),
    
    })

const requestUserSchema= userSchema.omit({id:true})
const responseUserSchema= userSchema.omit({password:true})
export{userSchema,requestUserSchema,responseUserSchema,userSchemaUpdate}