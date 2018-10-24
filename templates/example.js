// Override the default template set
CKEDITOR.addTemplates('default', {
  // The name of sub folder which hold the shortcut preview images of the
  // templates.
  imagesPath: '/modules/contrib/drupal_ckeditor/templates/images/',

  // The templates definitions.
  templates: [
    {
      title: 'Container 2 columns',
      image: 'template1.gif',
      description: 'Provides a container with 2 separated columns',
      html: '<div class="col-2">' +
      '<div>' +
      '<p>' +
      'Type your left content here' +
      '</p>' +
      '</div>' +
      '<div>' +
      '<p>' +
      'Type your right content here' +
      '</p>' +
      '</div>' +
      '</div>'
    },
    {
      title: 'Container 3 columns',
      image: 'template2.gif',
      description: 'Provides a container with 3 separated columns',
      html: '<div class="col-3">' +
      '<div>' +
      '<p>' +
      'Type your left content here' +
      '</p>' +
      '</div>' +
      '<div>' +
      '<p>' +
      'Type your middle content here' +
      '</p>' +
      '</div>' +
      '<div>' +
      '<p>' +
      'Type your right content here' +
      '</p>' +
      '</div>' +
      '</div>'
    }
  ]
});
