function displayCourses(filter = "All"){
    const container = document.getElementById("courseContainer");
    //clear content in the courseContainer
    container.innerHTML = "";

    let filteredCourses = courses;
    if (filter !== "ALL") {
        filteredCourses = courses.filter(course => course.subject == filter);
    }
    filteredCourses.forEach(course => {
        let courseDiv = document.createElement("div");
        courseDiv.classList.add("course-item", course.completed ? "completed" : "not-completed");
        courseDiv.innerHTML = `<strong> $course.subject} ${course.number} - ${course.title}</strong>`;
        container.appenedChild(courseDiv);
    });
}
document.getElementById("all").addEventListener("click", () => displayCourses("All"));