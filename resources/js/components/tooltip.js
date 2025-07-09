import Tooltip from "bootstrap/js/dist/tooltip";

/**
 * Bootstrapのtooltipのプラグイン実装
 *
 * @description
 * - ページ上のすべてのtooltipを初期化(オプトインの有効化)
 * - [data-bs-toggle]が重複した時に、tooltipが挙動しなくなるため、idでも挙動するようコード追加
 *
 * @see {@link https://getbootstrap.jp/docs/5.3/components/tooltips/} Bootstrap tooltip公式ドキュメント
 * @see {@link https://floating-ui.com/?utm_source=popper.js.org} floating-ui(旧Popper)公式ドキュメント
 */

// ディフォルトの初期化
const initTooltips = () => {
    const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]',
    );
    const tooltipList = [...tooltipTriggerList].map(
        (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl),
    );
    return tooltipList;
};

document.addEventListener("DOMContentLoaded", () => {
    // 全てのツールチップを初期化
    initTooltips();

    // 特定のボタン要素を取得してツールチップを手動で初期化
    const tooltipBtn = document.getElementById("tooltipLightbox");
    if (tooltipBtn) {
        new Tooltip(tooltipBtn);
    }
});

// 必要に応じて関数をエクスポート
export { initTooltips };
