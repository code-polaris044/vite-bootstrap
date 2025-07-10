/**
 * FontAwesome
 * https://fontawesome.com/
 */
import { config, dom, library } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// solid
import {
	faCalendarDays,
	faCaretDown,
	faCaretUp,
	faCaretRight,
	faCircleCheck,
	faCircleInfo,
	faCircleUser,
	faClockRotateLeft,
	faComments,
	faDownload,
	faFileExcel,
	faFileImage,
	faFileLines,
	faFilePdf,
	faFilePowerpoint,
	faFileWord,
	faGrip,
	faMagnifyingGlass,
	faPaperPlane,
	faRightFromBracket,
	faTriangleExclamation,
	faUpRightFromSquare,
	faCalendar,
} from "@fortawesome/free-solid-svg-icons";

// all
library.add(
	// solid
	faCalendarDays,
	faCaretDown,
	faCaretUp,
	faCaretRight,
	faCircleCheck,
	faCircleInfo,
	faCircleUser,
	faClockRotateLeft,
	faComments,
	faDownload,
	faFileExcel,
	faFileImage,
	faFileLines,
	faFilePdf,
	faFilePowerpoint,
	faFileWord,
	faGrip,
	faMagnifyingGlass,
	faPaperPlane,
	faRightFromBracket,
	faTriangleExclamation,
	faUpRightFromSquare,
	faCalendar,
);

dom.watch();
