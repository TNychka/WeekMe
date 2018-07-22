<!-- LOGIN PAGE -->
<!DOCTYPE html>
<html>
	<head>
		<title>Login</title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	</head>
	<body>
		<div id="app">
			{{ message }}
		</div>
		<script>
			new Vue({
				el: '#app',
				data: {
					message: 'Login!'
				}
			});
		</script>
	</body>
</html>
