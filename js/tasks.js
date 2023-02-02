/* tasks.js */
export default class Tasks {
	constructor() {
	  this.tasks = [];
	}
  
	/** @param {string} csvString */
	importCsv(csvString) {
		  // your code
		  this.tasks = csvString.split(', ');
	}

	getCount() {
		return  this.tasks.length;
	}

	getFirst() {
		return this.tasks[0]
	}

	getLast() {
		return this.tasks.at(-1)
	}

	getUnformattedTasks() {
		return this.tasks.join(", ").toLowerCase();
	}
  }