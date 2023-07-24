/** `version` managed by https://deno.land/x/land/publish. */
export const VERSION = "1.0.0";

/** `prepublish` will be invoked before publish, return `false` to prevent the publish. */
export function prepublish(version: string) {
  console.log("Upgrading to", version);
}

/** `postpublish` will be invoked after published. */
export function postpublish(version: string) {
  console.log("Upgraded to", version);
}
