<?php

/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       https://mickidum.github.io
 * @since      1.0.0
 *
 * @package    Mic_Wp_Pageface
 * @subpackage Mic_Wp_Pageface/admin/partials
 */
?>

<!-- This file should primarily consist of HTML with a little bit of PHP. -->

<?php // var_dump($_POST); ?>

<div class="publisher-admin publisher-page publisher-page-display">
	<!-- <div class="publisher-page-header">
		<h1 class="publisher-page-header-title">Publisher Page</h1>
		<div class="publisher-page-header-buttons">
			<form id="save_this" action="" method="POST">
			<input type="hidden" name="mic" value=''>
			<button class="publisher-page-header-buttons-preview button">Preview</button>
			<button class="publisher-page-header-buttons-publish button button-primary">Publish</button>
			</form>
		</div>
	</div> -->
	<div id="app"></div>
	<!-- <div class="publisher-page-wrapper">
		<div class="publisher-page-workspace">
			<span class="badge">workspace</span>
		</div>
		<div class="publisher-page-console">
			<span class="badge">console</span>
		</div>
	</div> -->
</div>

<style>
	/*#edit-slug-box, #postexcerpt {
		display: none;
	}*/
	.publisher-page {
		padding: 0;
		margin-top: 20px;
	}
	/*#post-body {
		display: flex;
		flex-direction: column-reverse;
	}*/
</style>

<script>
	window.onload = function() {
		var submit = document.querySelector('#publish');
		var excerpt = document.querySelector('#excerpt');
		// excerpt.setAttribute("readonly", true);
		// excerpt.value = decodeURIComponent(excerpt.value);
		submit.addEventListener('click', function(e){
			// e.preventDefault();
			// var a = confirm('publish?');
			excerpt.value = encodeURIComponent(JSON.stringify(window.publisherPageStore));

			console.log(excerpt.value)

		});
		// input.value = JSON.stringify(window.publisherPageStore);
	}
	
	
	// a.addEventListener('submit', function(e){
	// 	e.preventDefault();
		
	// 	console.log(a);
	// })
</script>

