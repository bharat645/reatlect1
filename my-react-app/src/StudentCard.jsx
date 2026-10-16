
function StudentCard({ name, age, course }) {
return (
<div className="student-card">
    <h2>{name}</h2>
    <p>Age: {age}</p>
    <p>Course: {course}</p>
</div>
);
}
export default StudentCard;