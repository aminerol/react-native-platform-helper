export function isIphoneX(): boolean;
export function isAndroid(): boolean;
export function ifIphoneX<T, U>(iphoneXVal: T, regularVal: U): T | U;
export function ifAndroid<T, U>(androidXVal: T, androidVal: U): T | U;
export function renderIf<T>(predicate: T): T;
export function getNavBarHeight(): number;
export function getStatusBarHeight(safe?: boolean): number;
export function getBottomSpace(): number;