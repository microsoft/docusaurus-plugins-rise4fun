import type { Plugin } from "@docusaurus/types";
import type {
    ThemeConfig,
    CodeSandboxButtonThemeConfig,
} from "@rise4fun/docusaurus-theme-codesandbox-button";

export default function themeCodeSandboxButton(): Plugin<void> {
    return {
        name: "@rise4fun/docusaurus-theme-codesandbox-button",

        getThemePath() {
            return "../lib/theme";
        },
        getTypeScriptThemePath() {
            return "../src/theme";
        },
    };
}

export function getSwizzleComponentList() {
    return undefined;
}

export { ThemeConfig, CodeSandboxButtonThemeConfig };
