import {z} from 'zod'
const userSchema=z.object({
id: z.number(),
name: z.string(),
email: z.string.email(),
password: z.string.min(120),
admin:z.boolean,
active: z.boolean 
})

const requestUserSchema= userSchema.omit({id:true})
const responseUserSchema= userSchema.omit({password:true})
export{userSchema,requestUserSchema,responseUserSchema}