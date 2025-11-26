
export interface Student {
    student_id:string | undefined;
    first_name:string | undefined;
    last_name:string | undefined;
    email:string | undefined;
    dob?:string | undefined;
    status:number | undefined;
    
}

export interface StudentProps {
    onStudentAdded:()=> void;
    editingStudent:Student|undefined;
    cancleEdit:()=> void;
}