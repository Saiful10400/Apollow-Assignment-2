import { z } from "zod";

const create= z.object({
    room: z.string().uuid(),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date format",
    }),
    startTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
        message: "Invalid time format, should be HH:MM",
    }),
    endTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
        message: "Invalid time format, should be HH:MM",
    })
});


const slotValidationSchema={create}

export default slotValidationSchema