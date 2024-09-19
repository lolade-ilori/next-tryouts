import { z } from 'zod'

// give the object that defines the shape of our user object, this helps us define our validation rules
const schema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    // age: z.number()
})

export default schema;
