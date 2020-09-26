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

	const post_type = 'mic_wp_pageface';

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

	public function register_post_type() {
		
		register_post_type('mic_publisher_page', array(
			'labels'             => array(
				'name'               => __( 'Publisher Pages', 'mic-wp-pageface' ),
				'singular_name'      => __( 'Publisher Page', 'mic-wp-pageface' ),
				'add_new'            => __( 'Add new', 'mic-wp-pageface' ),
				'add_new_item'       => __( 'Add new Publisher Page', 'mic-wp-pageface' ),
				'edit_item'          => __( 'Edit Publisher Page', 'mic-wp-pageface' ),
				'new_item'           => __( 'Publisher Page', 'mic-wp-pageface' ),
				'view_item'          => __( 'View Publisher Page', 'mic-wp-pageface' ),
				'search_items'       => __( 'Search Publisher Page', 'mic-wp-pageface' ),
				'not_found'          =>  __( 'Publisher Page not found', 'mic-wp-pageface' ),
				'not_found_in_trash' => __( 'Publisher Page not found in trash', 'mic-wp-pageface' ),
				'parent_item_colon'  => '',
				'menu_name'          => __( 'Publisher Pages', 'mic-wp-pageface' ),

			  ),
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'show_in_rest'       => true,
			'query_var'          => true,
			'rewrite'            => true,
			'capability_type'    => 'page',
			'has_archive'        => true,
			'hierarchical'       => false,
			'menu_position'      => null,
			'supports'           => array('title','excerpt')
		) );
	}

	public function plugin_filters() {
    remove_filter('the_excerpt','wpautop');
		add_filter('the_excerpt',array($this, 'custom_formatting'));

		add_action( 'edit_form_after_title', array($this, 'add_app_block_to_page'));

		add_filter( "get_user_option_screen_layout_mic_publisher_page", function( $result, $option, $user ){
		  return '1';
		}, 10, 3 );

		add_filter( 'gettext', function ( $translation, $original ){
	    if ( 'Excerpt' == $original ) {
	        return 'Publisher Page Dump';
	    }else{
	        $pos = strpos($original, 'Excerpts are optional hand-crafted summaries of your');
	        if ($pos !== false) {
	            return  'Copy for additional use';
	        }
	    }
	    return $translation;
		}, 10, 2 );
	}

	public function custom_formatting($content){
		if(get_post_type()=='mic_publisher_page')
		    return $content;
		else
		 return wpautop($content);
	}

	public function add_app_block_to_page($post){
		if($post->post_type=='mic_publisher_page') {
			require_once plugin_dir_path( dirname( __FILE__ ) ) .  'admin/partials/mic-wp-pageface-admin-display.php';
		}
	}

	/**
	 * Register the rest routes for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function register_rest_routes() {
		register_rest_route( 'mic-wp-pageface/v1','/save', array(
			'methods'             => 'POST',
			'callback'            => array($this, 'save_post'),
			'permission_callback' => function ( WP_REST_Request $request ) {
				return current_user_can( 'edit_others_posts' );
			}
		) );
	}

	public function save_post($request) {
		
		// $filters = $request->get_query_params();
		$parameters = $request->get_json_params();
		return $parameters;

		// print_r($request);
		
		// try {
			
		// 	return $filers;
		// } catch (HttpClientException $e) {
		// 	return new WP_Error($e->getCode(), $e->getMessage());
		// }
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

		$screen = get_current_screen();

		if ( get_post_type() == 'mic_publisher_page' )
		{

		// wp_enqueue_style( $this->plugin_name . '-reset', plugin_dir_url( __FILE__ ) . 'css/mic-wp-pageface-admin-reset.css', array(), $this->version, 'all' );

		// wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/mic-wp-pageface-admin.css', array($this->plugin_name . '-reset' ), $this->version, 'all' );

		wp_enqueue_style( $this->plugin_name . 'app', plugin_dir_url( __FILE__ ) . 'adminjs/micapp/css/app.css', array(), $this->version, 'all' );
		}

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
