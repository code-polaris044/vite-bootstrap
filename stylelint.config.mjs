/** @type {import('stylelint').Config} */
export default {
	extends: ["stylelint-config-standard-scss"],
	plugins: ["stylelint-order"],
	rules: {
		"custom-property-no-missing-var-function": null,
		"no-descending-specificity": null,
		"no-invalid-position-at-import-rule": null, // @include bsBanner("")許容
		"number-max-precision": 10, // Dart Sassに合わせる
		"order/properties-alphabetical-order": true, // アルファベット順
		"property-no-unknown": [true, { ignoreProperties: ["navigation"] }],
		"scss/at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: ["view-transition"],
			},
		],
		"selector-class-pattern": null, // classでkebab-case以外も許容
	},
};
