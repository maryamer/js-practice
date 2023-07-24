// selecting element in dom

// query selector
const course = document.querySelector(".course");
const allCourses = document.querySelectorAll(".course");
console.log(course);
console.log(course.tagName, course.classList, course.textContent);
console.log(allCourses);
allCourses.forEach((course) => console.log(course.textContent));
// textContent is a property not amethod

// get by id
console.log(document.getElementById("addBtn"));
console.log(document.querySelector("#addBtn"));
console.log(document.getElementsByClassName("course"));
