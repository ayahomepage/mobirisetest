defineM(
	"aya-advisoryM5",
	function (mbrApp) {
	  mbrApp.regExtension({
		name: "aya-advisoryM5",
		events: {
		  clickedButton: function () {
			alert("app.js  Alert!!!!!");
		  },
		},
	  });
	},
	[mbrApp]
  );