window.Xuimovie = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(document).ready(function() {
	mainRouter = new Xuimovie.Routers.Main();
	Xui.history.start({pushState: true});
});

$(document).on('page:load', function() {
	Xui.history.stop();
	mainRouter = new Xuimovie.Routers.Main();
	Xui.history.start({pushState: true});
});

function dateFormat(mysql_date) {
	var t = mysql_date.split(/[- T : Z]/);
	var d = new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
	var m_names = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

	var curr_date = d.getDate();
	var curr_month = d.getMonth();
	var curr_year = d.getFullYear();

	return curr_date + " " + m_names[curr_month] + " " + curr_year;
}