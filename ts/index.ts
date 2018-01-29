export module TestModule {
	export class TestTask {
		public t: number = 2;
		public x: number = 10 / this.t;

		constructor() {
			console.log('TestModule: TestTask init');
			console.log('t', this.t);
			console.log('x', this.x);
		}
	}
}
