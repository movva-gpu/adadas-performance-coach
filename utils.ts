/**
 * @description Coloring functions for `console.log` or other outputs. These functions apply ANSI color codes to text, enhancing readability or for aesthetic purposes in the console. Each method in this class takes a string as input and returns the string formatted with the corresponding ANSI color code.
 *
 * Basic usage:
 * ```js
 * console.log(coloring.red('Hello World!')); // Displays text in red
 * ```
 *
 * Using template literals to combine multiple colors:
 * ```js
 * console.log(`${coloring.blue("I'm blue dabedidabedai")}, ${coloring.green("And if I'm green I will die")}...`);
 * ```
 *
 * @class coloring
 * This class contains static methods for text and background colors. Each method modifies the color of the input or background for the terminal.
 */
export class coloring {
	/**
	 * @description Makes the input bright.
	 * @param {unknown} input - The value to be formatted.
	 * @param {boolean} preventStylePropagation - Either if the styling should reset after function execution or not.
	 * @returns {string}  The formatted text.
	 */
	static bright = (input?: unknown, preventStylePropagation = true) =>
		'\x1b[1m' + (input ? input : '') + (preventStylePropagation && !!input ? '\x1b[0m' : '');

	/**
	 * @description Makes the input dim.
	 * @param {unknown} input - The value to be formatted.
	 * @param {boolean} preventStylePropagation - Either if the styling should reset after function execution or not.
	 * @returns {string}  The formatted text.
	 */
	static dim = (input?: unknown, preventStylePropagation = true) =>
		'\x1b[2m' + (input ? input : '') + (preventStylePropagation && !!input ? '\x1b[0m' : '');

	/**
	 * @description Underlines the input.
	 * @param {unknown} input - The value to be formatted.
	 * @param {boolean} preventStylePropagation - Either if the styling should reset after function execution or not.
	 * @returns {string}  The formatted text.
	 */
	static underscore = (input?: unknown, preventStylePropagation = true) =>
		'\x1b[4m' + (input ? input : '') + (preventStylePropagation && !!input ? '\x1b[0m' : '');

	/**
	 * @description Makes the input blink.
	 * @param {unknown} input - The value to be formatted.
	 * @param {boolean} preventStylePropagation - Either if the styling should reset after function execution or not.
	 * @returns {string}  The formatted text.
	 */
	static blink = (input?: unknown, preventStylePropagation = true) =>
		'\x1b[5m' + (input ? input : '') + (preventStylePropagation && !!input ? '\x1b[0m' : '');

	/**
	 * @description Reverses the input color and background.
	 * @param {unknown} input - The value to be formatted.
	 * @param {boolean} preventStylePropagation - Either if the styling should reset after function execution or not.
	 * @returns {string}  The formatted text.
	 */
	static reverse = (input?: unknown, preventStylePropagation = true) =>
		'\x1b[7m' + (input ? input : '') + (preventStylePropagation && !!input ? '\x1b[0m' : '');

	/**
	 * @description Makes the input hidden.
	 * @param {unknown} input - The value to be formatted.
	 * @param {boolean} preventStylePropagation - Either if the styling should reset after function execution or not.
	 * @returns {string}  The formatted text.
	 */
	static hidden = (input?: unknown, preventStylePropagation = true) =>
		'\x1b[8m' + (input ? input : '') + (preventStylePropagation && !!input ? '\x1b[0m' : '');

	/**
	 * @description Makes the input black.
	 * @param {unknown} input - The value to be formatted.
	 * @param {boolean} preventStylePropagation - Either if the styling should reset after function execution or not.
	 * @returns {string}  The formatted text.
	 */
	static black = (input?: unknown, preventStylePropagation = true) =>
		'\x1b[30m' + (input ? input : '') + (preventStylePropagation && !!input ? '\x1b[0m' : '');

	/**
	 * @description Makes the input red.
	 * @param {unknown} input - The value to be formatted.
	 * @param {boolean} preventStylePropagation - Either if the styling should reset after function execution or not.
	 * @returns {string}  The formatted text.
	 */
	static red = (input?: unknown, preventStylePropagation = true) =>
		'\x1b[31m' + (input ? input : '') + (preventStylePropagation && !!input ? '\x1b[0m' : '');

