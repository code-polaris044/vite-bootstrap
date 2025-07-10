/**
 * flatpickr
 * https://flatpickr.js.org/
 */

// public / assets / css / script.cssへ出力
import "flatpickr/dist/flatpickr.min.css";
import flatpickr from "flatpickr";
//日本語化対応
import { Japanese } from "flatpickr/dist/l10n/ja.js";

flatpickr("#datepicker", {
	// minDate: "2023-01-01",
	// maxDate: "2023-12-31",
	enableTime: true,
	dateFormat: "Y-m-d H:i",
	disableMobile: "true", //モバイル対応
	locale: Japanese,
});

flatpickr(".input-group-addon", {
	// minDate: "2023-01-01",
	// maxDate: "2023-12-31",
	enableTime: true,
	dateFormat: "Y-m-d H:i",
	disableMobile: "true", //モバイル対応
	locale: Japanese,
});


