import { createElement } from "preact";
import { Text } from "preact-i18n";
import { SLUG } from "./constants";
import { withIntl } from "./enhancers";
import App from "./components/app";
import { MenuItem } from "@zimbra-client/components";

export default function Zimlet(context) {
	const { plugins } = context;
	const exports = {};

	exports.init = function init() {
		// The zimlet slots to load into, and what is being loaded into that slot
		// (CustomMenuItem and Router are both defined below)
		plugins.register(`slot::contacts-menu`, CustomMenuItem);

		// Only needed if you need to create a new url route, like for a menu tab, or print, etc
		plugins.register(`slot::contacts-routes`, Router);
	};

	// Register a new route with the preact-router instance
	function Router() {
		return ({ parentSlug }) => [<App path={`/${parentSlug}/${SLUG}`} />]
	}

	// Create a main nav menu item.
	// withIntl should be used on every component registered via plugins.register(). You will see this in the App index.js file as well
	function CustomMenuItem(){
		return withIntl()(({ parentSlug }) => (
			<MenuItem responsive icon="user" href={`/${parentSlug}/${SLUG}`}>
				<Text id="newtab.menuItem" />
			</MenuItem>
		))
	}

	return exports;
}