	/**
	 * @description Makes the input green.
	 * @param {unknown} input - The value to be formatted.
	 * @param {boolean} preventStylePropagation - Either if the styling should reset after function execution or not.
	 * @returns {string}  The formatted text.
	 */
	static green = (input?: unknown, preventStylePropagation = true) =>
		'\x1b[32m' + (input ? input : '') + (preventStylePropagation && !!input ? '\x1b[0m' : '');

	/**
	 * @description Makes the input yellow.
	 * @param {unknown} input - The value to be formatted.
	 * @param {boolean} preventStylePropagation - Either if the styling should reset after function execution or not.
	 * @returns {string}  The formatted text.
	 */
	static yellow = (input?: unknown, preventStylePropagation = true) =>
		'\x1b[33m' + (input ? input : '') + (preventStylePropagation && !!input ? '\x1b[0m' : '');

	/**
	 * @description Makes the input blue.
	 * @param {unknown} input - The value to be formatted.
	 * @param {boolean} preventStylePropagation - Either if the styling should reset after function execution or not.
	 * @returns {string}  The formatted text.
	 */
	static blue = (input?: unknown, preventStylePropagation = true) =>
		'\x1b[34m' + (input ? input : '') + (preventStylePropagation && !!input ? '\x1b[0m' : '');

	/**
	 * @description Makes the input magenta.
	 * @param {unknown} input - The value to be formatted.
	 * @param {boolean} preventStylePropagation - Either if the styling should reset after function execution or not.
	 * @returns {string}  The formatted text.
	 */
	static magenta = (input?: unknown, preventStylePropagation = true) =>
		'\x1b[35m' + (input ? input : '') + (preventStylePropagation && !!input ? '\x1b[0m' : '');

	/**
	 * @description Makes the input cyan.
	 * @param {unknown} input - The value to be formatted.
	 * @param {boolean} preventStylePropagation - Either if the styling should reset after function execution or not.
	 * @returns {string}  The formatted text.
	 */
	static cyan = (input?: unknown, preventStylePropagation = true) =>
		'\x1b[36m' + (input ? input : '') + (preventStylePropagation && !!input ? '\x1b[0m' : '');

	/**
	 * @description Makes the input white.
	 * @param {unknown} input - The value to be formatted.
	 * @param {boolean} preventStylePropagation - Either if the styling should reset after function execution or not.
	 * @returns {string}  The formatted text.
	 */
	static white = (input?: unknown, preventStylePropagation = true) =>
		'\x1b[37m' + (input ? input : '') + (preventStylePropagation && !!input ? '\x1b[0m' : '');

	/**
	 * @description Makes the input gray.
	 * @param {unknown} input - The value to be formatted.
	 * @param {boolean} preventStylePropagation - Either if the styling should reset after function execution or not.
	 * @returns {string}  The formatted text.
	 */
	static gray = (input?: unknown, preventStylePropagation = true) =>
		'\x1b[90m' + (input ? input : '') + (preventStylePropagation && !!input ? '\x1b[0m' : '');

	/**
	 * @description Makes the input's background black.
	 * @param {unknown} input - The value to be formatted.
	 * @param {boolean} preventStylePropagation - Either if the styling should reset after function execution or not.
	 * @returns {string}  The formatted text.
	 */
	static bgBlack = (input?: unknown, preventStylePropagation = true) =>
		'\x1b[40m' + (input ? input : '') + (preventStylePropagation && !!input ? '\x1b[0m' : '');

	/**
	 * @description Makes the input's background red.
	 * @param {unknown} input - The value to be formatted.
	 * @param {boolean} preventStylePropagation - Either if the styling should reset after function execution or not.
	 * @returns {string}  The formatted text.
	 */
	static bgRed = (input?: unknown, preventStylePropagation = true) =>
		'\x1b[41m' + (input ? input : '') + (preventStylePropagation && !!input ? '\x1b[0m' : '');

	/**
	 * @description Makes the input's background green.
	 * @param {unknown} input - The value to be formatted.
	 * @param {boolean} preventStylePropagation - Either if the styling should reset after function execution or not.
	 * @returns {string}  The formatted text.
	 */
	static bgGreen = (input?: unknown, preventStylePropagation = true) =>
		'\x1b[42m' + (input ? input : '') + (preventStylePropagation && !!input ? '\x1b[0m' : '');

