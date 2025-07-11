/**
 * flatpickr
 * https://flatpickr.js.org/
 */

// public / assets / css / script.cssへ出力
import "flatpickr/dist/flatpickr.min.css";
//テーマ
import "flatpickr/dist/themes/material_blue.css";
//flatpickr
import flatpickr from "flatpickr";
// 期間選択のプラグイン
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";
//日本語化対応
import { Japanese } from "flatpickr/dist/l10n/ja.js";

flatpickr("#datepicker", {
	locale: Japanese,
	dateFormat: "Y-m-d",
	minDate: "today",
	disableMobile: "true", //モバイル対応
});

flatpickr("#firstRangeInput", {
	plugins: [new rangePlugin({ input: "#secondRangeInput" })],
	locale: Japanese,
	dateFormat: "Y-m-d",
	minDate: "today",
	disableMobile: "true", //モバイル対応
});
