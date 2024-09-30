import { z } from 'zod'

// give the object that defines the shape of our user object, this helps us define our validation rules
const schema = z.object({
    email: z.string().email(),
    password: z.string().min(5)
    // age: z.number()
})

export default schema;
