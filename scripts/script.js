function displayCourses(filter = "All"){
    console.log(`Displaying courses for: ${filter}`);
    const container = document.getElementById("courseContainer");
    if (!container) {
        console.error("courseContainer div NOT found!");
        return;}
    //clear content in the courseContainer
    container.innerHTML = "";

    let filteredCourses = courses;
    if (filter.toUpperCaase() !== "ALL") {
        filteredCourses = courses.filter(course => course.subject == filter);
    }

    filteredCourses.forEach(course => {
        let courseDiv = document.createElement("div");
        courseDiv.classList.add("course-item", course.completed ? "completed" : "not-completed");
        courseDiv.innerHTML = '<strong> ${course.subject}${course.number} - ${course.title}</strong>';
        container.appendChild(courseDiv);
    });
}
document.getElementById("all").addEventListener("click", () => displayCourses("All"));
document.getElementById("wdd").addEventListener("click", () => displayCourses("WDD"));
document.getElementById("cse").addEventListener("click", () => displayCourses("CSE"));

document.addEventListener("DOMContentLoaded", () => displayCourses());
