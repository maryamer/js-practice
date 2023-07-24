// selecting element in dom

// query selector
// const course = document.querySelector(".course");
// const allCourses = document.querySelectorAll(".course");
// console.log(course);
// console.log(course.tagName, course.classList, course.textContent);
// console.log(allCourses);
// allCourses.forEach((course) => console.log(course.textContent));
// textContent is a property not amethod

// get by id
// console.log(document.getElementById("addBtn"));
// console.log(document.querySelector("#addBtn"));
// console.log(document.getElementsByClassName("course"));

// add element to dom : create elemnt

// 1.creat
// 2.content and properties
// 3.append to dom

// append => last of the elements
// prepend => first of the elements
// appendChild

const newCourse = document.createElement("p");
newCourse.textContent = "javascript course";
newCourse.classList.add("course-title");
document.querySelector("#course-list").append(newCourse);

console.log(document.getElementById("course-list"));

// const seeMoreP = document.createElement("p");
// seeMoreP.classList.add("see-more");
// const seeMoreBtn = document.createElement("button");
// seeMoreBtn.classList.add("see-btn");
// seeMoreBtn.append("see more");
// seeMoreP.append("see more courses", seeMoreBtn);
// document.querySelector("#course-list").append(seeMoreP);

const seeMore = document.createElement("div");
seeMore.innerHTML = `<p class="see-more">
see All course-list
<button class="see-btn">see all</button>
</p>`;
document.querySelector("#course-list").append(seeMore);
