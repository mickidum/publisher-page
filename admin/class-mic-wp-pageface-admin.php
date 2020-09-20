<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://mickidum.github.io
 * @since      1.0.0
 *
 * @package    Mic_Wp_Pageface
 * @subpackage Mic_Wp_Pageface/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Mic_Wp_Pageface
 * @subpackage Mic_Wp_Pageface/admin
 * @author     Michael <mickidum@gmail.com>
 */
class Mic_Wp_Pageface_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

		$this->load_dependencies();

	}

	/**
	 * Load the required dependencies for the Admin facing functionality.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - Public_Woo_Api_Admin_Settings. Registers the admin settings and page.
	 *
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) .  'admin/class-mic-wp-pageface-admin-settings.php';

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Mic_Wp_Pageface_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Mic_Wp_Pageface_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name . '-reset', plugin_dir_url( __FILE__ ) . 'css/mic-wp-pageface-admin-reset.css', array(), $this->version, 'all' );

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/mic-wp-pageface-admin.css', array($this->plugin_name . '-reset' ), $this->version, 'all' );

		wp_enqueue_style( $this->plugin_name . 'app', plugin_dir_url( __FILE__ ) . 'adminjs/micapp/css/app.css', array($this->plugin_name), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Mic_Wp_Pageface_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Mic_Wp_Pageface_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->plugin_name . 'appjs-chunks', plugin_dir_url( __FILE__ ) . 'adminjs/micapp/js/chunk-vendors.js', array(), $this->version, true );

		wp_enqueue_script( $this->plugin_name . 'appjs', plugin_dir_url( __FILE__ ) . 'adminjs/micapp/js/app.js', array($this->plugin_name . 'appjs-chunks'), $this->version, true );

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/mic-wp-pageface-admin.js', array( 'jquery' ), $this->version, false );

		wp_localize_script( $this->plugin_name . 'appjs', 'publisherPageStore', 
			array( 
				'restUrl' =>  rtrim(get_rest_url(),"/")
			) );

	}

}
