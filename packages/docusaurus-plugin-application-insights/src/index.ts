import { Joi } from "@docusaurus/utils-validation";
import type {
    LoadContext,
    Plugin,
    OptionValidationContext,
} from "@docusaurus/types";
import type { ApplicationInsightsOptions, Options } from "./options";
import { resolve } from "node:path";

export default function pluginApplicationInsights(
    _context: LoadContext,
    options: ApplicationInsightsOptions
): Plugin {
    const isProd = process.env.NODE_ENV === "production";
    return {
        name: "@rise4fun/docusaurus-plugin-application-insights",

        getClientModules() {
            return isProd ? [resolve(__dirname, "./analytics")] : [];
        },

        injectHtmlTags() {
            if (!isProd) {
                return {};
            }
            return {
                headTags: [
                    {
                        tagName: "script",
                        innerHTML: `window.appInsightsConfig = ${JSON.stringify(
                            options
                        )};`,
                    },
                ],
            };
        },
    };
}

const pluginOptionsSchema = Joi.object<ApplicationInsightsOptions>({
    instrumentationKey: Joi.string().required(),
});

export function validateOptions({
    validate,
    options,
}: OptionValidationContext<
    Options,
    ApplicationInsightsOptions
>): ApplicationInsightsOptions {
    return validate(pluginOptionsSchema, options);
}

export type { ApplicationInsightsOptions, Options };
