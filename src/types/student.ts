
export interface Student {
    student_id:string;
    first_name:string;
    last_name:string;
    email:string;
    dob:string;
    status:number;
    
}

export interface StudentProps {
    onStudentAdded:()=> void;
}