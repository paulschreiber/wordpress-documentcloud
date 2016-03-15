(function( $ ) {
	var media = wp.media;

	tinymce.create( 'tinymce.plugins.documentCloud', {
	/**
	 * Initializes the plugin, this will be executed after the plugin has been created.
	 * This call is done before the editor instance has finished its initialization so use the onInit event
	 * of the editor instance to intercept that event.
	 *
	 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
	 * @param {string} url Absolute URL to where the plugin is located.
	 */
	init: function( ed, url ) {
			ed.addButton( 'documentcloud', {
				title: 'DocumentCloud',
				cmd: 'documentcloud',
				image: url + '/documentcloud.png'
			});

			ed.addCommand( 'documentcloud', function() {
				var returnText = '[documentcloud]';
				ed.execCommand( 'mceInsertContent', 0, returnText );
			});
		}
	});
	tinymce.PluginManager.add( 'documentcloud', tinymce.plugins.documentCloud );

	wp.mce = wp.mce || {};
	wp.mce.documentCloud = {
		template: media.template( 'editor-documentcloud' ),
		getContent: function() {
			var documentId = this.shortcode.attrs.named.url.replace( 'https://www.documentcloud.org/documents/', '' ).replace( '.html', '' );
			options = { 'id': documentId };
			return this.template( options );
		}
	};
	wp.mce.views.register( 'documentcloud', wp.mce.documentCloud );
})( jQuery );
