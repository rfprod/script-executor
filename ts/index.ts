import * as colors from 'colors';
/*
*	TEXT COLORS
*
*	black
*	red
*	green
*	yellow
*	blue
*	magenta
*	cyan
*	white
*	gray
*	grey
*/

export module TestModule {
	export class TestTask {

		private input: any = [
			{
				arr: [
					{ x: 1, y: 1 },
					{ x: 2, y: 2 }
				] as any[],
				expected: [
					{ x: 1, y: 1 }
				] as any[]
			}
		];

		constructor() {
			console.log(colors.green('TestModule: TestTask init'));
			console.log(colors.yellow('sample input'), this.input[0].arr);
			console.log(colors.yellow('sample expected'), this.input[0].expected);
		}
	}
}
