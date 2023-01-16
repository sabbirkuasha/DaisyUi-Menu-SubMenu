<div class="dropdown dropdown-hover">
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<label tabindex="0" class="btn m-1">Hover</label>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-slate-900 rounded-box w-52">
		<li><a href="/">Item 1</a></li>
		<li><a href="/">Item 2</a></li>
	</ul>
</div>

<div class="dropdown dropdown-hover">
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<label tabindex="0" class="btn m-1">Hover</label>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-slate-900 rounded-box w-52">
		<li><a>Item 1</a></li>
		<li class="dropdown dropdown-hover dropdown-right dropdown-end">
			<label tabindex="0" class="btn m-1">Hover</label>
			<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-slate-900 rounded-box w-52">
				<li><a>Item 1</a></li>
				<li class="dropdown dropdown-hover dropdown-right dropdown-end">
					<label tabindex="0" class="btn m-1">Hover</label>
					<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-slate-900 rounded-box w-52">
						<li><a>Item 1</a></li>
						<li><a>Item 2</a></li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>
</div>
