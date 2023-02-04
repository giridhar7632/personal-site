<script>
</script>

<div class="blob-container">
	<div class="blob" />
	<div class="blob one" />
	<div class="blob two" />
	<div class="blob three" />
	<div class="blob four" />
	<div class="blob five" />
	<div class="blob six" />
</div>

<style>
	.blob-container {
		overflow: hidden;
		position: absolute;
		height: 100vh;
		width: 100%;
		filter: blur(30px);
		z-index: -1;
	}

	.blob {
		background: #26c3f9;
		height: 60px;
		width: 80px;
		border-radius: 40% 50% 30% 40%;
		animation: transform 18s ease-in-out infinite both alternate,
			movement_one 12s ease-in-out infinite both;
		opacity: 0.7;
		position: absolute;
		left: 75%;
		top: 40%;
	}
	.blob.one {
		background: #0085ff;
		height: 150px;
		width: 200px;
		left: 10px;
		top: 10px;
		transform: rotate(-180deg);
		animation: transform 8s ease-in-out infinite both alternate,
			movement_two 20s ease-in-out infinite both;
	}

	.blob.six {
		background: #0eafff;
		height: 70px;
		width: 100px;
		left: 160px;
		top: 200px;
		transform: rotate(-180deg);
		animation: transform 5s ease-in-out infinite both alternate,
			movement_two 5s ease-in-out infinite both;
	}

	.blob.four {
		background: #4eaeff;
		height: 100px;
		width: 80px;
		left: 350px;
		top: 60px;
		transform: rotate(-180deg);
		animation: transform 17s ease-in-out infinite both alternate,
			movement_two 13s ease-in-out infinite both;
	}

	.blob.five {
		background: #0085ff;
		height: 100px;
		width: 80px;
		left: 480px;
		top: 30px;
		transform: rotate(-180deg);
		animation: transform 12s ease-in-out infinite both alternate,
			movement_two 18s ease-in-out infinite both;
	}

	.blob.two {
		background: #4eaeff;
		height: 150px;
		width: 150px;
		left: 600px;
		top: 150px;
		transform: rotate(-180deg);
		animation: transform 10s ease-in-out infinite both alternate,
			movement_two 10s ease-in-out infinite both;
	}

	.blob.three {
		background: #0eafff;
		height: 150px;
		width: 150px;
		left: 800px;
		top: 30px;
		transform: rotate(-180deg);
		animation: transform 7s ease-in-out infinite both alternate,
			movement_two 23s ease-in-out infinite both;
	}

	/* .blob.violet {
		background-color: #ac4eff;
	}
	.blob.red {
		background-color: #ff0800;
	}
	.blob.green {
		background-color: #26ff00;
	}
	.blob.pink {
		background-color: #ea437b;
	} */

	@keyframes transform {
		0%,
		100% {
			border-radius: 33% 67% 70% 30% / 30% 40% 70% 70%;
		}
		20% {
			border-radius: 37% 63% 51% 49% / 37% 35% 35% 63%;
		}
		40% {
			border-radius: 36% 64% 64% 36% / 64% 48% 52% 26%;
		}
		60% {
			border-radius: 37% 63% 51% 49% / 30% 30% 70% 73%;
		}
		80% {
			border-radius: 40% 60% 42% 58% / 51% 51% 49% 59%;
		}
	}

	@keyframes movement_one {
		0%,
		100% {
			transform: none;
		}
		50% {
			transform: translate(50%, 20%) rotateY(10deg) scale(1);
		}
	}

	@keyframes movement_two {
		0%,
		500% {
			transform: none;
		}
		50% {
			transform: translate(50%, 20%) rotate(-200deg) scale(1.3);
		}
	}
</style>
