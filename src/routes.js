import Login from "views/auth/Login.js";
import QualityCheck from "views/qualityCheck";
import RetailPrice from "views/retail/RetailPrice";
import Sales from "views/sales";
import FreshnessCheck from "views/freshnessCheck";


var routes = [
	{
		path: "/login",
		name: "Login",
		icon: "ni ni-key-25 text-info",
		component: Login,
		layout: "/auth",
	},

	{
		path: "/quality-checks",
		name: "Quality Check",
		icon: "bx bx-check-shield text-primary fs-4",
		component: QualityCheck,
		layout: "/super-fruits",
	},

	{
		path: "/retail-price",
		name: "Retail Price",
		icon: "bx bx-dollar-circle fs-4 text-primary",
		component: RetailPrice,
		layout: "/super-fruits",
	},

	{
		path: "/sales",
		name: "Sales",
		icon: "bx bx-store-alt text-primary fs-4",
		component: Sales,
		layout: "/super-fruits",
	},

	{
		path: "/freshness-checks",
		name: "Freshness Check",
		icon: "bx bx-check-shield text-primary fs-4",
		component: FreshnessCheck,
		layout: "/super-fruits",
	},

];

export default routes;
