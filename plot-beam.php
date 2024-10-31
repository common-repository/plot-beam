<?php
/**
 * Plugin Name:       PlotBeam
 * Description:       The Wordpress Plot Beam plugin displays your Qlik Sense data within your Wordpress site. Share your public-facing data visualisations with your clients and reporting bodies using Plot Beam’s dynamic and responsive chart formatting. Publish your public data with confidence, knowing that the Plot Guard service has handled the authentication process for you.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:           	Notitia
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       plot-beam
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_plot_beam_block_init() {
	register_block_type( 
		__DIR__ . '/build',
		array(
			'render_callback' => 'block3HTML'
		)
	);
}
add_action( 'init', 'create_block_plot_beam_block_init' );
function block3HTML($attributes) {
	if (!is_admin()) {
		wp_enqueue_script('clientContents', plugin_dir_url(__FILE__) . 'sveltebuild/svelte.js ', array('wp-element'));
		wp_enqueue_style('clientStyles', plugin_dir_url(__FILE__) . 'sveltebuild/svelte.css');
	} 
	ob_start(); ?>
   <div class="qlik-block"><pre style="display: none;"><?php echo base64_encode(wp_json_encode($attributes)) ?></pre></div>
	<?php return ob_get_clean();
}