	/**
	 * @description Makes the input's background yellow.
	 * @param {unknown} input - The value to be formatted.
	 * @param {boolean} preventStylePropagation - Either if the styling should reset after function execution or not.
	 * @returns {string}  The formatted text.
	 */
	static bgYellow = (input?: unknown, preventStylePropagation = true) =>
		'\x1b[43m' + (input ? input : '') + (preventStylePropagation && !!input ? '\x1b[0m' : '');

	/**
	 * @description Makes the input's background blue.
	 * @param {unknown} input - The value to be formatted.
	 * @param {boolean} preventStylePropagation - Either if the styling should reset after function execution or not.
	 * @returns {string}  The formatted text.
	 */
	static bgBlue = (input?: unknown, preventStylePropagation = true) =>
		'\x1b[44m' + (input ? input : '') + (preventStylePropagation && !!input ? '\x1b[0m' : '');

	/**
	 * @description Makes the input's background magenta.
	 * @param {unknown} input - The value to be formatted.
	 * @param {boolean} preventStylePropagation - Either if the styling should reset after function execution or not.
	 * @returns {string}  The formatted text.
	 */
	static bgMagenta = (input?: unknown, preventStylePropagation = true) =>
		'\x1b[45m' + (input ? input : '') + (preventStylePropagation && !!input ? '\x1b[0m' : '');

	/**
	 * @description Makes the input's background cyan.
	 * @param {unknown} input - The value to be formatted.
	 * @param {boolean} preventStylePropagation - Either if the styling should reset after function execution or not.
	 * @returns {string}  The formatted text.
	 */
	static bgCyan = (input?: unknown, preventStylePropagation = true) =>
		'\x1b[46m' + (input ? input : '') + (preventStylePropagation && !!input ? '\x1b[0m' : '');

	/**
	 * @description Makes the input's background white.
	 * @param {unknown} input - The value to be formatted.
	 * @param {boolean} preventStylePropagation - Either if the styling should reset after function execution or not.
	 * @returns {string}  The formatted text.
	 */
	static bgWhite = (input?: unknown, preventStylePropagation = true) =>
		'\x1b[47m' + (input ? input : '') + (preventStylePropagation && !!input ? '\x1b[0m' : '');

	/**
	 * @description Makes the input's background gray.
	 * @param {unknown} input - The value to be formatted.
	 * @param {boolean} preventStylePropagation - Either if the styling should reset after function execution or not.
	 * @returns {string}  The formatted text.
	 */
	static bgGray = (input?: unknown, preventStylePropagation = true) =>
		'\x1b[100m' + (input ? input : '') + (preventStylePropagation && !!input ? '\x1b[0m' : '');
}

export class superConsole {
	static log(message: unknown, id = 'Adadas'): void {
		console.log(`[${this.superTimestamp()}][${id}] - ${message}`);
	}

	static warn(message: unknown, id = 'Adadas'): void {
		console.log(
			coloring.yellow(
				`[${this.superTimestamp()}][${coloring.reverse('WARN')}${coloring.yellow()}][${id}] - ${message}`
			)
		);
	}

	static info(message: unknown, id = 'Adadas'): void {
		console.log(
			coloring.blue(
				`[${this.superTimestamp()}][${coloring.reverse('INFO')}${coloring.blue()}][${id}] - ${message}`
			)
		);
	}

	static error(message: unknown, id = 'Adadas'): void {
		console.log(
			coloring.red(
				`[${this.superTimestamp()}][${coloring.reverse('ERROR')}${coloring.red()}][${id}] - ${message}`
			)
		);
	}

	static ready(message: unknown, id = 'Adadas'): void {
		console.log(
			coloring.green(
				`[${this.superTimestamp()}][${coloring.reverse('READY')}${coloring.green()}][${id}] - ${message}`
			)
		);
	}

	private static superTimestamp(): string {
		const date = new Date(Date.now());
		return (
			`${date.getUTCMonth()}/${date.getUTCDate()}/${date.getUTCFullYear()}` +
			' ' +
			`${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`
		);
	}
}
