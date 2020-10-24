import { Course } from './course.js';

import { dataCourses } from './dataCourses.js';

import { Student } from './student.js';

import { dataStudents } from './dataStudents.js';

let coursesTbody: HTMLElement = document.getElementById('courses')!;
let studentTbody: HTMLElement = document.getElementById('students')!;
const btnfilterByName: HTMLElement = document.getElementById(
	'button-filterByName'
)!;
const btnfilterByCredits: HTMLElement = document.getElementById("button-filterByCredits")!;

const inputSearchBox: HTMLInputElement = <HTMLInputElement>(
	document.getElementById('search-box')!
);
const inputSearchBox1: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box1")!;
const inputSearchBox2: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box2")!;

const totalCreditElm: HTMLElement = document.getElementById('total-credits')!;

btnfilterByName.onclick = () => applyFilterByName();

btnfilterByCredits.onclick = () => applyFilterByCredits();

renderStudentsInTable(dataStudents);

renderCoursesInTable(dataCourses);

totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`;

function renderCoursesInTable(courses: Course[]): void {
	console.log('Desplegando cursos');
	courses.forEach((course) => {
		let trElement = document.createElement('tr');
		trElement.innerHTML = `<td>${course.nombre}</td>
                           <td>${course.profesor}</td>
                           <td>${course.creditos}</td>`;
		coursesTbody.appendChild(trElement);
	});
}

function renderStudentsInTable(courses: Student[]): void {
	console.log('Desplegando cursos');
	courses.forEach((course) => {
		let trElement = document.createElement('tr');
		trElement.innerHTML = `<td>${course.nombre}</td>
						   <td>${course.cedula}</td>
						   <td>${course.codigo}</td>
						   <td>${course.edad}</td>
						   <td>${course.direccion}</td>
                           <td>${course.telefono}</td>`;
		coursesTbody.appendChild(trElement);
	});
}

function applyFilterByName() {
	let text = inputSearchBox.value;
	text = text == null ? '' : text;
	clearCoursesInTable();
	let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
	renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, courses: Course[]) {
	return nameKey === ''
		? dataCourses
		: courses.filter((c) => c.nombre.match(nameKey));
}

function applyFilterByCredits() { 
    let mayor = +inputSearchBox1.value;
    let menor = +inputSearchBox2.value;
    clearCoursesInTable();
    let coursesFiltered: Course[] = searchCourseByCredits(mayor, menor, dataCourses);
    renderCoursesInTable(coursesFiltered);
  }

  function searchCourseByCredits(mayor: number, menor: number, courses: Course[]){
    let rta : Course[] = courses.filter(c=>c.creditos>=mayor && c.creditos<=menor);
    return rta; 
  }

function getTotalCredits(courses: Course[]): number {
	let totalCredits: number = 0;
	courses.forEach((course) => (totalCredits = totalCredits + course.creditos));
	return totalCredits;
}

function clearCoursesInTable() {
	while (coursesTbody.hasChildNodes()) {
		if (coursesTbody.firstChild != null) {
			coursesTbody.removeChild(coursesTbody.firstChild);
		}
	}
}
