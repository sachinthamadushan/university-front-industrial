
export interface Enrollment{
    id?:number,
    stuId:string,
    courseId:number,
    enrollDate:string
}

export interface LoadEnrollment{
    id:number,
    entroll_date:string,
    course_name:string,
    full_name:string,
    course_fee:number
}