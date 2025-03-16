import { z } from "zod";

const bloodTypeAllowed = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
const appointmentAllowed = ['previous', 'immediate', 'emergecy'];

export const AddApointmentScema = z.object({
    firstName: z.string({
        required_error: "First name is required",
        invalid_type_error: "the type should be string"
    }).min(3).max(15),
    lastName: z.string({
        required_error: "Last name is required",
        invalid_type_error: "the type should be string"
    }).min(3).max(15),
    bloodType: z.string({
        required_error: "the blood type is required",
    }).refine(value => bloodTypeAllowed.includes(value)),
    appointmentType: z.string({
        required_error: "the appointments type is required",
    }).refine(value => appointmentAllowed.includes(value)),
    gender: z.string({
        required_error: "the gender is required",
    }),
    age: z.number({
        required_error: "the age is required"
    }),
    date: z.string({
        required_error: "the date is required"
    }).refine(value => !isNaN(Date.parse(value)),
        {
            message: "Invalid sytax should be: (YYYY-MM-DDTHH:MM)"
        }
    ),

    details: z.string().max(1000).optional(),
});