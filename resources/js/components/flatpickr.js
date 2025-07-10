/**
 * flatpickr
 * https://flatpickr.js.org/
 */

import "flatpickr/dist/flatpickr.min.css";
import flatpickr from "flatpickr";
import { Japanese } from "flatpickr/dist/l10n/ja.js";

flatpickr("#datepicker", {
	locale: "ja",
	minDate: "2023-01-01",
	maxDate: "2023-12-31",
	enableTime: true,
	dateFormat: "Y-m-d H:i",
	disableMobile: "true",
	locale: Japanese,
});
